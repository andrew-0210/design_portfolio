import Description from "@/components/Description";
import Hero from "@/components/Hero";
import ImageSlider from "@/components/ImageSlider";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main>
      <Hero />
      <ImageSlider />
      <Description />
      <Projects />
    </main>
  );
}
