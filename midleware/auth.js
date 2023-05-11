const jwt = require("jsonwebtoken");
const model = require("../Models/Schema");
const auth = async (req, res, next) => {
  try {
    const token = req.headers["authorization"];
    if (token) {
      next();
    } else {
      res.json({ success: false, message: "not authnticate" });
    }
  } catch (error) {
    res.send({ message: "sorry", success: false });
  }
};
module.exports = auth;
