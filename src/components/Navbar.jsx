import React from "react";

const Navbar = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        <div className="flex items-center gap-3">
          <button className="md:hidden text-slate-900">
            <span className="material-symbols-outlined">menu</span>
          </button>

          <h1 className="text-3xl lg:text-5xl font-bold text-slate-900">
            BookVerse
          </h1>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="font-semibold border-b-2 border-orange-500">
            Home
          </a>

          <a href="#" className="hover:text-blue-900">
            Categories
          </a>

          <a href="#" className="hover:text-blue-900">
            Authors
          </a>

          <a href="#" className="hover:text-blue-900">
            Best Sellers
          </a>
        </div>

        <div className="flex items-center gap-5">
          <button>
            <span className="material-symbols-outlined">search</span>
          </button>

          <button className="relative">
            <span className="material-symbols-outlined">
              shopping_cart
            </span>

            <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
              3
            </span>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;