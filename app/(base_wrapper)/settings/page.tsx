import AddressInfo from "@/app/_components/settings/address-info";
import ChangeAvatar from "@/app/_components/settings/change-avatar";
import PersonalInfo from "@/app/_components/settings/personal-info";
import { BiEditAlt } from "react-icons/bi";
import { VscTrash } from "react-icons/vsc";

function Page() {
  return (
    <section className="px-3 min-h-screen pt-2 pb-40 bg-gray-100">
      <div className="md:max-w-4xl mx-auto w-full p-2 space-y-2">
        <h2 className="md:text-xl font-semibold">Account Settings</h2>

        {/*profile pic */}
        <ChangeAvatar />

        {/*Personal info */}
        <PersonalInfo />

        {/*Address info */}
        <AddressInfo />

        {/*password */}
        <div className="rounded-2xl border p-3 md:p-4 bg-white flex items-center justify-between">
          <h2 className="font-semibold">Password</h2>
          <button className="px-4 py-2 rounded-full border border-gray-500 text-xs font-medium flex hover:shadow-md hover:bg-black hover:text-white duration-200 ease-in-out text-gray-500 items-center gap-x-1">
            Edit Password <BiEditAlt size={18} />
          </button>
        </div>
        {/*delete account */}
        <div className="rounded-2xl border p-3 md:p-4 bg-white flex items-center justify-between">
          <h2 className="font-semibold">Delete Account</h2>
          <button className="px-4 py-2 rounded-full border border-red-500 text-xs font-medium flex hover:shadow-md hover:bg-red-500 hover:text-white duration-200 ease-in-out text-red-500 items-center gap-x-1">
            Delete Account <VscTrash size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Page;
