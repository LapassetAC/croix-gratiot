const axios = require("axios");

exports.handler = async (event, context) => {
  // Enable CORS for your Gatsby site
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  };

  // Handle preflight requests
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers,
      body: "",
    };
  }

  try {
    const baseUrl = "https://graph.facebook.com/v22.0";
    const facebookPageId = "312087035581581";
    const accessToken = process.env.FACEBOOK_ACCESS_TOKEN;

    if (!accessToken) {
      console.error("Facebook access token not configured");
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({
          success: false,
          error: "Facebook access token not configured",
        }),
      };
    }

    // Get Instagram account ID from Facebook page
    let instagramAccountId;
    try {
      const instagramResponse = await axios.get(
        `${baseUrl}/${facebookPageId}`,
        {
          params: {
            fields: "instagram_business_account",
            access_token: accessToken,
          },
        }
      );

      if (instagramResponse.data.instagram_business_account) {
        instagramAccountId =
          instagramResponse.data.instagram_business_account.id;
        console.log("Found Instagram account ID:", instagramAccountId);
      } else {
        console.error(
          "No Instagram business account linked to this Facebook page"
        );
        return {
          statusCode: 500,
          headers,
          body: JSON.stringify({
            success: false,
            error: "No Instagram business account linked to this Facebook page",
          }),
        };
      }
    } catch (instagramError) {
      console.error(
        "Error getting Instagram account:",
        instagramError.response?.data
      );
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({
          success: false,
          error: "Could not retrieve Instagram account from Facebook page",
        }),
      };
    }

    const response = await axios.get(`${baseUrl}/${instagramAccountId}/media`, {
      params: {
        fields: "caption,media_url,permalink",
        limit: 3,
        access_token: accessToken,
      },
    });

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: true,
        posts: response.data.data || [],
      }),
    };
  } catch (error) {
    console.error("Facebook API Error:", error.response?.data || error.message);

    // Check if it's a token expiration error
    if (error.response?.data?.error?.code === 190) {
      console.log(
        "🔄 Token expired, GitHub Action will refresh it automatically"
      );
    }

    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        success: false,
        error:
          error.response?.data?.error?.message ||
          "Failed to fetch Instagram posts",
      }),
    };
  }
};
