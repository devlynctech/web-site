import RevealProvider from "./components/providers/RevealProvider";
import Contact from "./components/sections/Contact";
import Hero from "./components/sections/Hero";
import Marquee from "./components/sections/Marquee";
import Models from "./components/sections/Models";
import Numbers from "./components/sections/Numbers";
import Process from "./components/sections/Process";
import Services from "./components/sections/Services";
import Technologies from "./components/sections/Technologies";
import Testimonials from "./components/sections/Testimonials";
import Why from "./components/sections/Why";


export default function Home() {
  return (
    <>
      <RevealProvider>
        <Hero />
        <Marquee />
        <Services />
        <Numbers />
        <Process />
        <Technologies />
        <Why />
        <Testimonials />
        <Models />
        <Contact />
      </RevealProvider>
    </>
  );
}