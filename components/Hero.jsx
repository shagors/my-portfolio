import Link from "next/link";
import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";

import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine,
} from "react-icons/ri";
import Socials from "./Socials";
import DevImg from "./DevImg";
import Badge from "./Badge";

const Hero = () => {
  return (
    <section className="py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          {/* text */}
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
              Full Stack Developer
            </div>
            <h1 className="h1 mb-4">HI, my name is Shajjad Hossan</h1>
            <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
              Building dynamic, responsive web applications with expertise in
              front-end, back-end, and database management.
            </p>

            {/* buttons */}
            <div className=" flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
              <Link href="/contact">
                <Button className="gap-x-2">
                  Contact me <Send size={18} />
                </Button>
              </Link>

              <a
                href="https://drive.google.com/uc?export=download&id=1xdfy_DKkZUngDw8vO0Q5WaJ60nhb3Ykl"
                variant="secondary"
                className="gap-x-2 flex items-center border rounded-full px-4 font-medium hover:bg-[#fe6e58] hover:text-white"
              >
                Download CV <Download size={18} />
              </a>
            </div>

            {/* Socials */}
            <Socials
              containerStyles="flex gap-x-6 mx-auto xl:mx-0"
              iconsStyles="text-foreground text-[22px] hover:text-primary transition-all "
            />
          </div>
          {/* image */}
          <div className="hidden xl:flex relative">
            {/* badge 1 */}
            <Badge
              containerStyles="absolute top-[24%] -left-[5rem]"
              icon={<RiBriefcase4Fill />}
              endCountNum={3}
              badgeText="Years Of Experience"
            />
            {/* badge 2 */}
            <Badge
              containerStyles="absolute top-[80%] -left-[1rem]"
              icon={<RiTodoFill />}
              endCountNum={2}
              endCountText="0"
              badgeText="Finished Projects"
            />
            {/* badge 3 */}
            <Badge
              containerStyles="absolute top-[55%] -right-8"
              icon={<RiTeamFill />}
              endCountNum={3}
              endCountText="0"
              badgeText="Happy Clients"
            />
            <div className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-2 -right-2"></div>
            <DevImg
              containerStyles="bg-hero_shape w-[440px] h-[462px] bg-no-repeat relative bg-bottom rounded-full"
              // imgSrc="/hero/developer.png"
              imgSrc="/shajjad.png"
            />
          </div>
        </div>
        {/* icon */}
        <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12">
          <RiArrowDownSLine className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
