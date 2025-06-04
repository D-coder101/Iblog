"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

interface options {
  value: string;
  label: string;
}
type selectProps = {
  options: options[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

type optionsProps = {
  options: options[];
};

function SortBy({ options }: optionsProps) {
  // const [searchParams, setSearchParams] = useSearchParams();
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathName = usePathname();

  const currentSort = searchParams.get("sortBy") || "new";

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const params = new URLSearchParams(searchParams);
    params.set("sortBy", e.target.value);

    router.replace(`${pathName}?${params.toString()}`, { scroll: false });
  };

  return (
    <div>
      <span className="">Sort by:</span>&nbsp;
      <Select value={currentSort} options={options} onChange={handleChange} />
    </div>
  );
}
export default SortBy;

function Select({ options, value, onChange }: selectProps) {
  return (
    <select
      value={value}
      className="focus:outline-none border rounded-md p-2 cursor-pointer bg-white shadow-sm font-medium"
      onChange={onChange}
    >
      {options.map((option) => (
        <option
          value={option.value}
          key={option.value}
          className="cursor-pointer focus:!bg-black hover:!bg-black"
        >
          {option.label}
        </option>
      ))}
    </select>
  );
}
