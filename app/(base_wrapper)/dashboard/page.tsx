import DashboardCard from "@/app/_components/dashboard/dashboard-card";
import DashboardCardSkeleton from "@/app/_components/dashboard/dashboard-card-skeleton";
import { FaBookReader } from "react-icons/fa";

import { FaFileAlt } from "react-icons/fa";
import { MdMarkUnreadChatAlt } from "react-icons/md";
import { FaHeart } from "react-icons/fa6";
import { Suspense } from "react";

function Page() {
  return (
    <section className="px-3 min-h-screen pt-2">
      <div className="md:max-w-5xl mx-auto w-full p-2">
        <h2 className="md:text-xl font-semibold">Dashboard</h2>
        {/*cards */}
        <div className="mt-2 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
          <Suspense fallback={<DashboardCardSkeleton />}>
            <DashboardCard
              type="post"
              icon={FaFileAlt}
              title="Posts"
              value={10}
              percentage={50}
            />
          </Suspense>
          <Suspense fallback={<DashboardCardSkeleton />}>
            <DashboardCard
              type="comment"
              icon={MdMarkUnreadChatAlt}
              title="Comments"
              value={5}
              percentage={30}
            />
          </Suspense>
          <Suspense fallback={<DashboardCardSkeleton />}>
            <DashboardCard
              type="read"
              icon={FaBookReader}
              title="Reads"
              value={100}
              percentage={80}
            />
          </Suspense>
          <Suspense fallback={<DashboardCardSkeleton />}>
            <DashboardCard
              type="likes"
              icon={FaHeart}
              title="likes"
              value={20}
              percentage={10}
            />
          </Suspense>
        </div>
        <div className="grid mt-5 grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 lg:gap-5">
          <div className="rounded-md p-3 h-40 shadow-menu">1</div>
          <div className="rounded-md p-3 shadow-menu h-40">2</div>
        </div>
        <div className="rounded-md p-3 shadow-menu mt-5 h-40">3</div>
      </div>
    </section>
  );
}

export default Page;
