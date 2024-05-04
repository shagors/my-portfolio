"use client";

import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";

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
