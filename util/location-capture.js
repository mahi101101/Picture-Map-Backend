const axios = require("axios");

const KEY = `${process.env.GOOGLE_API_KEY}`;

const captureMap = async (coordinates) => {
  const width = 356;
  const height = 545;
  const zoom = 12;
  let staticMapUrl;
  try {
    staticMapUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${coordinates.lat},${coordinates.lng}&zoom=${zoom}&size=${width}x${height}&key=${KEY}`;
  } catch (error) {
    console.log(error);
  }

  return staticMapUrl;
};

module.exports = captureMap;
