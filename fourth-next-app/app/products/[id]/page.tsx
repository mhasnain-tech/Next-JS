"use cache";


import axios from "axios";



type ProductId = {
  params : Promise<{
    id : string
  }>
}
 




const DetailPage = async ({params} : ProductId) => {
  const {id} = await params;
  console.log(id);

  const {data} = await axios.get(`https://dummyjson.com/products/${id}`);
  console.log(data);
  
  
  return (
    <div className="bg-[#CCD0CF] text-black min-h-screen flex justify-center items-center p-3 flex-col gap-7 ">
     <h1 className="text-3xl font-bold">{data.title}</h1>
      <div className="w-full relative max-w-[40rem] h-auto min-h-[20rem] border border-green-600 rounded-xl bg-white flex  flex-col items-center">
        <img src={data.images[0]} alt="" className="h-[200px] w-[250px] "/>
       <div className="flex gap-6 flex-wrap justify-center max-md:text-sm" >
        <p>Category : <span className="text-green-600 font-semibold">{data.category.slice(0,1).toUpperCase()}</span><span className="text-green-600 font-semibold">{data.category.slice(1)}</span></p>
        <p>Price : <span className="text-green-600 font-semibold">{data.price}$</span></p>
       <p>Rating : <span className="text-green-600">{data.rating}</span></p>
      <p className="text-center text-wrap max-md:text-sm p-2">{data.description}</p>
       </div>

       {/* Discount percent! */}
       <div className="p-0.5  text-white text-center w-[40px] bg-green-500 absolute top-1 text-xs right-1  rounded-4xl">
   {data.discountPercentage.toFixed(1)}% 
     </div>
      </div>
    </div>
  )
}

export default DetailPage
