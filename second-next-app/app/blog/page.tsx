import Link from "next/link";
import React from "react";

const page = async () => {
  const response = await fetch(`https://dummyjson.com/products?limit=10`);
  const { products } = await response.json();
  console.log(products);

  return (
    <div className="h-screen flex flex-wrap justify-center items-center gap-4">
      {products && products.length > 0
        ? products.map((pro) => (<Link key={pro.id} href={`blog/${pro.id}`}><Card data={pro}/></Link>))
        : ""}
    </div>
  );
};

export default page;



function Card ({data}:any) {
  return (
    <div className="p-3 h-[140px] w-[280px] bg-green-400">
     {data.title}
    </div>
  )
}