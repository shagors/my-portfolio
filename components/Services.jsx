import { GanttChartSquare, Blocks, Gem } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

const servicesData = [
  {
    icon: <Blocks size={72} strokeWidth={0.8} />,
    title: "Front end Development",
    description:
      "I excel in React, Next.js, TypeScript, and Tailwind CSS for front-end development. Crafting dynamic, responsive interfaces with clean, scalable code is my forte. Let's collaborate to create captivating digital experiences for your audience.",
  },
  {
    icon: <Gem size={72} strokeWidth={0.8} />,
    title: "Full Stack Development",
    description:
      "Specializing in full-stack development, I proficiently wield Node.js, MongoDB, MySQL, and Express.js for robust backend solutions. Whether it's crafting APIs or managing databases, I ensure seamless functionality and performance.",
  },
  {
    icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
    title: "Give Technology Support",
    description:
      "I offer expert technology support, proficient in troubleshooting and system administration. With a focus on efficiency and user satisfaction, I ensure seamless operations across diverse tech environments.",
  },
];

const Services = () => {
  return (
    <section className="mb-12 xl:mb-36">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 xl:mb-24 text-center mx-auto">
          My Services
        </h2>
        <div className="grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8">
          {servicesData?.map((item, index) => {
            return (
              <Card
                className="w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative"
                key={index}
              >
                <CardHeader className="absolute text-primary -top-[60px]">
                  <div className="w-[140px] h-[80px] bg-white dark:bg-background flex justify-center items-center">
                    {item.icon}
                  </div>
                </CardHeader>
                <CardContent className="text-center">
                  <CardTitle className="mb-4">{item.title}</CardTitle>
                  <CardDescription className="text-lg">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
