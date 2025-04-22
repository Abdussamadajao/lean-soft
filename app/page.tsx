import {
  Hero,
  About,
  Services,
  Skills,
  StickyImg,
  Projects,
  Achieves,
  Team,
  Testimonials,
  News,
  Clients,
} from "@/sections";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Skills />
      <StickyImg />
      <Projects />
      <Achieves />
      <Team />
      <Testimonials />
      {/* <News /> */}
      <Clients />
    </>
  );
}
