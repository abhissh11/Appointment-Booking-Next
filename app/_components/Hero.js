import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <div>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
              <img
                alt=""
                src="https://media.istockphoto.com/id/1555515663/photo/happy-portrait-group-and-doctors-for-healthcare-service-leadership-and-teamwork-in-hospital.webp?b=1&s=170667a&w=0&k=20&c=vQBhyaQn47KIuZ61OtLG8LTdC9NfIbzonAaSFRjFRN8="
                className="absolute inset-0 h-full w-full object-cover rounded-3xl "
              />
            </div>

            <div className="lg:py-24">
              <h2 className="text-3xl font-bold sm:text-4xl">
                Find & Book your{" "}
                <span className="text-primary">Appointment </span>from your fav{" "}
                <span className="text-primary">Doctors</span>
              </h2>

              <p className="mt-4 text-gray-600">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut
                qui hic atque tenetur quis eius quos ea neque sunt, accusantium
                soluta minus veniam tempora deserunt? Molestiae eius quidem quam
                repellat.
              </p>

              <Button className="mt-10">Explore Now</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
