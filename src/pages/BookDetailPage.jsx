// import Header from "../components/Header";
import Footer from "../components/Footer";
import BookGallery from "../components/BookGallery";
import BookInfo from "../components/BookInfo";
import Navbar from "../components/Navbar";
import Tabs from "../components/Tabs";
import Recommended from "../components/Recommended";

function BookDetailPage() {
  return (
    <>
      <Navbar />
      

      <main className="pt-24 max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-12 gap-10">
          <BookGallery />
          <BookInfo />
        </div>

        <Tabs />

        <Recommended />

      </main>

      <Footer />
    </>
  );
}

export default BookDetailPage;