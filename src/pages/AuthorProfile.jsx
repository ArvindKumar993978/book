import AuthorHero from "../components/AuthorHero";
import InterviewSection from "../components/InterviewSection";
import Navbar from "../components/Navbar";
import Bibliography from "../components/Bibliography";
import NewsletterCTA from "../components/NewsletterCTA";
import Footer from "../components/Footer2";

function AuthorProfile() {
  return (
    <>
      <Navbar/>
      <AuthorHero/>
      <InterviewSection />
      <Bibliography />
      <NewsletterCTA />
      <Footer />
    </>
  );
}

export default AuthorProfile;