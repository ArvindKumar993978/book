import React, { useEffect, useRef } from "react";

const Hero = () => {
  const floatingBookRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
      const moveY = (e.clientY - window.innerHeight / 2) * 0.01;

      if (floatingBookRef.current) {
        floatingBookRef.current.style.transform = `
          translate(${moveX}px, ${moveY}px)
          translateY(-50%)
          rotate(12deg)
        `;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () =>
      window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQuhQfkc9xMJb0RJKyl-DUaVevRfR1H1yXfqwmQyEyipspFZV37Z2fN0wahttCBmvslZWXSLJIxQ8cbhqS2KwxCfhLm41I5xmo0ZYZ2NSye-IcJR-u7Lu-gw2ppGe0BTHog6o3OnHtGKuC7RgC-FXwrPU-_UBN8zEJhomG73cGNsCBnrfQY7IQ8aOrV0op99yiBKkuYPqz-udV6ZRRuSEhHj39bNVORYwarSuM-AJJ3aO83jd_ZQtK9VOYFi_f_C4VlpOpzzCmOUYn"
          alt="Library"
          className="w-full h-full object-cover opacity-10"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/70 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="max-w-2xl">
          <span className="inline-block px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold">
            CURATED SELECTION
          </span>

          <h2 className="mt-6 text-5xl lg:text-7xl font-bold text-slate-900 leading-tight">
            Discover Your Next
            <br />
            <span className="text-orange-500 italic">
              Favorite Book
            </span>
          </h2>

          <p className="mt-6 text-lg text-gray-600 max-w-xl">
            Explore thousands of books from world-renowned authors.
            From timeless classics to modern masterpieces, your next
            journey starts here.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <button className="px-10 py-4 bg-slate-900 text-white rounded-md hover:bg-slate-800">
              Shop Now
            </button>

            <button className="px-10 py-4 border border-slate-900 text-slate-900 rounded-md">
              Browse Categories
            </button>
          </div>
        </div>
      </div>

      {/* Floating Book */}
      <div
        ref={floatingBookRef}
        className="hidden lg:block absolute right-[10%] top-1/2 -translate-y-1/2 w-80 h-[480px]"
      >
        <div className="bg-white p-3 rounded-2xl shadow-2xl rotate-[-6deg]">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBR4n3H78srdmmD9Y1dQ8s6bdfEbrjZ5-z14mK935SOnhTZ3qfcUwoU6-U_KewmTt92cHUJ-7GhDW1nqn1D2vF73fnU1HOUpYLg0eiHhRNEXhPKSVeglT-Bt6BFqMu77AYrGITv6VYZy1QEbOJvEvXVXmz2vsuIeybtGj1zn7DgYINjE0VU8BnavOkcJNS8hZdWMyehdrOzqHFBFCjEKG9dMtIZrn1gjOwOcUXrmcTfo0gVcmn5REg0UvgXp-rtVy3W8cSxSAOb6kgq"
            alt="Featured Book"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;