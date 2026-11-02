import { Suspense } from "react"; 
import Rating from "./components/Rating";
import Section from "./components/Section";
import Products from "./Products"; // Fixed: Pulls from the file right next to it!

const Home = () => {
  return (
    <div className="bg-[#CCD0CF] min-h-screen text-black w-full">
      <h1 className="text-3xl text-center text-[#11212D] font-bold p-2">Welcome To Shopify</h1>
      <h1 className="text-2xl text-center text-[#4A5C6A] p-2 mb-4">Best Offer Get Sale Upto 40%</h1>
      
      <Suspense fallback={<div className="text-center text-xl py-10 text-black">Loading Deals...</div>}>
        <Section />
      </Suspense>

      <Suspense fallback={<div className="text-center text-xl py-10 text-black">Loading Products...</div>}>
        <Products />
      </Suspense>

      <Rating />
    </div>
  );
};

export default Home;
