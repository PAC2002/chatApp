const express = require("express");
const app = express();
const dotenv = require("dotenv");
const connectDB = require("./database/db");
const userRoute = require("./Routes/userRoutes");
const chatRoute = require("./Routes/chatRoute");
dotenv.config();
connectDB();
app.use(express.json());

app.use("/user", userRoute);
app.use("/user/chat", chatRoute);
app.listen(process.env.PORT || 8080, () => {
    console.log("server started on port 8080");
})