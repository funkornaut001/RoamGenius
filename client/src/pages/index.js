import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import FeaturedDestinations from "./components/FeaturedDestinations/FeaturedDestinations";
import HowItWorks from "./how-it-works";
import Footer from "./components/Footer/Footer";
import ChatInput from "./components/Chat/ChatInput";
import {handleMessageSubmit} from "./components/Chat/Chat";

export default function Home() {
  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div>
        <Hero />
      </div>
      {/* <div>
      <ChatInput onMessageSubmit= {handleMessageSubmit} />

      </div> */}

      <div>
        <FeaturedDestinations />
      </div>

      {/* <div>
        <HowItWorks />
      </div> */}
      {/* 
        just doing this imports the whole chat page to the main page
      <div>
        <Chat />
      </div> */}

      <div>
        <Footer />
      </div>
    </div>
  );
}
