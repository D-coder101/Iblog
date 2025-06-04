function DashboardCardSkeleton() {
  return (
    <div className="relative rounded-md transition-all duration-200 before:absolute before:inset-0 before:translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/65 before:animate-shimmer overflow-hidden grid grid-cols-[auto_1fr] gap-x-2.5 shadow-menu p-3 bg-white">
      {/*icon */}
      <div className="rounded bg-gray-300 w-[70px] h-[65px]"></div>

      {/* other contents */}
      <div className="flex flex-col justify-between  gap-y-2">
        <div className="flex justify-between">
          <div className="h-3 w-10 bg-gray-300 rounded-full"></div>
          <div className="bg-gray-300 h-3 w-8 rounded-full"></div>
        </div>
        <div className="bg-gray-300 h-4 w-16 rounded-full"></div>
        <div className="w-full h-2.5 bg-gray-300 rounded-full"></div>
      </div>
    </div>
  );
}

export default DashboardCardSkeleton;
