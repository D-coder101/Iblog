"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

function Filter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathName = usePathname();

  const activeFilter = searchParams.get("category") ?? "all";

  const handleFilter = (filter: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("category", filter);
    router.replace(`${pathName}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="flex gap-4 font-semibold">
      <Button
        filter="all"
        activeFilter={activeFilter}
        handleFilter={handleFilter}
      >
        All
      </Button>
      <Button
        filter="destination"
        activeFilter={activeFilter}
        handleFilter={handleFilter}
      >
        Destination
      </Button>
      <Button
        filter="culinary"
        activeFilter={activeFilter}
        handleFilter={handleFilter}
      >
        Culinary
      </Button>

      <Button
        filter="lifestyle"
        activeFilter={activeFilter}
        handleFilter={handleFilter}
      >
        LifeStyle
      </Button>
      <Button
        filter="tips-and-hacks"
        activeFilter={activeFilter}
        handleFilter={handleFilter}
      >
        Tips & Hacks
      </Button>
    </div>
  );
}
export default Filter;

interface ButtonProps {
  filter: string;
  handleFilter: (filter: string) => void;
  activeFilter: string;
  children: React.ReactNode;
}

function Button({ filter, handleFilter, activeFilter, children }: ButtonProps) {
  return (
    <button
      className={`px-5 py-2 hover:bg-gray-200 rounded-lg flex items-center justify-center transition-all duration-200 ease-in-out ${
        filter === activeFilter ? "bg-gray-200 shadow-md" : ""
      }`}
      onClick={() => handleFilter(filter)}
    >
      {children}
    </button>
  );
}
