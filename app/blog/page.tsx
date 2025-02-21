import { Suspense } from "react";
import BlogList from "../_components/BlogList";
import Filter from "../_components/Filter";
import SortBy from "../_components/SortBy";
import BlogFallback from "../_components/BlogFallback";
// Record<string, string | string[] | undefined>
// URLSearchParams
interface PageProps {
  searchParams: Record<string, string | string[] | undefined>;
}

export default function Page({ searchParams }: PageProps) {
  //filter
  // const filter = searchParams.category ?? "all";
  const filter =
    (Array.isArray(searchParams.category)
      ? searchParams.category[0]
      : searchParams.category) ?? "all";

  //sortBy
  const sortBy =
    (Array.isArray(searchParams.sortBy)
      ? searchParams.sortBy[0]
      : searchParams.sortBy) ?? "new";

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
          <BlogList filter={filter} sortBy={sortBy} />
        </Suspense>
      </div>
    </section>
  );
}
