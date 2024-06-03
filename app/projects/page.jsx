"use client";

import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";

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
    image: "/work/4.png",
    category: "react js",
    name: "Food Supply Website",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat voluptatum nostrum nesciunt dolorum eum deserunt.",
    link: "/",
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

// remove category duplicate
const uniqueCategories = [
  "all projects",
  ...new Set(projectData.map((item) => item.category)),
];

const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState("all projects");

  const filteredProjects = projectData.filter((project) => {
    return category === "all projects"
      ? project
      : project.category === category;
  });

  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          My Projects
        </h2>
        {/* tabs */}
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList className="w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none">
            {categories?.map((category, index) => {
              return (
                <TabsTrigger
                  onClick={() => setCategory(category)}
                  key={index}
                  value={category}
                  className="capitalize w-[162px] md:mx-auto"
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          {/* tabs content */}
          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project, index) => {
              return (
                <TabsContent key={index} value={category}>
                  <ProjectCard project={project} />
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
