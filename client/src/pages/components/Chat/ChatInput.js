import React, { useState } from "react";
import { useRouter } from "next/router";
import styles from "./Chat.module.css";

const ChatInput = ({ onMessageSubmit }) => {
  const [input, setInput] = useState("");
  const router = useRouter();
  
  const handleMessageSubmit = async (event) => {
    event.preventDefault();

    if (!input.trim()) return;

    try {
      const coordinates = await getLocation();
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${coordinates.lat}&lon=${coordinates.lon}`
      );

      const locationData = await response.json();

      const location = locationData.address.city || locationData.address.town || locationData.address.village;

    if (onMessageSubmit) {
      onMessageSubmit(input, location);
    } else {
       // Redirect to the chat page and pass the message as a query parameter
       router.push(`/components/Chat/Chat?message=${encodeURIComponent(input)}&location=${encodeURIComponent(location)}`
       );
    }
    } catch (error) {
      console.error("Location error:", error);
      }

    setInput("");
  };


  const getLocation = async () => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          resolve({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          });
        },
        (error) => {
          reject(error);
        }
      );
    });
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
