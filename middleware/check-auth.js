const jwt = require("jsonwebtoken");
const jwt_key = `${process.env.JWT_KEY}`;
const HttpError = require("../models/http-error");

module.exports = (req, res, next) => {
  if (req.method === "OPTIONS") {
    return next();
  }

  try {
    const token = req.headers.authorization.split(" ")[1]; // Authorization: 'Bearer TOKEN'

    if (!token) {
      throw new Error("Authentication failed no token!");
    }
    const decodedToken = jwt.verify(token, jwt_key);

    req.userData = { userId: decodedToken.userId };
    next();
  } catch (err) {
    const error = new HttpError("Authentication failed!", 403);
    return next(error);
  }
};
