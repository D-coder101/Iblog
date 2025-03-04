// "use client";
// import { usePathname, useRouter, useSearchParams } from "next/navigation";
// import { useState } from "react";
import { GiSettingsKnobs } from "react-icons/gi";
import { IoFilterOutline } from "react-icons/io5";

function AdminFilter() {
  return (
    <div className="relative">
      <button className="border rounded-full py-1.5 px-3 flex items-center justify-center gap-1.5 duration-300 ease-in-out transition-shadow hover:shadow">
        <GiSettingsKnobs />
        Filter
      </button>
    </div>
  );
}

export default AdminFilter;
