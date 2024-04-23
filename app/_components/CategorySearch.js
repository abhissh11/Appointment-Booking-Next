import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import React from "react";

export default function CategorySearch() {
  return (
    <div className="m-10 flex items-center flex-col gap-2">
      <h2 className="font-bold text-4xl tracking-wide ">
        Search <span className="text-primary">Doctors</span>
      </h2>
      <h3 className="text-gray-500 text-lg">
        Search your doctors and book appointments
      </h3>
      <div className="flex w-full max-w-sm items-center space-x-2 mt-5">
        <Input type="text" placeholder="search..." />
        <Button type="submit">
          <Search className="h-4 w-4 mr-2" /> Search
        </Button>
      </div>
    </div>
  );
}
