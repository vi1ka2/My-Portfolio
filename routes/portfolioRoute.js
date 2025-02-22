const express = require("express");
const { sendEmailController } = require("../controllers/portfolioController");

//router object
const router = express.Router();

//routes
router.post("/sendEmail", (req, res, next) => {
    console.log("✅ API Hit: /sendEmail");
    console.log("Request Body:", req.body);
    next();  // Continue to controller
  }, sendEmailController);
  

// /export
module.exports = router;