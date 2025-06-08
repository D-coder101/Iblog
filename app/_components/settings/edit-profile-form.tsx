"use client";

import { profileSchema } from "@/app/schemas/profile-schema";
import { EditProfileFormValues } from "@/utils/types";
import { Form, Formik, FormikHelpers } from "formik";
import CustomInput from "../ui/CustomInput";
import CountrySelect from "../ui/CountrySelect";
import CustomTextarea from "../ui/CustomTextarea";

function EditProfileForm() {
  const onSubmit = async (
    values: EditProfileFormValues,
    actions: FormikHelpers<EditProfileFormValues>
  ) => {
    console.log(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        fullname: "",
        username: "",
        // firstname: "",
        // lastname: "",
        email: "",
        phone: "",
        bio: "",
      }}
      validationSchema={profileSchema}
      onSubmit={onSubmit}
    >
      {/* {({ isSubmitting }) => ( */}
      <Form>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5">
          <CustomInput
            // textColor="text-black"
            label="Full Name"
            name="fullname"
            placeholder="Full Name"
            // labelClass="mb-1"
            // variant="plain"
            // border="border-slate-300"
          />
          <CustomInput
            // textColor="text-black"
            label="Email"
            name="email"
            type="email"
            placeholder="example@gmail.com"
            // labelClass="mb-1"
            // variant="plain"
            // border="border-slate-300"
          />
          <CustomInput
            // textColor="text-black"
            label="Username"
            name="username"
            placeholder="user10122"
            // labelClass="mb-1"
            // variant="plain"
            // border="border-slate-300"
          />
          <CountrySelect
            label="Phone Number"
            name="phone"
            labelClass="mb-1"
            defaultCountry="Nigeria"
          />
          <div className="col-span-1 md:col-span-2 ">
            <CustomTextarea
              name="bio"
              textColor="text-black"
              placeholder="Enter your bio..."
              label="Bio"
              labelClass="mb-1"
              // variant="plain"
            />
            {/* <textarea
              placeholder="Enter your bio..."
              className="h-full placeholder:text-sm placeholder:font-medium w-full focus:ring-0 rounded-md outline-0 focus:border-black border disabled:cursor-not-allowed bg-gray-100 focus:bg-transparent py-2 px-3"
            /> */}
          </div>
        </div>
        <button
          type="submit"
          className="flex w-full sm:w-fit sm:justify-self-end mt-1.5 bg-black rounded-md px-6 text-white items-center justify-center py-2.5 gap-x-2 hover:opacity-35 disabled:cursor-not-allowed text-sm duration-200 ease-in-out transition-all"
          // disabled={isSubmitting}
        >
          Save Changes
        </button>
      </Form>
    </Formik>
  );
}

export default EditProfileForm;
