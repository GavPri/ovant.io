import { BookADemo3 } from "@/components/book-a-demo3";
import { Feature101 } from "@/components/feature101";
import { Footer30 } from "@/components/footer30";
import { Hero152 } from "@/components/hero152";
import { Navbar14 } from "@/components/navbar14";
import { Pricing22 } from "@/components/pricing22";
import { Process4 } from "@/components/process4";
import { TrustStrip1 } from "@/components/trust-strip1";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-start font-sans dark:bg-black">
      <Navbar14/>
      <main className="w-screen">
        <Hero152/>
        <TrustStrip1/>
        <Feature101/>
        <Process4/>
        <Pricing22/>
        <BookADemo3/>
      </main>
      <Footer30/>
    </div>
  );
}
