import Link from "next/link";
import { BiEditAlt } from "react-icons/bi";

function PersonalInfo() {
  return (
    <div className="rounded-2xl border p-3 md:p-4 bg-white flex flex-col gap-y-3">
      <div className="flex items-center justify-between w-full">
        <h2 className=" font-semibold">Personal Infomation</h2>
        <Link href="/settings/edit-profile">
          <button className="px-4 py-2 rounded-full border border-gray-500  text-xs font-medium flex hover:shadow-md hover:bg-black hover:text-white duration-200 ease-in-out text-gray-500 items-center gap-x-1">
            Edit <BiEditAlt size={18} />
          </button>
        </Link>
      </div>

      {/*details */}
      <ul className="text-sm font-medium text-gray-500 grid grid-cols-2 gap-4">
        <li>
          <p>First Name</p>
          <p className="text-black">Sniper</p>
        </li>
        <li>
          <p>Last Name</p>
          <p className="text-black">Wesley</p>
        </li>
        <li>
          <p>Email address</p>
          <p className="text-black truncate">wesleySniper999@gmail.com</p>
        </li>
        <li>
          <p>Phone</p>
          <p className="text-black">+09 232 853 45</p>
        </li>
        <li>
          <p>Bio</p>
          <p className="text-black">Team manager</p>
        </li>
      </ul>
    </div>
  );
}

export default PersonalInfo;
