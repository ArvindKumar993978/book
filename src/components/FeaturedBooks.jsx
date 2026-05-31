import React from "react";
import { books } from "../data/books";

const FeaturedBooks = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-slate-900">
            Featured Arrivals
          </h3>
          <p className="text-gray-500 mt-2">
            Hand-picked selections for our readers
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {books.map((book) => (
            <div
              key={book.id}
              className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition overflow-hidden"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-[3/4]">
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />

                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-4">
                  <button className="bg-white p-3 rounded-full">
                    <span className="material-symbols-outlined">
                      shopping_bag
                    </span>
                  </button>
                  <button className="bg-white p-3 rounded-full">
                    <span className="material-symbols-outlined">
                      favorite
                    </span>
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 space-y-2">
                <p className="text-xs text-orange-500 uppercase tracking-widest">
                  {book.category}
                </p>

                <h4 className="font-semibold text-slate-900">
                  {book.title}
                </h4>

                <p className="text-gray-500 text-sm">{book.author}</p>

                <div className="flex justify-between items-center pt-3 border-t">
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-yellow-500 text-sm">
                      star
                    </span>
                    <span className="text-sm">{book.rating}</span>
                  </div>

                  <p className="font-semibold text-slate-900">
                    {book.price}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedBooks;