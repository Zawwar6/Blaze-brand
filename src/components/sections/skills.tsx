import React from "react";
import { BoxReveal } from "../reveal-animations";
import { cn } from "@/lib/utils";

const SkillsSection = () => {
  return (
    <section id="skills" className="w-full min-h-screen flex flex-col items-center justify-center">
      <div className="sticky top-[70px] mb-32">
        <BoxReveal width="100%">
          <h2
            className={cn(
              "bg-clip-text text-4xl text-center text-transparent md:text-7xl",
              "bg-gradient-to-b from-black/80 to-black/50",
              "dark:bg-gradient-to-b dark:from-white/80 dark:to-white/20 dark:bg-opacity-50"
            )}
          >
            SKILLS
          </h2>
        </BoxReveal>
      </div>
    </section>
  );
};

export default SkillsSection;
