import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Section from "../components/Section";

const page = () => {
  return (
    <div className="bg-white h-[100vh]">
        {/* Navbar */}
      <Navbar />

      {/* Section */}
      <Section />

      {/* Footer  */}
      <Footer />
    </div>
  )
}

export default page
