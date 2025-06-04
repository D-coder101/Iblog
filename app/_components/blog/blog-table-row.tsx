import Image, { StaticImageData } from "next/image";
import Table from "../ui/Table";
import { format } from "date-fns";
import { SlOptionsVertical } from "react-icons/sl";
import { IoPerson } from "react-icons/io5";
import { ImBin } from "react-icons/im";
import { MdModeEdit } from "react-icons/md";
import { FaRegEye } from "react-icons/fa";
import Menus from "../ui/Menus";

interface BlogProps {
  id: number;
  title: string;
  slug?: string;
  description: string;
  content?: string;
  createdAt?: string;
  publishedAt?: string;
  author?: string;
  avatar?: string | StaticImageData;
  category?: string;
}

interface Blog {
  blog: BlogProps;
}

function BlogTableRow({ blog }: Blog) {
  return (
    <Table.Row>
      <div className="flex items-center gap-x-2.5">
        {blog?.avatar ? (
          <Image
            src={blog.avatar}
            alt=""
            // fill
            height={30}
            width={30}
            className="rounded-full object-cover"
            placeholder="blur"
          />
        ) : (
          <span className="h-[30px] w-[30px] flex flex-col items-center justify-center rounded-full bg-gray-200">
            <IoPerson className="text-gray-700" size={18} />
          </span>
        )}
        <span className="font-semibold line-clamp-1">{blog?.author}</span>
      </div>
      <div className="font-medium text-slate-600 line-clamp-1">
        {blog?.title}
      </div>
      <div className="font-medium text-slate-600 line-clamp-1">
        {format(new Date(blog.createdAt!), "E MMM dd yyyy")}
      </div>

      <div className="flex justify-center">
        <Menus.Menu>
          <Menus.Toggle id={blog?.id}>
            <button className="grid place-items-center h-7 w-7  rounded-full hover:bg-gray-100 hover:shadow">
              <SlOptionsVertical />
            </button>
          </Menus.Toggle>
          <Menus.List id={blog?.id}>
            <Menus.Button icon={FaRegEye}>View</Menus.Button>
            <Menus.Button icon={MdModeEdit}>Edit</Menus.Button>
            <Menus.Button icon={ImBin}>Delete</Menus.Button>
            {/* <button className="grid place-items-center h-7 w-7  rounded-full hover:bg-gray-100 hover:shadow">
              <MdModeEdit />
            </button> */}
          </Menus.List>
        </Menus.Menu>
      </div>
    </Table.Row>
  );
}

export default BlogTableRow;
