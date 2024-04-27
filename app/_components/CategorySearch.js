"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import React, { useEffect, useState } from "react";
import GlobalApi from "../_utils/GlobalApi";
import Image from "next/image";

export default function CategorySearch() {
  const [categoryList, setCategoryList] = useState();
  useEffect(() => {
    getCategoryList();
  }, []);

  const getCategoryList = () => {
    GlobalApi.getCategory().then((res) => {
      console.log(res.data.data);
      setCategoryList(res.data.data);
    });
  };

  return (
    <div className="m-2 flex items-center flex-col gap-2">
      <h2 className="font-bold text-4xl tracking-wide ">
        Search <span className="text-primary">Doctors</span>
      </h2>
      <h3 className="text-gray-500 text-lg px-2">
        Search your doctors and book appointments
      </h3>
      <div className="flex w-full max-w-sm items-center space-x-2 mt-5">
        <Input type="text" placeholder="search..." />
        <Button type="submit">
          <Search className="h-4 w-4 mr-2" /> Search
        </Button>
      </div>
      <div className="grid grid-cols-3 mt-5 md:grid-cols-4 lg:grid-cols-6">
        {categoryList &&
          categoryList.map(
            (cat, index) =>
              index < 6 && (
                <div
                  className="flex flex-col items-center p-5 bg-blue-100 m-2 rounded-lg text-center gap-2 
                   hover:scale-110 transition-all ease-in-out cursor-pointer"
                  key={index}
                >
                  <Image
                    src={cat.attributes?.Icon.data.attributes?.url}
                    alt="icon"
                    width={40}
                    height={40}
                  />
                  <label className="text-blue-600 text-sm px-2">
                    {cat?.attributes?.Name}
                  </label>
                </div>
              )
          )}
      </div>
    </div>
  );
}
