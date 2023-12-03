const express = require("express");
const userRoute = require("./Routes/userRoute");
const donationRoute = require("./Routes/donationRoute");
const {connectDb}=require('./Configuration/connectDB')
var cors = require('cors')
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT;
connectDb();
app.use(cors())
app.listen(port, (error) => {
if(error){console.log("Server Failed")}
else {
console.log(`server is running on port ${port}`);
}
});
app.use(express.json())
app.use("/api", userRoute);
app.use("/api",donationRoute);