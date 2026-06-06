function Navbar() {
  return (
    <header className="sticky top-0 bg-white shadow z-50">
      <nav className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-blue-900">
          BookVerse
        </h1>

        <div className="hidden md:flex gap-8">
          <a href="/">Home</a>
          <a href="/">Authors</a>
          <a href="/">Categories</a>
          <a href="/">Best Sellers</a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;