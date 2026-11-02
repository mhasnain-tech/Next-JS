import Rating from "./components/Rating";
import Section from "./components/Section";
import "./globals.css"
const Home = () => {
  return (
    <div className="bg-[#CCD0CF] h-auto text-black w-full ">
      <h1 className="text-3xl text-center text-[#11212D] font-bold p-2">Welcome To Shopify</h1>
      <h1 className="text-2xl text-center text-[#4A5C6A] p-2 mb-4">Best Offer Get Sale Upto 40%</h1>
      {/* Section  */}
      <Section />

      {/* Ratings */}
      <Rating />

      {/* Products  */}
      
       
    </div>
  )
}

export default Home
