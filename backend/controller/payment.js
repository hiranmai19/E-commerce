const express = require("express");
const router = express.Router();
const catchAsyncErrors = require("../middleware/catchAsyncErrors");



router.post(
  "/process",
  catchAsyncErrors(async (req, res, next) => {
    res.status(200).json({
      success: true,
      client_secret: myPayment.client_secret,
    });
  })
);




module.exports = router;