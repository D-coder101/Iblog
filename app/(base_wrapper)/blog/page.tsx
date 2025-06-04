import { Suspense } from "react";
import BlogList from "@/app/_components/blog/blog-list";
import Filter from "@/app/_components/ui/Filter";
import SortBy from "@/app/_components/ui/SortBy";
import BlogFallback from "@/app/_components/blog/blog-fallback";
// Record<string, string | string[] | undefined>
// URLSearchParams
interface PageProps {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

export default async function Page({ searchParams }: PageProps) {
  //filter
  const { category, sortBy } = await searchParams; // const filter = searchParams.category ?? "all";
  const filter = (Array.isArray(category) ? category[0] : category) ?? "all";

  //sortBy
  const sort = (Array.isArray(sortBy) ? sortBy[0] : sortBy) ?? "new";

  return (
    <section className="px-3 pt-10 pb-32">
      <div className="w-full md:max-w-[1350px] mx-auto flex flex-col gap-3">
        <h2 className="md:text-2xl lg:text-3xl font-semibold">Blog</h2>
        <p className="text-lg">
          Here, we share travel tips, destination guides, and stories that
          inspire your next adventure.
        </p>
        <div className="flex justify-between mb-5 items-center">
          {/* filters */}
          <Filter />
          {/*sort */}
          <SortBy
            options={[
              { value: "new", label: "Newest" },
              { value: "old", label: "Oldest" },
              { value: "popular", label: "Most Popular" },
              { value: "trending", label: "Trending" },
              { value: "comments", label: "Most Commented" },
              { value: "likes", label: "Most Liked" },
              { value: "name-asc", label: "Sort by name(A-Z)" },
              { value: "name-desc", label: "Sort by name(Z-A)" },
            ]}
          />
        </div>

        {/*Blogs */}
        <Suspense fallback={<BlogFallback />} key={`${filter}-${sortBy}}`}>
          <BlogList filter={filter} sortBy={sort} />
        </Suspense>
      </div>
    </section>
  );
}
