import Link from "next/link";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <div>
      <h1>Hello World</h1>
      <HeroSection></HeroSection>
      <div className="py-10">
        <Link href="/authPages/registerPage" className="btn">Register</Link>
      </div>
    </div>
  );
}
