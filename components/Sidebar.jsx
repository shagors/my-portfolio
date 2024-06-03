"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();
  const routes = [
    { path: "/dashboard", label: "Project Show" },
    { path: "/dashboard/post-form", label: "Project Post" },
    // { path: "/dashboard/update-data", label: "Project Update" },
    { path: "/dashboard/blog-post", label: "Add Blog" },
    { path: "/dashboard/show-blogs", label: "Show Blogs" },
  ];

  return (
    <div className="w-52 p-5 bg-slate-200 h-[90vh] shadow-md rounded-r-md">
      <h2 className="text-3xl font-semibold text-blue-600 mb-5">Dashboard</h2>
      <ul>
        {routes.map((route) => (
          <li key={route.path} className="py-2">
            <Link href={route.path} passHref>
              <span
                className={`
                  cursor-pointer text-lg
                  ${
                    pathname === route.path
                      ? "text-blue-500 text-xl font-medium"
                      : "text-black"
                  }
                `}
              >
                {route.label}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
