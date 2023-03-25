import React from "react";
import styles from "../styles/how-it-works.module.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

// const steps = [
//   {
//     title: "Sign Up",
//     description: "Create a free account to start planning your next adventure.",
//     image: "/step1.jpg", // Replace with your own image URL
//   },
//   {
//     title: "Choose a Destination",
//     description:
//       "Browse through our featured destinations or search for your dream location.",
//     image: "/step2.jpg", // Replace with your own image URL
//   },
//   {
//     title: "Connect with RoamGenius",
//     description:
//       "Use our AI-powered chatbot to get personalized recommendations and plan your trip.",
//     image: "/step3.jpg", // Replace with your own image URL
//   },
  // Add more steps here
//];

const HowItWorks = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>

      {/* <section className={styles.howItWorks}>
        <h2 className={styles.howItWorksTitle}>How It Works</h2>
        <div className={styles.stepsGrid}>
          {steps.map((step, index) => (
            <div key={index} className={styles.stepCard}>
              <img
                className={styles.stepImage}
                src={step.image}
                alt={step.title}
              />
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDescription}>{step.description}</p>
              
            </div>
          ))}
        </div>
      </section> */}

<section className={styles.howItWorksSection}>
  <h2>RoamGenius: Your Ultimate Travel Companion</h2>
  <p>RoamGenius is designed to help you plan, discover, and enjoy every aspect of your travels, making your adventures unforgettable. Our AI-powered chatbot provides personalized recommendations based on your preferences and location, ensuring you have the best experience possible. Here's how RoamGenius can help you:</p>

  <h3>Plan Your Perfect Trip</h3>
  <ul>
    <li>Explore Destinations: Browse or search for exciting destinations you'd love to visit. RoamGenius is here to help you find the perfect location for your next adventure.</li>
    <li>Get Tailored Recommendations: Our AI chatbot provides information on accommodations, attractions, local events, and more, all based on your interests.</li>
    <li>Organize Your Itinerary: Easily create an itinerary or save recommended places and activities for quick access during your trip.</li>
  </ul>

  <h3>Discover & Experience the Best of Your Destination</h3>
  <ul>
    <li>Real-Time, Location-Based Suggestions: Enjoy up-to-date recommendations for activities, restaurants, and events happening near you.</li>
    <li>Local Tips & Directions: Ask our chatbot for directions, nearby attractions, or insider tips, such as the best time to visit a specific place.</li>
    <li>Adapt to Your Mood: RoamGenius can suggest alternative activities based on the weather or your current interests, ensuring you always have a great time.</li>
  </ul>

  <p>Embark on your journey with RoamGenius and make the most of your travel experiences. Get started now and see the world through a new lens!</p>
</section>


      <div>
        <Footer />
      </div>
    </div>
  );
};

export default HowItWorks;
