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

      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          success: true,
          message: "Token refreshed successfully",
          expiresIn: Math.floor(expiresIn / 86400), // days
          // Note: You'll need to manually update the environment variable
          newToken: newToken,
        }),
      };
    } catch (exchangeError) {
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
