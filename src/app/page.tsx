"use client";

import React from "react";
import SmoothScroll from "@/components/smooth-scroll";
import { cn } from "@/lib/utils";
import Navbar from "@/components/sections/navbar";
import AnimatedBackground from "@/components/animated-background";
import SkillsSection from "@/components/sections/skills";
import ProjectsSection from "@/components/sections/projects";
import PricingSection from "@/components/sections/pricing";
import ContactSection from "@/components/sections/contact";
import AboutSection from "@/components/sections/about";
import HeroSection from "@/components/sections/hero";

function MainPage() {
  return (
    <>
     <Navbar/>
      <SmoothScroll>
        <main className={cn("bg-slate-100 dark:bg-transparent")}>
          <div className="top-0 z-0 fixed w-full h-screen">
            {/* <AnimatedBackground /> */}
          </div>
          <HeroSection />
          <AboutSection/>
          {/* <SkillsSection /> */}
          <ProjectsSection />
          {/* <PricingSection /> */}
          {/* <ContactSection /> */}
        </main>
      </SmoothScroll>
    </>
  );
}

export default MainPage;
