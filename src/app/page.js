import ScrollTop from "@/Components/container/ScrollTop";
import AddressSection from "@/Components/Location/AddressSection";
import Model from "@/Components/Model/Model";
import Navbar from "@/Components/Navbar/Navbar";
import Thanks from "@/Components/Thanks/Thanks";
import FourthModule from "@/Modules/Home/FourthModule";
import MainHome from "@/Modules/Home/MainHome";
import ThirdModule from "@/Modules/Home/ThirdModule";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

export default function Home() {
  return (
    <>
      <div className="flex-column align-center w-full">
        {
          <Model />
          }
        <Navbar />
        <div className="flex flex-col items-center justify-center w-full">
          <div className="container px-[2rem]">
            <MainHome />
          </div>
          <ThirdModule />
          <FourthModule />
          <AddressSection />
          <Thanks />
        </div>
      </div>
      <ScrollTop />
    </>
  );
}
