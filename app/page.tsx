import Banner from "./components/sections/Banner";
import Contact from "./components/sections/Contact";
import HowWeWork from "./components/sections/HowWeWork";
import Marquee from "./components/sections/Marquee";
import Models from "./components/sections/Models";
import ServicesSection from "./components/sections/services/ServicesSection";
import Technologies from "./components/sections/Technologies";
import WhyNearshore from "./components/sections/WhyNearshore";


export default function Home() {
  return (
    <>
      <Banner />
      <Marquee />
      <ServicesSection />
      <HowWeWork />
      <Technologies />
      <WhyNearshore />
      <Models />
      <Contact />
    </>
  );
}