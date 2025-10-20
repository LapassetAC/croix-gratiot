const axios = require("axios");

async function refreshInstagramToken() {
  try {
    const appId = process.env.FACEBOOK_APP_ID;
    const appSecret = process.env.FACEBOOK_APP_SECRET;
    const currentToken = process.env.CURRENT_TOKEN;

    if (!appId || !appSecret || !currentToken) {
      throw new Error("Missing required environment variables");
    }

    console.log("🔄 Refreshing Facebook token...");

    // Exchange current token for a new long-lived token
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

    // Return the token for GitHub Actions
    console.log(newToken);

    return newToken;
  } catch (error) {
    console.error(
      "❌ Failed to refresh token:",
      error.response?.data || error.message
    );

    // If refresh fails, try to get a new token using app credentials
    try {
      console.log("🔄 Attempting to get new app token...");

      const appTokenResponse = await axios.get(
        "https://graph.facebook.com/v22.0/oauth/access_token",
        {
          params: {
            client_id: process.env.FACEBOOK_APP_ID,
            client_secret: process.env.FACEBOOK_APP_SECRET,
            grant_type: "client_credentials",
          },
        }
      );

      const appToken = appTokenResponse.data.access_token;
      console.log("✅ Got new app token key");
      console.log(appToken);

      return appToken;
    } catch (appTokenError) {
      console.error(
        "❌ Failed to get app token:",
        appTokenError.response?.data || appTokenError.message
      );
      process.exit(1);
    }
  }
}

// Run the function
refreshInstagramToken();
