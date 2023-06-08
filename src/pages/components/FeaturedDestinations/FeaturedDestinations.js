import React from "react";
import styles from "./FeaturedDestinations.module.css";

const destinations = [
  {
    title: "Paris Uncovered",
    image: "/paris.jpg", // Replace with your own image URL
    description: "A Journey Beyond the Ordinary",
    subtitle:
      "As I stepped off the plane at Charles de Gaulle airport, I couldn't contain my excitement. Once again, I found myself in Paris, the City of Lights and love. Every visit to this magical city has been a unique adventure, and this time would be no different. While the Eiffel Tower, Louvre, and Notre-Dame Cathedral hold a special place in my heart, there's so much more to uncover beyond the iconic attractions......",
  },
  {
    title: "New York City Unveiled",
    image: "/newyork.jpg",
    description: "A Local's Guide to the Hidden Treasures",
    subtitle: "It's no secret that New York City is a melting pot of cultures, experiences, and adventures. I found myself back in the city that never sleeps, eager to explore its lesser-known treasures. Although the Statue of Liberty, Times Square, and Central Park are undoubtedly iconic, there's so much more to discover just beneath the surface of this bustling metropolis....",
  },
  {
    title: "A Tokyo Tale",
    image: "/tokyo.jpg", // Replace with your own image URL
    description: " Unraveling the Hidden Charms of Japan's Capital",
    subtitle: "Once upon a time, in the heart of Tokyo, a travel-weary wanderer set out to explore the city's hidden gems. Tokyo, a vibrant metropolis that seamlessly blends modernity with tradition, was the perfect canvas for this enchanting journey. Though the bright lights of Shibuya Crossing and the historic temples of Asakusa beckoned, our intrepid traveler was determined to uncover the city's lesser-known treasures....",
  },
  // Add more destinations here
];

const FeaturedDestinations = () => {
  return (
    <section className={styles.featuredDestinations}>
      <div className={styles.destinationGrid}>
        <h2 className={styles.title}>Roam Tales by RoamGuru</h2>
        {destinations.map((destination, index) => (
          <div key={index} className={styles.destinationCard}>
            <img
              className={styles.destinationImage}
              src={destination.image}
              alt={destination.title}
            />
            <div className={styles.destinationContent}>
              <h3 className={styles.destinationTitle}>{destination.title}</h3>
              <p className={styles.destinationDescription}>
                {destination.description}
              </p>
              <p className={styles.destinationSubtitle}>
                {destination.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// const FeaturedDestinations = () => {
//   return (
//     <section className={styles.destinations}>
//       <h2 className={styles.destinationsTitle}>Featured Destinations</h2>
//       <div className={styles.destinationsGrid}>
//         {destinations.map((destination, index) => (
//           <div key={index} className={styles.destinationCard}>
//             <img
//               className={styles.destinationImage}
//               src={destination.image}
//               alt={destination.name}
//             />
//             <h3 className={styles.destinationName}>{destination.name}</h3>
//             <p className={styles.destinationDescription}>
//               {destination.description}
//             </p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

export default FeaturedDestinations;
