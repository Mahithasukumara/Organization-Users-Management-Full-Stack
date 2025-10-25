import express, { json } from "express";
import orgRouter from "./routers/org.route.js";
import userRouter from "./routers/user.route.js";
import dotenv from "dotenv";
dotenv.config(); 
const app = express();
app.use(json());
app.use("/org", orgRouter);
app.use("/user", userRouter);
const PORT = process.env.PORT || 3010;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
app.listen(PORT, () => {
    console.log("server is up and running");
})