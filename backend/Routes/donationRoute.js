const express = require("express");
const donationRoute = express.Router();
// Import the controller functions from the user controller file.
// These functions define the logic that will be executed when a route is
const {
    getDonation,
    postDonation,
    putDonation,
    deleteDonation,
    getOneDonation,
    } = require("../Controllers/donationController");

// Route definitions


donationRoute.get("/donations", getDonation);
donationRoute.get("/donations/:id", getOneDonation);
donationRoute.post("/donations", postDonation);
donationRoute.put("/donations/:id", putDonation);
donationRoute.delete("/donations/:id", deleteDonation);
module.exports = donationRoute;