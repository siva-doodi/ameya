import Image from "next/image";
import AiHeroSection from "./components/home/AiHeroSection ";
import AiManiFesto from "./components/home/AiManiFesto";
import AiServiceSection from "./components/home/AiServiceSection";
import AiContact from "./components/home/AiContact";

export default function Home() {
  return (
    <>
      <AiHeroSection />
      <AiManiFesto />
      <AiServiceSection />
      <AiContact />
    </>
  );
}
