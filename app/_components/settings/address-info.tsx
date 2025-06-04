import { BiEditAlt } from "react-icons/bi";

function AddressInfo() {
  return (
    <div className="rounded-2xl border p-3 md:p-4 bg-white flex flex-col gap-y-3">
      <div className="flex items-center justify-between w-full">
        <h2 className=" font-semibold">Address</h2>
        <button className="px-4 py-2 rounded-full border border-gray-500 text-xs font-medium flex hover:shadow-md hover:bg-black hover:text-white duration-200 ease-in-out text-gray-500 items-center gap-x-1">
          Edit <BiEditAlt size={18} />
        </button>
      </div>

      {/*details */}
      <ul className="text-sm font-medium text-gray-500 grid grid-cols-2 gap-4">
        <li>
          <p>Country</p>
          <p className="text-black">United Kingdom</p>
        </li>
        <li>
          <p>City/State</p>
          <p className="text-black">Leads, East London</p>
        </li>
        <li>
          <p>Postal Code</p>
          <p className="text-black">30012</p>
        </li>
        <li>
          <p>Residential Address</p>
          <p className="text-black truncate">
            44 wolf street, off hunged, washington.
          </p>
        </li>
      </ul>
    </div>
  );
}

export default AddressInfo;
