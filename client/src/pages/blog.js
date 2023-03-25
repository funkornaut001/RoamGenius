import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import FeaturedDestinations from "./components/FeaturedDestinations/FeaturedDestinations";

const blog = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <FeaturedDestinations />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default blog;
