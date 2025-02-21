function BlogFallback() {
  return (
    <ul className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-8 gap-x-6 ">
      {Array(8)
        .fill(null)
        .map((d, i) => (
          <BlogCard key={i} />
        ))}
    </ul>
  );
}

export default BlogFallback;

function BlogCard() {
  return (
    <li className="relative space-y-3 rounded-xl transition-all duration-200 before:absolute before:inset-0 before:translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/65 before:animate-shimmer overflow-hidden">
      {/*image */}
      <div className="h-48 rounded-xl bg-gray-300"></div>
      {/*other contents */}
      <div className="flex flex-col gap-3 w-full">
        <div className="flex gap-4">
          <div className="h-3 w-28 bg-gray-300 rounded-full"></div>
          <div className="h-3 w-28 bg-gray-300 rounded-full"></div>
        </div>
        <div className=" h-4 bg-gray-300 rounded-full"></div>
        <div className="h-4 bg-gray-300 rounded-full"></div>
        <div className="flex items-center gap-2">
          <div className="rounded-full w-6 h-6 md:w-8 md:h-8 bg-gray-300"></div>
          <div className="h-3 bg-gray-300 w-28 rounded-full"></div>
        </div>
      </div>
    </li>
  );
}
