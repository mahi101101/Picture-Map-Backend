const axios = require("axios");
const HttpError = require("../models/http-error");

const KEY = `${process.env.GOOGLE_API_KEY}`;

async function getCoordsForAddress(address) {
  const responce = await axios.get(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
      address
    )}&key=${KEY}`
  );
  const data = responce.data;
  if (!data || data.status === "ZERO_RESULTS") {
    const error = new HttpError("Location cannot be identified", 422);
    throw error;
  }
  const coordinates = data.results[0].geometry.location;

  return coordinates;
}

module.exports = getCoordsForAddress;
