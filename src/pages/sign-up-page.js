// pages/signup.js
import Signup from "./components/Signup";
import Navbar from"./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

export default function SignupPage() {
  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div>
        <Signup />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}
