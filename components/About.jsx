import Image from "next/image";
import DevImg from "./DevImg";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
} from "lucide-react";

const infoData = [
  {
    icon: <User2 size={20} />,
    text: "Shajjad Hossan",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "+880 1770877400",
  },
  {
    icon: <MailIcon size={20} />,
    text: "shajjadshagor@gmail.com",
  },
  {
    icon: <Calendar size={20} />,
    text: "Born on 18, Dec",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "BSc on Computer Science & Engineering",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "Rangpur, Bangladesh",
  },
];

const qualificationData = [
  {
    title: "eduction",
    data: [
      {
        university: "SouthEast University",
        qualification: "Bachelor of Computer Science and Engineering",
        years: "2013 - 2017",
      },
      {
        university: "SouthEast University",
        qualification: "Bachelor of Computer Science and Engineering",
        years: "2018 - 2020",
      },
      {
        university: "SouthEast University",
        qualification: "Bachelor of Computer Science and Engineering",
        years: "2020 - 2024",
      },
    ],
  },
  {
    title: "experience",
    data: [
      {
        university: "Amar Software Solutions Ltd.",
        qualification: "Web Developer",
        years: "2017 - 2019",
      },
      {
        university: "THT-Space Electrical Company Ltd.",
        qualification: "Web Developer",
        years: "2023 - ",
      },
      {
        university: "SouthEast University",
        qualification: "Bachelor of Computer Science and Engineering",
        years: "2020 - 2024",
      },
    ],
  },
];

const skillData = [
  {
    title: "skills",
    data: [
      { name: "React, Next.js, Tailwind, Bootstrap, antd, shadcn, CSS" },
      { name: "Front-end Development" },
      { name: "JavaScript, TypeScript" },
      { name: "Back-end Development" },
    ],
  },
  {
    title: "tools",
    data: [
      { imgPath: "/about/vscode.svg" },
      { imgPath: "/about/figma.svg" },
      { imgPath: "/about/notion.svg" },
      { imgPath: "/about/wordpress.svg" },
    ],
  },
];

const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };
  return (
    <section className="xl:h-[860px] pb-12 xl:py-24">
      <div className="container">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          About Me
        </h2>
        <div className="flex flex-col xl:flex-row">
          {/* image */}
          <div className="hidden xl:flex flex-1 relative">
            <DevImg
              containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative"
              imgSrc="/about/developer.png"
            />
          </div>
          {/* tabs */}
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                <TabsTrigger value="personal">Personal Info</TabsTrigger>
                <TabsTrigger value="qualifications">Qualifications</TabsTrigger>
                <TabsTrigger value="skills">Skills</TabsTrigger>
              </TabsList>
              {/* tabs content */}
              <div className="text-lg mt-12 xl:mt-8 ">
                <TabsContent value="personal">Personal Info</TabsContent>
                <TabsContent value="qualifications">qualifications</TabsContent>
                <TabsContent value="skills">Skills</TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
