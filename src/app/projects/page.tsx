"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";
import "@splidejs/react-splide/css";

const PROJECTS = [
  {
    id: "helenchapmanphotography",
    name: "Helen",
    description: `Helen is a sleek and responsive web platform crafted to deliver elegant and 
    user-friendly digital experiences. It emphasizes performance, clean design, 
    and accessibility across all devices. Designed with scalability in mind, 
    Helen can seamlessly adapt for personal portfolios, business showcases, 
    or interactive applications.`,
    link: "https://helenchapmanphotography.co.nz/",
    images: [
      "/assets/demo/Helan/desktop.png",
      "/assets/demo/Helan/mobile.png",
    ],
  },
];

function Page() {
  return (
    <div className="container mx-auto md:px-[50px] xl:px-[150px] text-zinc-300 h-full">
      <h1 className="text-4xl mt-[100px] mb-[50px]">Projects</h1>

      <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 place-content-around">
        {PROJECTS.map((project) => (
          <li key={project.id}>
            <article className="w-[300px] h-[400px] border border-zinc-600/70 rounded-md backdrop-blur-sm overflow-hidden">
              {/* Image Carousel */}
              <div className="h-[200px]">
                <Splide
                  options={{
                    type: "loop",
                    interval: 3000,
                    autoplay: true,
                    speed: 2000,
                    perMove: 1,
                    rewind: true,
                    easing: "cubic-bezier(0.25, 1, 0.5, 1)",
                    arrows: false,
                  }}
                  aria-label={`${project.name} screenshots`}
                >
                  {project.images.map((image) => (
                    <SplideSlide key={image}>
                      <Image
                        src={image}
                        alt={`Screenshot of ${project.name}`}
                        className="w-full h-[200px] object-cover bg-zinc-900"
                        width={300}
                        height={200}
                        priority
                      />
                    </SplideSlide>
                  ))}
                </Splide>
              </div>

              {/* Content */}
              <div className="p-4 text-zinc-300 flex flex-col justify-between h-[200px]">
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h2 className="text-xl font-semibold hover:underline">
                    {project.name}
                  </h2>
                </Link>
                <p className="mt-2 text-xs text-zinc-500 line-clamp-5">
                  {project.description}
                </p>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Page;
