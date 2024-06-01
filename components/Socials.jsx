"use client";

import Link from "next/link";
import {
  RiFacebookFill,
  RiGithubFill,
  RiTwitterXFill,
  RiLinkedinFill,
  RiYoutubeFill,
} from "react-icons/ri";

const icons = [
  // {
  //   path: "/",
  //   name: <RiYoutubeFill />,
  // },
  {
    path: "https://www.linkedin.com/in/shajjad-shagor-3781407b/",
    name: <RiLinkedinFill />,
  },
  {
    path: "https://github.com/shagors",
    name: <RiGithubFill />,
  },
  {
    path: "https://www.facebook.com/incorrectSHAGOR/",
    name: <RiFacebookFill />,
  },
  {
    path: "https://twitter.com/shajjadshagor",
    name: <RiTwitterXFill />,
  },
];

const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons?.map((icon, index) => {
        return (
          <Link href={icon.path} key={index}>
            <div className={`${iconsStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
