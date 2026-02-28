const express = require("express");
const app = express();
require('dotenv').config();
const cors = require('cors')
const connectMongoDB = require("./db/db")
const authRouter = require("./routes/authRouter");

app.use(cors({origin:"http://localhost:5173"}))  

// DB CONNECTION
// console.log("DB_URL =", process.env.DB_URL); // debug
connectMongoDB()



// MIDDLEWARE
app.use(express.json());  //parse/understand json
app.use(express.urlencoded({extended: true}))  //handles data from frontend but not file



// ROUTES 
app.use("/auth", authRouter);

// app.use("/", (req, res) => {
//   res.send("This is Home page");
// });



// SERVER LISTEN
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});