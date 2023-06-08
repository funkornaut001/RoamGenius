import React, { useState } from "react";
import Navbar from "../pages/components/Navbar/Navbar";
import Footer from "../pages/components/Footer/Footer";
import styles from "../styles/signup.module.css";
import { useRouter } from "next/router";

const Signup = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/signupAPI", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });
  
    if (response.ok) {
      const { message } = await response.json();
      alert(message);
      setName("");
      setEmail("");
      setPassword("");
    } else {
      const { error } = await response.json();
      console.error("Error during signup:", error);
      alert(error);
    }
  };
  

  return (
    <div>
      <Navbar />
      <div className={styles.signupContainer}>
        <h2>Sign up for RoamGenius</h2>
        <form onSubmit={handleSubmit} className={styles.signupForm}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            required
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
          <button type="submit">Sign up</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Signup;
