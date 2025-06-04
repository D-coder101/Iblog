import BackBtn from "@/app/_components/general/back-btn";
import EditProfileForm from "@/app/_components/settings/edit-profile-form";

function Page() {
  return (
    <section className="px-3 min-h-screen pt-2 pb-40 bg-gray-100">
      <div className="md:max-w-4xl mx-auto w-full p-2 space-y-2">
        <BackBtn />

        {/*edit profile form */}
        <div className="rounded-2xl border p-4 md:p-6 bg-white space-y-3">
          <h2 className="md:text-xl font-semibold">Edit profile</h2>

          <EditProfileForm />
        </div>
      </div>
    </section>
  );
}

export default Page;
