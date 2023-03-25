import React, { useState, useEffect, useRef } from "react";
import styles from "./Chat.module.css";
import { generateResponse } from "../../../services/gpt3Service";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import ChatInput from "./ChatInput";
import { useRouter } from "next/router";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const router = useRouter();
  const initialMessage = router.query.message;
  const chatEndRef = useRef(null);
  const initialMessageProcessed = useRef(false);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleMessageSubmit = async (input) => {
    console.log("User input:", input);

    if (!input.trim()) return;

    setMessages((prevMessages) => [
      ...prevMessages,
      { text: input, user: "user" },
    ]);

    const response = await generateResponse(input);
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: response, user: "roamguru" },
    ]);
  };

  useEffect(() => {
    if (initialMessage && !initialMessageProcessed.current) {
      handleMessageSubmit(initialMessage);
      initialMessageProcessed.current = true;
    }
  }, [initialMessage]);

  return (
    <div>
      <Navbar />
      <div className={styles.chatContainer}>
        <div className={styles.chat}>
          {messages.map((message, index) => (
            <div
              key={index}
              className={`${styles.message} ${
                message.user === "roamguru" ? styles.roamguru : styles.user
              }`}
            >
              {message.text}
            </div>
          ))}
          <div ref={chatEndRef} />
        </div>
        <div>
          <ChatInput onMessageSubmit={handleMessageSubmit} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Chat;
