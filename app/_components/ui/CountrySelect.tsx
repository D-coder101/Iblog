"use client";
import { useOutsideClick } from "@/app/_hooks/useOutsideClick";
import { useField } from "formik";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { TiArrowSortedDown } from "react-icons/ti";
import { useCountries } from "use-react-countries";

interface ICountrySelect {
  defaultCountry?: string;
  label?: string;
  labelClass?: string;
  name: string;
}

interface ICountryDisplayData {
  name: string;
  code: string; // Mapped from countryCallingCode
  flag: string; // Mapped from flags.svg
}

interface ICountry {
  name: string;
  countryCallingCode: string;
  flags: {
    png: string;
    svg: string;
  };
}

function CountrySelect({
  defaultCountry,
  label,
  name,
  labelClass,
  ...props
}: ICountrySelect) {
  const [field, meta] = useField(name);

  const { countries } = useCountries();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] =
    useState<ICountryDisplayData | null>(null);
  const [query, setQuery] = useState("");

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const dropDownRef = useOutsideClick<HTMLDivElement>(closeDropdown);

  //  Memoize function to avoid re-renders
  const transformedCountries = useMemo(() => {
    return countries.map((country: ICountry) => ({
      name: country.name,
      code: country.countryCallingCode,
      flag: country.flags?.svg,
    }));
  }, [countries]);

  // Set initial selected country based on defaultCountry prop
  useEffect(() => {
    if (defaultCountry && transformedCountries.length > 0 && !selectedCountry) {
      const initialCountry = transformedCountries.find(
        (country: ICountryDisplayData) =>
          country.name.toLowerCase() === defaultCountry.toLowerCase()
      );
      if (initialCountry) {
        setSelectedCountry(initialCountry);
      }
    }
  }, [defaultCountry, transformedCountries, selectedCountry]);

  //  Memoize filtering logic:to avoid re-renders
  const filteredAndSortedCountries = useMemo(() => {
    let filtered = transformedCountries;

    if (query) {
      const lowerCaseQuery = query.toLowerCase();
      filtered = transformedCountries.filter(
        (country: ICountryDisplayData) =>
          country.name.toLowerCase().startsWith(lowerCaseQuery) ||
          country.code.includes(query) // Search by code as well
      );
    }

    // Sort by name, then by code if names are equal
    return [...filtered].sort((a, b) => {
      const nameCompare = a.name.localeCompare(b.name);
      if (nameCompare !== 0) {
        return nameCompare;
      }
      return a.code.localeCompare(b.code); // Secondary sort by code
    });
  }, [transformedCountries, query]);

  const toggleIsOpen = () => setIsOpen((prev) => !prev);

  const handleSelectedCountry = (country: ICountryDisplayData) => {
    setSelectedCountry(country);
    setIsOpen(false);
    setQuery("");
  };

  return (
    <div className={`flex flex-col relative`}>
      {/*label */}
      {label && (
        <label
          htmlFor={name}
          className={`text-left text-sm text-slate-600 font-medium ${labelClass}`}
        >
          {label}
        </label>
      )}

      {/*selected content */}
      <div
        tabIndex={0}
        className={`relative  placeholder:text-sm placeholder:font-medium w-full rounded-md outline-0 border focus-within:border-black text-sm flex items-center group  ${
          meta.error && meta.touched ? "border-red-500" : "border-gray-300"
        }`}
      >
        {/*flag and dropdown icon */}
        <div
          tabIndex={0}
          onClick={toggleIsOpen}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              toggleIsOpen();
            }
          }}
          className="h-full flex items-center px-3 gap-x-1.5 bg-gray-100 border-r-gray-300 border-r rounded-tl-md rounded-bl-md cursor-pointer group/drop peer-drop focus:outline-none"
        >
          {selectedCountry?.flag && (
            <Image
              src={selectedCountry?.flag}
              alt={selectedCountry?.name}
              width={24}
              height={15}
              className="h-[15px] min-w-6 object-cover"
            />
          )}
          <span className="text-gray-600 font-medium text-xl h-full grid place-items-center">
            <TiArrowSortedDown
              className={` duration-300 ease-in-out ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </span>
        </div>

        {/* selected country code */}
        <span className="h-full grid place-items-center text-gray-400 font-medium text-nowrap w-16 bg-gray-100 group-focus-within:bg-white pl-1">
          {selectedCountry?.code}
        </span>

        <input
          {...field}
          {...props}
          type="text"
          placeholder="Enter phone no..."
          className="py-2.5 px-1 w-full rounded-tr-md rounded-br-md focus:outline-none bg-gray-100 group-focus-within:bg-transparent"
        />
        {/* Search Country Name or Code */}
      </div>

      {/*dropdown */}
      <div
        className={`rounded-md border bg-white shadow-lg mt-1 w-full z-10 ${
          isOpen ? "opacity-1 visible" : "opacity-0 invisible"
        } absolute top-full duration-200 ease-in-out`}
        ref={dropDownRef}
      >
        {/*search */}
        <div className="m-2 relative">
          <input
            type="text"
            placeholder="Search Country Name or Code"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className={`border bg-gray-100 focus:bg-transparent placeholder:text-sm  w-full focus:ring-0 rounded-md outline-0 focus:border-gray-400 duration-200 ease-in-out text-gray-600 peer py-1.5 px-7 text-sm`}
          />
          <FiSearch className="absolute text-slate-400 peer-focus:text-slate-500 top-1/2 -translate-y-1/2 left-1.5" />
        </div>

        {/*items */}
        <ul className="overflow-y-auto max-h-44">
          {filteredAndSortedCountries.map((country: ICountryDisplayData) => (
            <li
              key={country.name}
              className={`cursor-pointer hover:bg-gray-100 border-b py-1.5 px-3 text-sm text-slate-600 flex items-center justify-between gap-x-2 max-w-full`}
              onClick={() => handleSelectedCountry(country)}
            >
              <span className="flex items-center">
                {/* {country?.flag && ( */}
                <Image
                  src={country.flag}
                  alt={country.name}
                  width={24}
                  height={15}
                  className="h-[15px] w-6 mr-2 object-cover"
                />
                {/* )} */}
                <p className="line-clamp-1">{country.name}</p>
              </span>
              <span className="text-nowrap"> {country.code}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="h-4 text-right">
        {meta.error && meta.touched && (
          <p className=" text-xs text-right text-red-500">{meta.error}</p>
        )}
      </div>
    </div>
  );
}

export default CountrySelect;
