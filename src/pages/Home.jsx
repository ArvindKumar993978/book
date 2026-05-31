import Navbar from "../../bookverse/src/components/Navbar";
import Hero from "../../bookverse/src/components/Hero";
import Categories from "../../bookverse/src/components/Categories";
import FeaturedBooks from "../../bookverse/src/components/FeaturedBooks";
import Authors from "../../bookverse/src/components/Authors";
import Newsletter from "../../bookverse/src/components/Newsletter";
import Footer from "../../bookverse/src/components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Categories />
      <FeaturedBooks />
      <Authors />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Home;