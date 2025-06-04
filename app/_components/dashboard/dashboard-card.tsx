// import { AiOutlineLineChart } from "react-icons/ai";
import { GrLineChart } from "react-icons/gr";

interface DashboardCardProps {
  type: string;
  title: string;
  icon: React.FC<{ className?: string; size?: number; color?: string }>;
  value: number | string;
  percentage: number;
}

async function DashboardCard({
  type,
  title,
  icon: Icon,
  value,
  percentage,
}: DashboardCardProps) {
  const randomTime = Math.floor(Math.random() * 3000) + 1000;
  await new Promise((resolve) => setTimeout(resolve, randomTime));

  return (
    <div className="rounded-md p-3 shadow-menu bg-white grid grid-cols-[auto_1fr] gap-x-2.5">
      <div
        className={`rounded ${
          type === "post"
            ? "bg-blue-100"
            : type === "comment"
            ? "bg-orange-100"
            : type === "likes"
            ? "bg-red-100"
            : "bg-green-100"
        } p-3 md:p-4 flex items-center justify-center`}
      >
        <Icon
          //   size={40}
          className={`text-2xl md:text-3xl lg:text-4xl ${
            type === "post"
              ? "text-blue-600"
              : type === "comment"
              ? "text-orange-600"
              : type === "likes"
              ? "text-red-600"
              : "text-green-600"
          }`}
        />
      </div>
      <div className="flex flex-col relative items-start justify-between ">
        <span
          className={`absolute hidden lg:flex right-0 text-[10px] rounded-full px-1.5 py-[2px] shadow font-medium items-center justify-center gap-x-[3px] ${
            type === "post"
              ? "text-blue-600 bg-blue-100"
              : type === "comment"
              ? "text-orange-600 bg-orange-100"
              : type === "likes"
              ? "text-red-600 bg-red-100"
              : "text-green-600 bg-green-100"
          }`}
        >
          <GrLineChart />
          10%
        </span>
        <p className="font-semibold flex text-xs sm:text-sm lg:text-base">
          {title}
        </p>
        <p className="font-semibold text-xl sm:text-2xl lg:text-3xl  font-mono">
          {value}
        </p>
        <div
          className={`rounded-full w-full h-2 relative ${
            type === "post"
              ? "bg-blue-100"
              : type === "comment"
              ? "bg-orange-100"
              : type === "likes"
              ? "bg-red-100"
              : "bg-green-100"
          }`}
        >
          <div
            className={`w-[${percentage}%] ${
              type === "post"
                ? "bg-blue-600"
                : type === "comment"
                ? "bg-orange-600"
                : type === "likes"
                ? "bg-red-600"
                : "bg-green-600"
            }  rounded-full h-2 absolute`}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default DashboardCard;
