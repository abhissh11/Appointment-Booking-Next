import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Header() {
  const Menu = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "Explore",
      path: "/explore",
    },
    {
      id: 3,
      name: "contact Us",
      path: "/contact",
    },
  ];
  return (
    <div className="p-4 flex items-center justify-between shadow-md">
      <div className="flex gap-40">
        <Image src="/logo.svg" alt="logo" width={80} height={80} />
        <ul className="md:flex gap-8  hidden ">
          {Menu.map((item) => (
            <Link href={item.path} key={item.id}>
              <li className="hover:text-primary  cursor-pointer hover:scale-110 transition-all ease-in-out">
                {item.name}
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <Button>Get Satrted</Button>
    </div>
  );
}
