"use client";
import { IoMdCloudUpload } from "react-icons/io";
// import { FaCloudUploadAlt } from "react-icons/fa";
import { useState } from "react";
import Image from "next/image";

const categories = [
  { value: "education", label: "Education" },
  { value: "lifestyle", label: "LifeStyle" },
  { value: "politics", label: "Politics" },
  { value: "health", label: "Health" },
  { value: "technology", label: "Technology" },
];

// const authors = ["New Genesis", "D-coder101"];

function AddBlogForm() {
  const [thumbnail, setThumbnail] = useState<string | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setThumbnail(imageUrl);
    }
  };

  return (
    <div className="flex flex-col gap-y-4">
      {/*thumbnail */}

      <div className="space-y-2">
        <h3 className="font-medium text-gray-700 text-lg">Upload thumbnail</h3>
        <label
          htmlFor="image"
          className="block w-[180px] h-[100px] cursor-pointer overflow-hidden"
        >
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={handleImageUpload}
            hidden
          />
          {thumbnail ? (
            <span className="relative w-full h-full rounded block">
              <Image
                src={thumbnail}
                alt=""
                fill
                className="object-cover rounded"
              />
            </span>
          ) : (
            <span className="flex border justify-center rounded h-full w-full items-center flex-col text-slate-400 leading-none bg-gray-200">
              <IoMdCloudUpload size={40} />
              <p className="">Upload</p>
            </span>
          )}
        </label>
        {/*hidden file select */}
      </div>

      {/*blog title */}
      <div className="space-y-2">
        <h3 className="font-medium text-gray-700 text-lg">Blog title</h3>
        <input
          type="text"
          className="border rounded text-sm px-3 py-2.5 w-full focus:outline-none focus:ring-1 focus:ring-black focus:shadow duration-300 ease-in-out transition-shadow"
          placeholder="Enter blog title"
        />
      </div>
      <div className="space-y-2">
        <h3 className="font-medium text-gray-700 text-lg">Blog slug</h3>
        <input
          type="text"
          className="border rounded text-sm px-3 py-2.5 w-full focus:outline-none focus:ring-1 focus:ring-black focus:shadow duration-300 ease-in-out transition-shadow"
          placeholder="Enter blog slug"
        />
      </div>
      <div className="space-y-2">
        <h3 className="font-medium text-gray-700 text-lg">Blog Description</h3>
        <textarea
          rows={8}
          className="border rounded text-sm px-3 py-2.5 w-full focus:outline-none focus:ring-1 focus:ring-black focus:shadow duration-300 ease-in-out transition-shadow"
          placeholder="Write content here..."
        />
      </div>
      <div className="space-y-2">
        <h3 className="font-medium text-gray-700 text-lg">Blog Category</h3>
        <select className="border rounded text-sm px-3 py-2.5 w-32 focus:outline-none focus:ring-1 focus:ring-black focus:shadow duration-300 ease-in-out transition-shadow">
          {categories.map((option) => (
            <option value={option.value} key={option.value} className="py-2.5">
              {option.label}
            </option>
          ))}
        </select>
      </div>
      {/* <div className="space-y-2">
        <h3 className="font-medium text-gray-700 text-lg">Select Authors</h3>
        <select className="border rounded text-sm px-3 py-2.5 w-32 focus:outline-none focus:ring-1 focus:ring-black focus:shadow duration-300 ease-in-out transition-shadow">
          {authors.map((author) => (
            <option value={author} key={author} className="py-2.5">
              {author}
            </option>
          ))}
        </select>
      </div> */}
    </div>
  );
}

export default AddBlogForm;
