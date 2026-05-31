import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        {/* Brand */}
        <div className="lg:col-span-2">
          <h2 className="text-3xl font-bold text-slate-900">
            BookVerse
          </h2>
          <p className="text-gray-600 mt-4 max-w-sm">
            Elevating the digital reading experience with curated
            collections and modern design.
          </p>

          <div className="flex gap-4 mt-4 text-gray-500">
            <span className="material-symbols-outlined">share</span>
            <span className="material-symbols-outlined">
              alternate_email
            </span>
            <span className="material-symbols-outlined">camera</span>
          </div>
        </div>

        {/* Links */}
        <div>
          <h5 className="font-semibold text-slate-900 mb-3">
            Quick Links
          </h5>
          <ul className="space-y-2 text-gray-600">
            <li>Search Books</li>
            <li>Best Sellers</li>
            <li>New Arrivals</li>
            <li>Gift Cards</li>
          </ul>
        </div>

        <div>
          <h5 className="font-semibold text-slate-900 mb-3">
            Customer Service
          </h5>
          <ul className="space-y-2 text-gray-600">
            <li>Shipping Policy</li>
            <li>Return Center</li>
            <li>FAQ</li>
            <li>Track Order</li>
          </ul>
        </div>

        <div>
          <h5 className="font-semibold text-slate-900 mb-3">
            Contact
          </h5>

          <ul className="space-y-2 text-gray-600 text-sm">
            <li>📍 123 Reader St, NY</li>
            <li>📧 hello@bookverse.com</li>
            <li>📞 +1 (234) 567-890</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-10 pt-6 border-t text-sm text-gray-500 flex flex-col md:flex-row justify-between gap-4">
        <p>© 2024 BookVerse. All rights reserved.</p>

        <div className="flex gap-6">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;