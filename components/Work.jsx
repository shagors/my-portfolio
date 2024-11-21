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
    image: "/work/food1.PNG",
    category: "react js",
    name: "Food Delivery Website",
    description:
      "This Food delivery project made with React, Redux, toolkit, bootstrap, slick-carousel, reactstrap, remixicon, react-slick.",
    link: "https://food-delivery-red-six.vercel.app/home",
    github: "https://github.com/shagors/react-food-delivery-app",
  },
  {
    image: "/work/shopify.png",
    category: "shopify",
    name: "Food Supply Website",
    description:
      "This is shopify project for Singapore based. This is company website here I do many custom code for custom design and many section.",
    link: "https://www.wowomart.com/",
    github: "/",
  },
  {
    image: "/work/gym1.png",
    category: "react js",
    name: "GYM Website",
    description:
      "This website make with react, typescript and framer motion.This is branding single page website",
    link: "https://yourevogym.vercel.app/",
    github: "https://github.com/shagors/your-gym-react-typescript",
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
    image: "/work/fullstack1.png",
    category: "fullstack",
    name: "Doctor Appointment Website",
    description:
      "This is Full stack website with MERN stack. Here I add github link and check with this link",
    link: "https://doctor-appointment-roan.vercel.app/",
    github: "https://github.com/shagors/doctor-appointment",
  },
  {
    image: "/work/fullstack2.PNG",
    category: "fullstack",
    name: "Dynamic Dashboard",
    description:
      "This website MERN stack. This data came from mongodb database.",
    link: "https://dashboard-frontend-1n45.onrender.com",
    github: "https://github.com/shagors/mern-dashboard",
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
            Here is my some latest projects, You can check it live and try it.
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
