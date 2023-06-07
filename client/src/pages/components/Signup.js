// components/Signup.js
import React, { useState } from "react";
import axios from "axios";
import styles from "../../styles/signup.module.css";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      //update "loclahost" to URL the server is on It's a good practice to store the server's base URL in an environment variable so that you can easily switch between different environments.
      const response = await axios.post("http://localhost:5000/signup", formData);
      console.log("Signup response:", response);

      // Redirect the user to the login page, or another page of your choice
      window.location.href = "/login";
    } catch (error) {
      console.error("Error during signup:", error.response);
      // Display error message to the user
    }
  };

  return (
    <div className={styles.signupContainer}>
      <h1 className={styles.title}>Sign Up</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
          className={styles.input}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className={styles.input}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
          className={styles.input}
        />
        <button type="submit" className={styles.submitButton}>Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
