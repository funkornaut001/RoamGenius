import React from "react";
import ChatInput from "../Chat/ChatInput";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>Discover Your World</h1>
        <p className={styles.heroSubtitle}>One Conversation at a Time</p>
        <div className={styles.heroButtons}>
          <a href="/components/Chat/Chat" className={styles.signupBtn}>
            Get Started
          </a>
          <a href="/how-it-works" className={styles.learnMoreBtn}>
            Learn More
          </a>
        </div>
        <div>
          <ChatInput  />
        </div>
      </div>
    </section>
  );
};

export default Hero;
