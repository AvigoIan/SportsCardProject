const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const CLIENT_ID = process.env.EBAY_CLIENT_ID;
const CLIENT_SECRET = process.env.EBAY_CLIENT_SECRET;
const SERVER_URL = "api.ebay.com/";
let accessToken = null;

// Function to get OAuth 2.0 access token
const getAccessToken = async () => {
  const credentials = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString(
    "base64"
  );
  try {
    const response = await axios.post(
      `https://${SERVER_URL}identity/v1/oauth2/token`,
      null,
      {
        params: {
          grant_type: "client_credentials",
          scope: `https://${SERVER_URL}oauth/api_scope`,
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Basic ${credentials}`,
        },
      }
    );
    accessToken = response.data.access_token;
    console.log("Access token retrieved successfully");
  } catch (error) {
    console.error("Error obtaining access token:", error.response.data);
  }
};

// Endpoint to search items
app.get("/search", async (req, res) => {
  const query = req.query.q;
  const limit = req.query.limit || 20;

  if (!accessToken) {
    await getAccessToken();
  }

  try {
    const response = await axios.get(
      `https://${SERVER_URL}buy/browse/v1/item_summary/search`,
      {
        params: { q: query, limit: limit },
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );
    res.json(response.data);
  } catch (error) {
    console.error("Error in search:", error.response?.data || error.message);
    res.status(500).json({ error: "Error fetching data from eBay API" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend server running on port ${PORT}`));
