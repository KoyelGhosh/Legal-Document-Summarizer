import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import UploadBox from "../components/UploadBox";
import Footer from "../components/Footer";
import Features from "../components/Features";
import SummaryDashboard from "../components/SummaryDashboard";
import ChatBox from "../components/ChatBox";

function Home() {
  return (
    // <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Features />
      <UploadBox />
      <SummaryDashboard />
      <ChatBox />
      <Footer />
    </div>

  );
}

export default Home;