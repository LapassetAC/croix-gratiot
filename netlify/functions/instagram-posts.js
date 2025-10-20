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
        fields:
          "id,caption,media_type,media_url,permalink,thumbnail_url,timestamp",
        limit: 6,
        access_token: accessToken,
      },
    });

    // Process posts to handle different media types
    const posts = response.data.data || [];
    const processedPosts = [];

    for (const post of posts) {
      let processedPost = {
        id: post.id,
        caption: post.caption || "",
        media_type: post.media_type,
        permalink: post.permalink,
        timestamp: post.timestamp,
        media_url: post.media_url,
        thumbnail_url: post.thumbnail_url,
      };

      // For carousel posts (multiple images), get all images
      if (post.media_type === "CAROUSEL_ALBUM") {
        try {
          const childrenResponse = await axios.get(
            `${baseUrl}/${post.id}/children`,
            {
              params: {
                fields: "id,media_type,media_url,thumbnail_url",
                access_token: accessToken,
              },
            }
          );

          processedPost.children = childrenResponse.data.data || [];
          // Use the first image as the main image for display
          if (processedPost.children.length > 0) {
            processedPost.media_url =
              processedPost.children[0].media_url ||
              processedPost.children[0].thumbnail_url;
          }
        } catch (childrenError) {
          console.error(
            "Error fetching carousel children:",
            childrenError.response?.data
          );
          // Fallback to original media_url
        }
      }
      // For videos, use thumbnail_url if available
      else if (post.media_type === "VIDEO") {
        processedPost.media_url = post.thumbnail_url || post.media_url;
      }

      processedPosts.push(processedPost);
    }

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: true,
        posts: processedPosts,
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
