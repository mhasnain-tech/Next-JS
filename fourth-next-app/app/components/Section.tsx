"use cache";

import axios from "axios";
import Link from "next/link";

// 1. Explicit TypeScript interface for the product object
interface Product {
  id: number;
  title: string;
  images: string[];
  discountPercentage: number;
}

const Section = async () => {
  let products: Product[] = [];

  try {
    // Fetches items 101-110 from the endpoint
    const { data } = await axios.get("https://dummyjson.com/products?skip=100&limit=10");
    products = data.products || [];
  } catch (error) {
    console.error("Failed to fetch section products:", error);
  }

  if (products.length === 0) {
    return <p className="text-xl text-black text-center py-10">No products available.</p>;
  }

  return (
    <div className="flex flex-wrap gap-8 justify-center min-h-screen">
      {products.map((card) => (
        // Fixed: Use absolute routing paths and removed redundant keys from Card
        <Link key={card.id} href={`/products/${card.id}`}>
          <Card data={card} />
        </Link>
      ))}
    </div>
  );
};

export default Section;

// Fixed: Replaced 'unknown' with the proper Product type mapping
function Card({ data }: { data: Product }) {
  return (
    <div className="px-2 bg-white text-[#11212D] h-[250px] w-[270px] rounded-lg flex flex-col items-center gap-3 relative shadow-sm">
      {/* Fixed: Extracting the first string from the images array */}
      <img 
        src={data.images[0] || "/placeholder.png"} 
        className="h-[160px] w-[230px] object-contain" 
        alt={data.title} 
      />
      <h1 className="text-lg font-semibold text-center line-clamp-1 px-1">{data.title}</h1>
      
      {/* Fixed: Altered invalid rounded-4xl class to standard rounded-3xl */}
      <div className="p-0.5 text-white text-center w-[40px] bg-green-500 absolute top-1 text-xs right-1 rounded-3xl">
        {data.discountPercentage.toFixed(1)}%
      </div>
    </div>
  );
}
