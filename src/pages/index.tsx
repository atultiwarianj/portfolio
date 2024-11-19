import About from "@/components/About";
import Footer from "@/components/Footer";
import Me from "@/components/Me";
import Projects from "@/components/Projects";
import Technologies from "@/components/Technologies";
import StarsCanvas from "@/components/canvas/StarCanvas";
import Image from "next/image";

const Home = () => {
  return (
    <>
      <div className=" w-full px-0 lg:px-10 flex justify-center flex-col mt-5 mb-5 ">
        <About />
        <Technologies />
        <Projects />
      </div>
      <Me />
      <Footer />
    </>
  );
};

export default Home;
