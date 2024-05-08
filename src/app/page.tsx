"use client";
import Clearance from "@/components/Clearance";
import Filter from "@/components/Filter";
import { useState } from "react";

export default function Home() {
  const [filter, setFilter] = useState({
    all: true,
    porcelain: false,
    marble: false,
    quartz: false,
    onyx: false,
  });

  const handleClick = (clicked: string) => {
    setFilter({
      all: clicked === "all",
      porcelain: clicked === "porcelain",
      marble: clicked === "marble",
      quartz: clicked === "quartz",
      onyx: clicked === "onyx",
    });
  };

  return (
    <div className="pt-9 px-10">
      <div className="flex justify-center">
        <h1 className="text-6xl font-bold">GTA Stone Clearance</h1>
      </div>
      <div>
        <p className=" w-2/3 leading-7 font-medium mt-20 text-lg mx-auto">
          Experience the elegance of our premium stone slabs now available at
          clearance prices! We are offering a unique selection of Onyx, Marble,
          Quartz, and Porcelain slabs, perfect for elevating any space with
          their natural beauty and sophistication. These high-quality materials
          are renowned for their durability and timeless appeal. Don&apos;t miss
          this opportunity to acquire these exquisite stone slabs at unbeatable
          prices. Hurry, as this offer is only available for a limited time in
          the Greater Toronto Area. Enhance your home or business today with our
          premium stone slabs!
        </p>
      </div>
      <div className="flex flex-col items-center mt-20">
        <p className="text-xl font-semibold">Select a category</p>
        <div className="flex justify-center gap-10 mt-10">
          <Filter
            handleClick={handleClick}
            value="porcelain"
            content="Porcelain"
          />
          <Filter handleClick={handleClick} value="quartz" content="Quartz" />
          <Filter handleClick={handleClick} value="marble" content="Marble" />
          <Filter handleClick={handleClick} value="onyx" content="Onyx" />
        </div>
        <p className="mt-10">
          {filter.porcelain && "Showing Porcelain Clearance"}
          {filter.marble && "Showing Marble Clearance"}
          {filter.quartz && "Showing Quartz Clearance"}
          {filter.onyx && "Showing Onyx Clearance"}
        </p>
      </div>
      <Clearance filter={filter} />
    </div>
  );
}
