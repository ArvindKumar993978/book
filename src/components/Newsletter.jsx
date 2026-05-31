import React from "react";

const Newsletter = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="bg-slate-50 p-12 rounded-3xl shadow-lg">
          <span className="material-symbols-outlined text-orange-500 text-5xl">
            mail
          </span>

          <h3 className="text-3xl font-bold mt-4">
            Join Our Literary Community
          </h3>

          <p className="text-gray-500 mt-3">
            Subscribe for book recommendations, author interviews and more.
          </p>

          <form
            className="flex flex-col sm:flex-row gap-4 mt-8"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 p-4 border border-gray-300 rounded-md focus:outline-none focus:border-orange-500"
            />

            <button className="bg-slate-900 text-white px-8 py-4 rounded-md hover:bg-slate-800">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;