"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ContactForm from "../ContactForm";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { config } from "@/data/config";

const ContactSection = () => {
  const emailSafe = config?.email || "your@email.com";

  return (
    <section id="contact" className="max-w-7xl mx-auto mt-32 md:mt-48 py-24 mb-32 md:mb-48">
      <Link href="#contact">
        <h2
          className={cn(
            "bg-clip-text text-4xl text-center text-transparent md:text-7xl pt-16",
            "bg-gradient-to-b from-black/80 to-black/50",
            "dark:bg-gradient-to-b dark:from-white/80 dark:to-white/20 dark:bg-opacity-50"
          )}
        >
          LET&apos;S WORK <br />
          TOGETHER
        </h2>
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 md:mt-20">
        <Card className="bg-white/70 dark:bg-black/70 backdrop-blur-sm rounded-xl">
          <CardHeader>
            <CardTitle className="text-2xl md:text-4xl">Contact Form</CardTitle>
            <CardDescription className="text-sm md:text-base">
              Please contact me directly at{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={`mailto:${emailSafe}`}
                className="text-blue-600 dark:text-blue-400 underline hover:opacity-80"
              >
                {emailSafe.replace(/@/g, "(at)")}
              </a>{" "}
              or drop your info here.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ContactForm />
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactSection;
