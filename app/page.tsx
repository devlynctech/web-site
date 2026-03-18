import Banner from "./components/sections/Banner";
import Contact from "./components/sections/Contact";
import HowWeWork from "./components/sections/HowWeWork";
import Models from "./components/sections/Models";
import Services from "./components/sections/Services";
import WhyNearshore from "./components/sections/WhyNearshore";


export default function Home() {
  return (
    <>
      <Banner />
      <Services />
      <HowWeWork />
      <Models />
      <WhyNearshore />
      <Contact />
    </>
  );
}