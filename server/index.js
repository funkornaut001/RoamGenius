const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const User = require("./models/User");


const app = express();
app.use(cors());
app.use(express.json());

// Replace this with your MongoDB connection string
// const dbURI = "mongodb+srv://<username>:<password>@cluster0.mongodb.net/myDatabase?retryWrites=true&w=majority";
const dbURI = process.env.MONGODB_CONNECTION_STRING;

mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(5000, () => {
      console.log("Server is running on port 5000");
    });
  })
  .catch((err) => console.log(err));

  app.post("/Signup", async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const existingUser = await User.findOne({ email });
  
      if (existingUser) {
        return res.status(400).json({ message: "User already exists" });
      }
  
      const newUser = new User({ email, password });
      await newUser.save();
  
      res.status(201).json({ message: "User created successfully" });
    } catch (error) {
      res.status(500).json({ message: "Something went wrong" });
      console.log(error);
    }
  });
  