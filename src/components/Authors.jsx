import React from "react";
import { authors } from "../data/authors";

const Authors = () => {
  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-white">
            Meet the Visionaries
          </h3>
          <p className="text-gray-400 mt-2">
            Celebrating the authors who shape our world
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {authors.map((author) => (
            <div
              key={author.id}
              className="bg-white/5 hover:bg-white/10 transition rounded-2xl p-8 text-center"
            >
              {/* Image */}
              <div className="w-28 h-28 mx-auto mb-6 border-2 border-orange-500 p-1 rounded-full">
                <img
                  src={author.image}
                  alt={author.name}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              <h4 className="text-xl font-semibold">{author.name}</h4>

              <p className="text-orange-400 text-sm mt-1">
                {author.field}
              </p>

              <p className="text-gray-400 text-sm mt-4">
                {author.description}
              </p>

              <button className="mt-6 px-5 py-2 border border-orange-500 text-orange-400 rounded-full hover:bg-orange-500 hover:text-white transition">
                View Profile
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Authors;