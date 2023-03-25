import { connectToDatabase } from "../../../utils/db";
import { hash } from "bcrypt";

export default async (req, res) => {
  console.log("Request body:", req.body);

  if (req.method === "POST") {
    try {
      const { email, password, name } = req.body;
      const { db } = await connectToDatabase();

      // Check if the email already exists
      const existingUser = await db.collection("users").findOne({ email });
      if (existingUser) {
        return res.status(400).json({ error: "Email already exists" });
      }

      // Hash the password
      const hashedPassword = await hash(password, 10);

      // Save the user in the database
      await db.collection("users").insertOne({ name, email, password: hashedPassword });

      return res.status(201).json({ message: "User created successfully" });
    } catch (error) {
      console.error("Error in signupAPI:", error);
      res.status(500).json({ error: "An error occurred while processing the request" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
};
