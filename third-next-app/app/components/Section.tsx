"use cache"
const Section = async () => {
 
   const response = await fetch(`https://dummyjson.com/products?limit=100&skip=30`) ;
   const {products} = await response.json();
   console.log(products);
   
      
  return (
    <div className="flex flex-wrap gap-5 justify-center p-2 overflow-y-scroll h-[80vh]">
      {products && products ? products.map((item:any,idx:any) => (<Card data={item} key={idx}/>)) : <p className="text-center text-2xl font-bold">Loading...</p>}
    </div>
  )
}

export default Section




function Card ({data} : any) {
    return (
        <div className="h-[150px] w-[200px] bg-red-600 p-2 rounded-lg overflow-hidden" >
        <h1 className="text-2xl font-bold">{data.title}</h1>
        <p>{data.description.slice(0,82)}</p>
        </div>
    )
}