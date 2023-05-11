const express = require("express");
const router = express.Router();
const model = require("../Models/Schema");
router.use(express.json());
const routeFunction = require("../RouteFunction/function");
const loginlogoutauth = require("../midleware/loginlogoutauth");
const auth = require("../midleware/auth");
const flightData = require("../flightdata");

router.post("/price", async (req, res) => {
  const { from, to } = req.body;

  const flightdetails = await model.findOne({
    from,
    to,
  });
  if (!flightdetails) {
    return res.json({ success: false, message: "no flight availabel" });
  }
  res.json({ success: true, flightdetails });
});

router.post("/", async (req, res) => {
  console.log(flightData);
  const data = await model.create(flightData);
  res.send(data);
});

// router.post("/login", routeFunction.signUp);
// router.post("/islogin", loginlogoutauth, (req, res) => {
//   res.send({ message: "login", success: true });
// });
// router.post("/register", routeFunction.signIn);
// router.post("/islogin", loginlogoutauth, (req, res) => {
//   res.send({ message: "login", success: true });
// });
// router.post("/forgotpassword", routeFunction.forgot);
// router.post("/setPassword", routeFunction.setPass);
// router.post("/contact", routeFunction.contact);
// router.post("/homes", auth, (req, res) => {
//   res.send({ message: "success", success: true });
// });

module.exports = router;
