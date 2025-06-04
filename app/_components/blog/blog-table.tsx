"use client";
import { StaticImageData } from "next/image";
import BlogTableRow from "./blog-table-row";
import Table from "../ui/Table";
import Avatar from "@/public/Avatar2.png";
import Menus from "../ui/Menus";
import { useSearchParams } from "next/navigation";

interface Blog {
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

const blogs: Blog[] = [
  {
    id: 1,
    title: "A Guide to AI Advancements",
    description: "Exploring the rapid growth of artificial intelligence...",
    author: "Sophia Reed",
    avatar: Avatar,
    createdAt: "2025-02-20T14:16:02.172Z",
  },
  {
    id: 2,
    title: "Mastering Next.js for Scalable Web Apps",
    description: "Next.js provides powerful features...",
    author: "Daniel Carter",
    createdAt: "2024-10-15T14:16:02.172Z",
  },
  {
    id: 3,
    title: "Cybersecurity Threats in 2025",
    description: "The latest cybersecurity risks and how to stay safe...",
    author: "Michael Lee",
    avatar: Avatar,
    createdAt: "2025-02-24T14:16:02.172Z",
  },
  {
    id: 4,
    title: "Understanding Cloud Computing",
    description: "Cloud services have revolutionized storage and processing...",
    author: "Emma Johnson",
    createdAt: "2023-05-10T14:16:02.172Z",
  },
  {
    id: 5,
    title: "The Evolution of JavaScript Frameworks",
    description: "From jQuery to modern React, Vue, and Svelte...",
    author: "Chris Thompson",
    createdAt: "2022-10-18T14:16:02.172Z",
    avatar: Avatar,
  },
  {
    id: 6,
    title: "The Future of Quantum Computing",
    description: "How quantum computing will change technology...",
    author: "Alice Morgan",
    createdAt: "2026-04-01T14:16:02.172Z",
  },
  {
    id: 7,
    title: "Ethical AI: Balancing Innovation and Responsibility",
    description: "How AI can be developed ethically...",
    author: "James Wilson",
    createdAt: "2023-12-05T14:16:02.172Z",
  },
  {
    id: 8,
    title: "Blockchain Beyond Cryptocurrency",
    description: "How blockchain is transforming industries...",
    author: "Natalie Brooks",
    createdAt: "2024-08-22T14:16:02.172Z",
  },
  {
    id: 9,
    title: "5G Networks: Revolutionizing Connectivity",
    description: "The impact of 5G on global communication...",
    author: "Tom Harris",
    createdAt: "2024-06-30T14:16:02.172Z",
    avatar: Avatar,
  },
  {
    id: 10,
    title: "Green Computing: Sustainable IT Solutions",
    description: "How IT can reduce its environmental impact...",
    author: "Olivia Martin",
    createdAt: "2025-01-10T14:16:02.172Z",
  },
];

function BlogTable({ searchQuery }: { searchQuery: string }) {
  const searchParams = useSearchParams();
  const sortBy = searchParams.get("sortBy") || "startDate-desc";

  const filteredBlogs = blogs.filter(
    (blog) =>
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.author?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedBlogs = [...filteredBlogs].sort((a, b) => {
    const dateA = a.createdAt ? new Date(a.createdAt).getTime() : 0;
    const dateB = b.createdAt ? new Date(b.createdAt).getTime() : 0;

    if (sortBy === "startDate-desc") {
      return dateB - dateA; // Newest first
    }
    if (sortBy === "startDate-asc") {
      return dateA - dateB; // Oldest first
    }
    if (sortBy === "name-asc") {
      return a.title.localeCompare(b.title);
    }
    if (sortBy === "name-des") {
      return b.title.localeCompare(a.title);
    }
    return 0;
  });

  //   20% 45% 20% 15%
  //18% 40% 18% 15%
  return (
    <Menus>
      <Table columns="1.8fr 3fr 1.8fr 1.4fr">
        <Table.Header>
          <div>Author Name</div>
          <div>Blog Title</div>
          <div>Date</div>
          <div className="text-center">Action</div>
          {/* <div></div> */}
        </Table.Header>

        <Table.Body
          query={searchQuery}
          data={sortedBlogs}
          render={(blog) => <BlogTableRow key={blog.id} blog={blog} />}
        />

        {/* <Table.Footer>
      <Pagination count={count} />
      </Table.Footer> */}
      </Table>
    </Menus>
  );
}

export default BlogTable;
