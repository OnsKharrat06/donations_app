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


donationRoute.get("/donation", getDonation);
donationRoute.get("/donation/:id", getOneDonation);
donationRoute.post("/donation", postDonation);
donationRoute.put("/donation/:id", putDonation);
donationRoute.delete("/donation/:id", deleteDonation);
module.exports = donationRoute;