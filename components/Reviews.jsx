"use client";
import Image from "next/image";
import { Card, CardDescription, CardTitle, CardHeader } from "./ui/card";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

const reviewsData = [
  {
    avatar: "/reviews/avatar-1.png",
    name: "Richard Thompson",
    job: "chef",
    review: "Beautiful designs, intuitive interfaces, exceeded expectations.",
  },
  {
    avatar: "/reviews/avatar-2.png",
    name: "Everton Thomas",
    job: "Arcitect",
    review: "Responsive layouts, visually stunning, seamless navigation.",
  },
  {
    avatar: "/reviews/avatar-3.png",
    name: "Jhon Doe",
    job: "Gamer",
    review: "Robust backend, scalable architecture, flawless execution.",
  },
  {
    avatar: "/reviews/avatar-4.png",
    name: "Emily Smith",
    job: "Fashion Designer",
    review:
      "Efficient database management, reliable APIs, exceptional performance.",
  },
  {
    avatar: "/reviews/avatar-5.png",
    name: "Kristian Sturt",
    job: "Doctor",
    review:
      "Expertise in both front-end and full-stack development, invaluable asset.",
  },
  {
    avatar: "/reviews/avatar-6.png",
    name: "Elina Goudling",
    job: "Singer",
    review:
      "Exceptional skills, seamless integration, exceeded all expectations.",
  },
];

const Reviews = () => {
  return (
    <section className="mb-12 xl:mb-32">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 text-center mx-auto">Reviews</h2>

        {/* slider */}
        <Swiper
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1400: { slidesPerView: 3 },
          }}
          spaceBetween={30}
          modules={[Pagination]}
          pagination={{ clickable: true }}
          className="h-[350px]"
        >
          {reviewsData.map((person, index) => {
            return (
              <SwiperSlide key={index}>
                <Card className="bg-tertiary dark:bg-secondary/40 p-8 min-h-[300px]">
                  <CardHeader className="p-0 mb-10">
                    <div className="flex items-center gap-x-4">
                      <Image
                        src={person.avatar}
                        alt=""
                        width={70}
                        height={70}
                        priority
                      />
                      <div className="flex flex-col">
                        <CardTitle>{person.name}</CardTitle>
                        <p>{person.job}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardDescription className="text-lg text-muted-foreground">
                    {person.review}
                  </CardDescription>
                </Card>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Reviews;
