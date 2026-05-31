import React from "react";
import { categories } from "../data/categories";

const Categories = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <h3 className="text-3xl font-bold text-slate-900">
              Browse by Genre
            </h3>
            <div className="h-1 w-20 bg-orange-500 mt-2 rounded-full"></div>
          </div>

          <a
            href="#"
            className="text-orange-500 font-medium hover:underline flex items-center gap-2"
          >
            View All
            <span className="material-symbols-outlined text-sm">
              arrow_forward
            </span>
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="group cursor-pointer bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 text-center"
            >
              <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-orange-100 text-orange-500 mb-4 group-hover:scale-110 transition">
                <span className="material-symbols-outlined text-3xl">
                  {cat.icon}
                </span>
              </div>

              <h4 className="font-semibold text-slate-900">
                {cat.title}
              </h4>

              <p className="text-sm text-gray-500">{cat.books}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;