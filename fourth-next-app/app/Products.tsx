"use cache";

import axios from "axios";
import Link from "next/link";

interface Product {
  id: number;
  title: string;
  images: string[];
  discountPercentage: number;
}

const Products = async () => {
  let products: Product[] = [];
  try {
    const { data } = await axios.get("https://dummyjson.com");
    products = data.products || [];
  } catch (error) {
    console.error("Failed to fetch products:", error);
  }

  if (products.length === 0) {
    return <p className="text-2xl text-black text-center py-10">No products found.</p>;
  }

  return (
    <div className="flex flex-wrap py-10 h-auto gap-8 w-full justify-center">
      {products.map((card) => (
        <Link key={card.id} href={`/products/${card.id}`}>
          <Card data={card} />
        </Link>
      ))}
    </div>
  );
};

export default Products;

function Card({ data }: { data: Product }) {
  return (
    <div className="px-2 bg-white h-[250px] w-[270px] rounded-lg flex flex-col items-center gap-3 relative shadow-sm">
      <img 
        src={data.images[0] || "/placeholder.png"} 
        className="h-[160px] w-[230px] object-contain" 
        alt={data.title} 
      />
      <h1 className="text-lg font-semibold text-center line-clamp-1 px-1">{data.title}</h1>
      <div className="p-0.5 text-white text-center w-[40px] bg-green-500 absolute top-1 text-xs right-1 rounded-3xl">
        {data.discountPercentage.toFixed(1)}%
      </div>
    </div>
  );
}
