"use client";
import { Num137, Num600, Num740, Num896, Status } from "@/components";
import ClientLogo from "@/components/ClientLogo";
import Hero1 from "@/components/Hero1";
import LatestNews from "@/components/LatestNews";
import Slides from "@/components/Slides";
import Testimonials from "@/components/Testimonials";
import WelcomePg from "@/components/WelcomePg";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <div>
        <Hero1 />
      </div>
      <div>
        <WelcomePg />
      </div>
      <div>
        <Slides />
      </div>
      <div>
        <Status />
      </div>
      <div>
        <Testimonials />
      </div>
      <div>
        <ClientLogo />
      </div>
      <div>
        <LatestNews />
      </div>
    </main>
  );
}
