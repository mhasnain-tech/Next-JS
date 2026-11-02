"use cache"

import axios from "axios";
import "../globals.css"
import Link from "next/link";

type ProductsProp = {
  params : Promise<{
   id : string
  }>
}

const Section =  async({params} : ProductsProp) => {
    const id = await params;
    console.log(id);
    

    const {data} = await axios.get(`https://dummyjson.com/products?limit=10&skip=100`);
    // console.log(data);
    

  return (
    <div className="flex  flex-wrap gap-8 justify-center h-auto">
      {data && data ? data.products.map((card:any,idx:number) => (<Link key={card.id} href={`/products/${card.id}`}><Card key={idx} data={card}/></Link>)) : <p className="text-2xl text-black">Data is Loading...</p> }
    </div>
  )
}

export default Section



function Card ({data}:unknown) {
    return (
        <div className="px-2  bg-white text-[#11212D] h-[250px] w-[270px]  rounded-lg flex flex-col items-center gap-3 relative">
       <img src={data.images[0]} className="h-[160px] w-[230px] " alt="Image.." />
       <h1 className="text-lg  font-semibold text-center ">{data.title}</h1>
       <div className="p-0.5 text-white text-center w-[40px] bg-green-500 absolute top-1 text-xs right-1  rounded-4xl">
     {data.discountPercentage.toFixed(1)}%
       </div>
        </div>
    )
}