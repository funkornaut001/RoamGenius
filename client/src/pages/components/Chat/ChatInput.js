import React, { useState } from "react";
import { useRouter } from "next/router";
import styles from "./Chat.module.css";

const ChatInput = ({ onMessageSubmit }) => {
  const [input, setInput] = useState("");
  const router = useRouter();
  
  const handleMessageSubmit = (event) => {
    event.preventDefault();

    if (!input.trim()) return;

    if (onMessageSubmit) {
      onMessageSubmit(input);
    } else {
       // Redirect to the chat page and pass the message as a query parameter
       router.push(`/components/Chat/Chat?message=${encodeURIComponent(input)}`);
    }

    setInput("");
  };

  return (
    <form onSubmit={handleMessageSubmit} className={styles.chatInput}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type your message..."
      />
      <button type="submit">Send</button>
    </form>
  );
};

export default ChatInput;
