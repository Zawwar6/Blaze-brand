import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowDownUpIcon, ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
  SiVite,
  SiNetlify,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiApachemaven,
  SiCplusplus,
  SiArduino,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import css from "styled-jsx/css";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
  // +
  vite: {
    title: "Vite",
    bg: "black",
    fg: "white",
    icon: <SiVite />,
  },
  openai: {
    title: "OpenAI",
    bg: "black",
    fg: "white",
    icon: <img src="assets/icons/openai-svgrepo-com_white.svg" alt="OpenAI"/>,
  },
  netlify: {
    title: "Netlify",
    bg: "black",
    fg: "white",
    icon: <SiNetlify/>,
  },
  html: {
    title: "HTML5",
    bg: "black",
    fg: "white",
    icon: <SiHtml5/>,
  },
  css: {
    title: "CSS3",
    bg: "black",
    fg: "white",
    icon: <SiCss3/>,
  },
  bootstrap: {
    title: "Bootstrap",
    bg: "black",
    fg: "white",
    icon: <SiBootstrap/>,
  },
  maven: {
    title: "Maven",
    bg: "black",
    fg: "white",
    icon: <SiApachemaven/>,
  },
  java: {
    title: "Java",
    bg: "black",
    fg: "white",
    icon: <img src="assets/icons/icons8-java.svg" alt="Java"/>,
  },
  cplusplus: {
    title: "C++",
    bg: "black",
    fg: "white",
    icon: <SiCplusplus/>,
  },
  arduino: {
    title: "Arduino",
    bg: "black",
    fg: "white",
    icon: <SiArduino/>,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
{
  id: "ich",
  category: "Website",
  title: "ichbalochistan",
  src: "/assets/demo/ich/desktop.png",
  screenshots: ["/assets/demo/ich/desktop.png", "/assets/demo/ich/mobile.png"],
  live: "https://ichbalochistan.gob.pk/",
  github: "",
  skills: {
    frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.tailwind],
    backend: [],
  },
  get content() {
    return (
      <div>
        <TypographyP className="font-mono ">
          The Directorate of Culture is responsible for documenting, safeguarding, and promoting the living heritage of Balochistan in collaboration with local communities, practitioners, and academic institutions.</TypographyP>
        <ProjectsLinks live={this.live} repo={this.github} />
        <SlideShow
          images={[
            `/assets/demo/ich/desktop.png`,
            `/assets/demo/ich/mobile.png`,
          ]}
        />
      </div>
    );
  },
},
  { // 01. sample{
  id: "helenchapmanphotography",
  category: "Website",
  title: "Helen Chapman Photography",
  src: "/assets/demo/Helan/desktop.png",
  screenshots: [
    "/assets/demo/Helan/desktop.png",
    "/assets/demo/Helan/mobile.png",
  ],
  live: "https://helenchapmanphotography.co.nz/",
  github: "",
  skills: {
    frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.tailwind],
    backend: [],
  },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Helen Chapman Photography showcases stunning wedding, portrait, and event photography. 
            The site highlights her portfolio, client stories, and photography packages, 
            creating an elegant and personal experience for visitors.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              `/assets/demo/Helan/desktop.png`,
              `/assets/demo/Helan/mobile.png`,
            ]}
          />
        </div>
      );
    },
  },

  {
    id: "medithreadz",
    category: "Website",
    title: "Medithreadz",
    src: "/assets/demo/medi/desktop.png",
    screenshots: ["/assets/demo/medi/desktop.png", "/assets/demo/medi/mobile.png"],
    live: "https://medithreadz.com/",
    github: "",
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.tailwind],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Medithreadz is a website that provides PDO thread lift products and aesthetic solutions used by medical professionals for non-surgical skin lifting and rejuvenation.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              `/assets/demo/medi/desktop.png`,
              `/assets/demo/medi/mobile.png`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "rehsa",
    category: "Website",
    title: "Rehsa",
    src: "/assets/demo/rehsa/desktop.png",
    screenshots: ["/assets/demo/rehsa/desktop.png", "/assets/demo/rehsa/mobile.png"],
    live: "https://rehsathreadz.com/",
    github: "",
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.tailwind],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
             Rehsa is a real estate website that lists or promotes properties for buying, selling, or renting homes and plots.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              `/assets/demo/rehsa/desktop.png`,
              `/assets/demo/rehsa/mobile.png`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "victorybaptistchurch",
    category: "Website",
    title: "Victory Baptist Church",
    src: "/assets/demo/Church/desktop.png",
    screenshots: ["/assets/demo/Church/desktop.png", "/assets/demo/Church/mobile.png"],
    live: "https://victorybaptistchurch.co.nz/",
    github: "",
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.tailwind],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Victory Baptist Church is a welcoming community that shares Christian teachings, 
            live sermons, events, and outreach programs. The website provides information 
            about services, ministries, and ways to get connected.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              `/assets/demo/Church/desktop.png`,
              `/assets/demo/Church/mobile.png`,
            ]}
          />
        </div>
      );
    },
  },

  {
    id: "nma",
    category: "Website",
    title: "NMA",
    src: "/assets/demo/NMA/desktop.png",
    screenshots: ["/assets/demo/NMA/desktop.png", "/assets/demo/NMA/mobile.png"],
    live: "http://nma.org.nz/",
    github: "",
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.tailwind],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Ngā Mātārae Anamata Charitable Trust empowers at risk youth through hands on nature experiences.
            Our programs in outdoor education, sustainable agriculture, and conservation foster resilience, self-reliance, and environmental stewardship
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              `/assets/demo/NMA/desktop.png`,
              `/assets/demo/NMA/mobile.png`,
            ]}
          />
        </div>
      );
    },
  },

  {
    id: "pakchinamart",
    category: "E-Commerce",
    title: "Pak China Mart",
    src: "/assets/demo/PKCM/desktop.png",
    screenshots: ["/assets/demo/PKCM/desktop.png", "/assets/demo/PKCM/mobile.png"],
    live: "https://pakchinamart.com/",
    github: "",
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.tailwind],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Pak China Mart is an online store offering a wide variety of products ranging from 
            electronics and fashion to household items. The platform ensures affordable prices, 
            reliable delivery, and convenient online shopping.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              `/assets/demo/PKCM/desktop.png`,
              `/assets/demo/PKCM/mobile.png`,
            ]}
          />
        </div>
      );
    },
  },

  {
    id: "zawadi",
    category: "E-Commerce",
    title: "Zawadi Kenya",
    src: "/assets/demo/Zawadi/desktop.png",
    screenshots: ["/assets/demo/Zawadi/desktop.png", "/assets/demo/Zawadi/mobile.png"],
    live: "https://zawadi.co.ke/",
    github: "",
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.tailwind],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Zawadi is an online gift shop in Kenya offering curated collections of 
            personalized and unique gifts. Customers can browse categories such as 
            flowers, hampers, accessories, and more, with easy ordering and delivery.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              `/assets/demo/Zawadi/desktop.png`,
              `/assets/demo/Zawadi/mobile.png`,
            ]}
          />
        </div>
      );
    },
  },

  {
    id: "oserth",
    category: "Website",
    title: "Oserth",
    src: "/assets/demo/Oserth/desktop.png",
    screenshots: ["/assets/demo/Oserth/desktop.png", "/assets/demo/Oserth/mobile.png"],
    live: "https://oserth.e8demo.com/",
    github: "",
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.tailwind],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Oserth is a business platform demo showcasing modern website design and 
            professional branding. It provides sections for services, portfolio, 
            testimonials, and contact to highlight company offerings.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              `/assets/demo/Oserth/desktop.png`,
              `/assets/demo/Oserth/mobile.png`,
            ]}
          />
        </div>
      );
    },
  },

  {
    id: "ccme",
    category: "Website",
    title: "CCME News",
    src: "/assets/demo/CCME/desktop.png",
    screenshots: ["/assets/demo/CCME/desktop.png", "/assets/demo/CCME/mobile.png"],
    live: "https://ccme.news/",
    github: "",
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.tailwind],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            CCME News is an online news portal delivering timely updates on politics, 
            society, economy, and global issues. The site presents articles, opinion 
            pieces, and multimedia content for readers worldwide.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              `/assets/demo/CCME/desktop.png`,
              `/assets/demo/CCME/mobile.png`,
            ]}
          />
        </div>
      );
    },
  },

  {
    id: "fusionfragrance",
    category: "E-Commerce",
    title: "Fusion Fragrance",
    src: "/assets/demo/Fusion/desktop.png",
    screenshots: ["/assets/demo/Fusion/desktop.png", "/assets/demo/Fusion/mobile.png"],
    live: "https://fusionfragrance.pk/",
    github: "",
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.tailwind],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Fusion Fragrance is an online store specializing in premium perfumes and 
            fragrance collections. The website features a wide variety of international 
            brands with secure online shopping and delivery across Pakistan.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              `/assets/demo/Fusion/desktop.png`,
              `/assets/demo/Fusion/mobile.png`,
            ]}
          />
        </div>
      );
    },
  },

  {
    id: "hairandmakeupaustralia",
    category: "Website",
    title: "Hair & Makeup Australia",
    src: "/assets/demo/Hair/desktop.png",
    screenshots: ["/assets/demo/Hair/desktop.png", "/assets/demo/Hair/mobile.png"],
    live: "https://hairandmakeupaustralia.com.au/",
    github: "",
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.tailwind],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Hair and Makeup Australia offers professional beauty services for weddings, 
            events, and special occasions. The site showcases service packages, client 
            galleries, and booking options for a seamless customer experience.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              `/assets/demo/Hair/desktop.png`,
              `/assets/demo/Hair/mobile.png`,
            ]}
          />
        </div>
      );
    },
  },
    {
    id: "bpeSaudi",
    category: "Website",
    title: "Balance & Prosperity Establishment Commercial",
    src: "/assets/demo/BPE/desktop.png",
    screenshots: ["/assets/demo/BPE/desktop.png", "/assets/demo/BPE/mobile.png"],
    live: "https://bpe-est.com/",
    github: "",
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.tailwind],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Balance & Prosperity Establishment Commercial (BPE) is a trusted importer and distributor of industrial products serving major industries across the Kingdom of Saudi Arabia. We supply reliable solutions in instrumentation, mechanical, electrical, HVAC, and industrial equipment.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              `/assets/demo/BPE/desktop.png`,
              `/assets/demo/BPE/mobile.png`,
            ]}
          />
        </div>
      );
    },
  },

  {
  id: "larensy",
  category: "Website",
  title: "Larensy",
  src: "/assets/demo/Larensy/desktop.png",
  screenshots: ["/assets/demo/Larensy/desktop.png", "/assets/demo/Larensy/mobile.png"],
  live: "https://larensy.com/",
  github: "",
  skills: {
    frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.tailwind],
    backend: [],
  },
  get content() {
    return (
      <div>
        <TypographyP className="font-mono ">
          Larensy Jewelery began with a genuine love story. 
          While searching for an engagement ring for his now wife, Jacob Larense was taken aback by the high prices and unclear origins of traditionally mined diamonds.
        </TypographyP>
        <ProjectsLinks live={this.live} repo={this.github} />
        <SlideShow
          images={[
            `/assets/demo/Larensy/desktop.png`,
            `/assets/demo/Larensy/mobile.png`,
          ]}
        />
      </div>
    );
  },
},
  {
  id: "synctac",
  category: "Website",
  title: "Synctac",
  src: "/assets/demo/synctac/desktop.png",
  screenshots: ["/assets/demo/synctac/desktop.png", "/assets/demo/synctac/mobile.png"],
  live: "https://synctac.com/",
  github: "",
  skills: {
    frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.tailwind],
    backend: [],
  },
  get content() {
    return (
      <div>
        <TypographyP className="font-mono ">
          Synctac is a creative agency that blends strategy, design, and technology to craft meaningful digital experiences — helping brands connect, engage, and grow in a visually-driven world.
        </TypographyP>
        <ProjectsLinks live={this.live} repo={this.github} />
        <SlideShow
          images={[
            `/assets/demo/synctac/desktop.png`,
            `/assets/demo/synctac/mobile.png`,
          ]}
        />
      </div>
    );
  },
},


  // {
  //   id: "tcfuk",
  //   category: "Website",
  //   title: "The Citizens Foundation (UK)",
  //   src: "/assets/demo/TCFdesktop.png",
  //   screenshots: ["/desktop.png", "/mobile.png"],
  //   live: "https://tcf-uk.org/",
  //   github: "",
  //   skills: {
  //     frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.tailwind],
  //     backend: [],
  //   },
  //   get content() {
  //     return (
  //       <div>
  //         <TypographyP className="font-mono ">
  //           The Citizens Foundation UK supports TCF’s mission by raising funds 
  //           and awareness in the United Kingdom. The site highlights education 
  //           initiatives, donation programs, and upcoming charity events.
  //         </TypographyP>
  //         <ProjectsLinks live={this.live} repo={this.github} />
  //         <SlideShow
  //           images={[
  //             `/assets/demo/TCFdesktop.png`,
  //             `/assets/demo/TCFmobile.png`,
  //           ]}
  //         />
  //       </div>
  //     );
  //   },
  // },

  // {
  //   id: "tcfnorway",
  //   category: "Website",
  //   title: "The Citizens Foundation (Norway)",
  //   src: "/assets/demo/TCF/desktop.png",
  //   screenshots: ["/desktop.png", "/mobile.png"],
  //   live: "https://www.tcfnorway.org/",
  //   github: "",
  //   skills: {
  //     frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.tailwind],
  //     backend: [],
  //   },
  //   get content() {
  //     return (
  //       <div>
  //         <TypographyP className="font-mono ">
  //           The Citizens Foundation Norway is part of TCF’s global chapters, 
  //           working to bring education opportunities to children in Pakistan. 
  //           The website provides details on campaigns, donation options, 
  //           and community support activities in Norway.
  //         </TypographyP>
  //         <ProjectsLinks live={this.live} repo={this.github} />
  //         <SlideShow
  //           images={[
  //             `/assets/demo/TCF/desktop.png`,
  //             `/assets/demo/TCF/mobile.png`,
  //           ]}
  //         />
  //       </div>
  //     );
  //   },
  // },

  // {
  //   id: "tcfnetherlands",
  //   category: "Website",
  //   title: "The Citizens Foundation (Netherlands)",
  //   src: "/assets/demo/TCFdesktop.png",
  //   screenshots: ["/desktop.png", "/mobile.png"],
  //   live: "https://tcfnetherlands.org/",
  //   github: "",
  //   skills: {
  //     frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.tailwind],
  //     backend: [],
  //   },
  //   get content() {
  //     return (
  //       <div>
  //         <TypographyP className="font-mono ">
  //           The Citizens Foundation Netherlands supports TCF’s education 
  //           initiatives by engaging the Dutch community in fundraising and 
  //           awareness campaigns. The website showcases events, donation 
  //           opportunities, and TCF’s global impact.
  //         </TypographyP>
  //         <ProjectsLinks live={this.live} repo={this.github} />
  //         <SlideShow
  //           images={[
  //             `/assets/demo/TCFdesktop.png`,
  //             `/assets/demo/TCFmobile.png`,
  //           ]}
  //         />
  //       </div>
  //     );
  //   },
  // },

  // {
  //   id: "tcfusa",
  //   category: "Website",
  //   title: "The Citizens Foundation (USA)",
  //   src: "/assets/demo/TCF/desktop.png",
  //   screenshots: ["/desktop.png", "/mobile.png"],
  //   live: "https://tcfusa.org/",
  //   github: "",
  //   skills: {
  //     frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.tailwind],
  //     backend: [],
  //   },
  //   get content() {
  //     return (
  //       <div>
  //         <TypographyP className="font-mono ">
  //           The Citizens Foundation USA raises awareness and funds to support 
  //           education in Pakistan. The site highlights donation programs, 
  //           impact stories, and opportunities for individuals and organizations 
  //           to contribute to TCF’s mission.
  //         </TypographyP>
  //         <ProjectsLinks live={this.live} repo={this.github} />
  //         <SlideShow
  //           images={[
  //             `/assets/demo/TCF/desktop.png`,
  //             `/assets/demo/TCF/mobile.png`,
  //           ]}
  //         />
  //       </div>
  //     );
  //   },
  // },

  // {
  //   id: "tcfcanada",
  //   category: "Website",
  //   title: "The Citizens Foundation (Canada)",
  //   src: "/assets/demo/TCF/desktop.png",
  //   screenshots: ["/desktop.png", "/mobile.png"],
  //   live: "https://tcfcanada.org/",
  //   github: "",
  //   skills: {
  //     frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.tailwind],
  //     backend: [],
  //   },
  //   get content() {
  //     return (
  //       <div>
  //         <TypographyP className="font-mono ">
  //           The Citizens Foundation Canada chapter engages the Canadian community 
  //           to support TCF schools in Pakistan. The site features fundraising 
  //           campaigns, volunteer opportunities, and donation portals.
  //         </TypographyP>
  //         <ProjectsLinks live={this.live} repo={this.github} />
  //         <SlideShow
  //           images={[
  //             `/assets/demo/TCF/desktop.png`,
  //             `/assets/demo/TCF/mobile.png`,
  //           ]}
  //         />
  //       </div>
  //     );
  //   },
  // },

  // {
  //   id: "tcfswitzerland",
  //   category: "Website",
  //   title: "The Citizens Foundation (Switzerland)",
  //   src: "/assets/demo/TCFSS/desktop.png",
  //   screenshots: ["/desktop.png", "/mobile.png"],
  //   live: "https://tcfswitzerland.org/",
  //   github: "",
  //   skills: {
  //     frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.tailwind],
  //     backend: [],
  //   },
  //   get content() {
  //     return (
  //       <div>
  //         <TypographyP className="font-mono ">
  //           The Citizens Foundation Switzerland works with local donors and 
  //           organizations to expand educational opportunities in Pakistan. 
  //           The website promotes TCF’s mission, donation channels, and 
  //           upcoming Swiss community events.
  //         </TypographyP>
  //         <ProjectsLinks live={this.live} repo={this.github} />
  //         <SlideShow
  //           images={[
  //             `/assets/demo/TCFSS/desktop.png`,
  //             `/assets/demo/TCFSS/mobile.png`,
  //           ]}
  //         />
  //       </div>
  //     );
  //   },
  // },

];
export default projects;
