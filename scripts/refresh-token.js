const axios = require("axios");

async function refreshInstagramToken() {
  try {
    const appId = process.env.FACEBOOK_APP_ID;
    const appSecret = process.env.FACEBOOK_APP_SECRET;
    const currentToken = process.env.CURRENT_TOKEN;

    if (!appId || !appSecret || !currentToken) {
      throw new Error("Missing required environment variables");
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
      console.log(newToken);
      return newToken;
    } catch (exchangeError) {
      // If exchange fails, return the current token (might still be valid)
      console.log(currentToken);
      return currentToken;
    }
  } catch (error) {
    console.error(
      "❌ Failed to refresh token:",
      error.response?.data || error.message
    );
    process.exit(1);
  }
}

// Run the function
refreshInstagramToken();
