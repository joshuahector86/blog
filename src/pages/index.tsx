import Footer from "@blog/components/Footer/Footer";
import Hero from "@blog/components/Hero/Hero";
import Navbar from "@blog/components/Navbar/Navbar";
import Posts from "@blog/components/Posts/Posts";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Posts />
      <Footer />
    </div>
  );
}
