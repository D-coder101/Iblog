"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { FaAngleUp } from "react-icons/fa";

interface Option {
  value: string;
  label: string;
}
type optionsProps = {
  options: Option[];
};

function AdminSort({ options }: optionsProps) {
  const [isOpen, setIsOpen] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathName = usePathname();

  const currentSort = searchParams.get("sortBy") || options[0]?.value;
  const selectedItem =
    options.find((option) => option.value === currentSort) || options[0];

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option: Option) => {
    const params = new URLSearchParams(searchParams);
    params.set("sortBy", option.value);
    router.replace(`${pathName}?${params.toString()}`, { scroll: false });

    setIsOpen(false);
  };

  return (
    <div className="relative flex flex-col font-medium">
      <div
        className=" relative bg-white w-56 rounded-full px-3 py-1.5 border focus:shadow cursor-pointer text-sm"
        onClick={toggleIsOpen}
      >
        {selectedItem?.label}

        <FaAngleUp
          className={`absolute duration-200 ease-linear ${
            !isOpen && "rotate-180"
          } top-1/2 -translate-y-1/2 right-3`}
        />
      </div>
      {/*dropdown */}
      <div
        className={`absolute bg-white w-full top-full mt-1 text-sm rounded-lg duration-200 ease-linear p-1 shadow border overflow-hidden ${
          isOpen ? "max-h-60 visible" : "max-h-0 invisible"
        }`}
      >
        <div className="flex flex-col">
          {options.map((option) => (
            <button
              key={option.value}
              onClick={() => handleSelect(option)}
              className="hover:bg-gray-100 rounded-lg py-1.5"
            >
              {option?.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AdminSort;
