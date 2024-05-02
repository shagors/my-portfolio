"use client";
import Link from "next/link";
import { Button } from "./ui/button";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

import ProjectCard from "./ProjectCard";

const projectData = [
  {
    image: "/work/3.png",
    category: "react js",
    name: "Food Website",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat voluptatum nostrum nesciunt dolorum eum deserunt.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/4.png",
    category: "react js",
    name: "Food Supply Website",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat voluptatum nostrum nesciunt dolorum eum deserunt.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/2.png",
    category: "react js",
    name: "GYM Website",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat voluptatum nostrum nesciunt dolorum eum deserunt.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/1.png",
    category: "Next JS",
    name: "Healthcare Website",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat voluptatum nostrum nesciunt dolorum eum deserunt.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/3.png",
    category: "Next JS",
    name: "Blog Website",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat voluptatum nostrum nesciunt dolorum eum deserunt.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/4.png",
    category: "Next JS",
    name: "EVO Website",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat voluptatum nostrum nesciunt dolorum eum deserunt.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/1.png",
    category: "fullstack",
    name: "Food Supply Website",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat voluptatum nostrum nesciunt dolorum eum deserunt.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/2.png",
    category: "fullstack",
    name: "Sushi Website",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat voluptatum nostrum nesciunt dolorum eum deserunt.",
    link: "/",
    github: "/",
  },
];

const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto gap-x-14">
        {/* text */}
        <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center xl:items-start">
          <h2 className="section-title mb-4">Latest Projects</h2>
          <p className="subtitle mb-8">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consequatur, sit.
          </p>
          <Link href="/projects">
            <Button>All Projects</Button>
          </Link>
        </div>

        {/* slider */}
        <div className="xl:max-w-[900px] xl:absolute right-0 top-0">
          <Swiper
            className="h-[480px]"
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {projectData.slice(0, 4).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;
