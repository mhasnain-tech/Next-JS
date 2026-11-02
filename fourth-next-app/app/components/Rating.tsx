"use client"

import { useEffect, useState } from "react";

interface Review {
  reviewerName: string;
  rating: number;
  comment: string; // Added field for the comment text
}

interface Product {
  id: number;
  title: string;
  rating: number;
  reviews?: Review[];
}

const Rating = () => {
  const [products, setProducts] = useState<Product[]>([]);

  // Your original exact data fetching logic
  const getData = async () => {
    const response = await fetch(`https://dummyjson.com/products?limit=12&skip=100`);
    const { products } = await response.json();
    // console.log(products);
    setProducts(products);
  };

  useEffect(() => {
    getData();
  }, []);

  // Reusable card component function inside the same file
  const renderProductCard = (product: Product) => {
    // Extracts the actual review data from the API's internal reviews array
    const actualReviewerName = product.reviews?.[0]?.reviewerName || "Verified Buyer";
    const customerComment = product.reviews?.[0]?.comment || "Great product, highly recommended!";

    return (
      <div key={product.id} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
        <div>
          {/* User Info Header */}
          <div className="mb-2">
            <h4 className="font-semibold text-gray-800 text-sm">{actualReviewerName}</h4>
          </div>

          {/* Customer Comment Text */}
          <p className="text-gray-500 text-sm italic mb-4 line-clamp-2">
            {customerComment}
          </p>

          {/* Product Title */}
          <h3 className="font-bold text-[#4A5C6A] text-base line-clamp-1 mb-2">
            {product.title}
          </h3>
        </div>

        {/* Rating Stars Render */}
        <div className="flex items-center gap-2 mt-4 pt-4 border-t border-gray-50">
          <div className="flex text-amber-500 text-sm">
            {Array.from({ length: 5 }).map((_, index) => (
              <span key={index}>
                {index < Math.round(product.rating) ? "★" : "☆"}
              </span>
            ))}
          </div>
          <span className="text-sm font-bold text-gray-600">
            {product.rating.toFixed(1)}
          </span>
        </div>
      </div>
    );
  };

  return (
    <div className="p-5 h-auto mt-20 max-w-8xl mx-auto">
      {/* Clean Header Layout */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#4A5C6A] mb-2">Why Choosing Us?</h1>
        <p className="text-xl text-[#11212D] font-semibold">Our Ratings</p>
      </div>

      {/* Grid rendering your cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => renderProductCard(product))}
      </div>
    </div>
  );
};

export default Rating;
