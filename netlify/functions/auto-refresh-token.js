const axios = require("axios");

exports.handler = async (event, context) => {
  // Enable CORS
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  };

  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 200, headers, body: "" };
  }

  // Simple authentication check (optional)
  const authHeader = event.headers.authorization;
  const expectedToken = process.env.WEBHOOK_SECRET || "your-webhook-secret";

  if (authHeader !== `Bearer ${expectedToken}`) {
    return {
      statusCode: 401,
      headers,
      body: JSON.stringify({ error: "Unauthorized" }),
    };
  }

  try {
    const appId = process.env.FACEBOOK_APP_ID;
    const appSecret = process.env.FACEBOOK_APP_SECRET;
    const currentToken = process.env.FACEBOOK_ACCESS_TOKEN;

    if (!appId || !appSecret || !currentToken) {
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({
          error: "Missing required environment variables",
        }),
      };
    }

    console.log("🔄 Attempting to refresh Facebook token...");

    // Try to exchange current token for a new long-lived token
    try {
      const response = await axios.get(
        "https://graph.facebook.com/v22.0/oauth/access_token",
        {
          params: {
            grant_type: "fb_exchange_token",
            client_id: appId,
            client_secret: appSecret,
            fb_exchange_token: currentToken,
          },
        }
      );

      const newToken = response.data.access_token;
      const expiresIn = response.data.expires_in;

      console.log("✅ Token refreshed successfully!");
      console.log(
        `📅 New token expires in: ${Math.floor(expiresIn / 86400)} days`
      );

      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          success: true,
          message: "Token refreshed successfully",
          expiresIn: Math.floor(expiresIn / 86400),
          newToken: newToken,
          note: "Please update FACEBOOK_ACCESS_TOKEN environment variable with the new token",
        }),
      };
    } catch (exchangeError) {
      console.log(
        "❌ Token refresh failed:",
        exchangeError.response?.data || exchangeError.message
      );

      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          success: false,
          message: "Token refresh failed, current token might still be valid",
          error: exchangeError.response?.data || exchangeError.message,
        }),
      };
    }
  } catch (error) {
    console.error("❌ Error in auto-refresh:", error.message);

    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        success: false,
        error: error.message,
      }),
    };
  }
};
