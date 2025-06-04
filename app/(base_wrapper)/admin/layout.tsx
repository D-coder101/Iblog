"use client";
import { useGlobalStore } from "@/store/zustand-store";
import AdminSideNav from "../../_components/admin/AdminSideNav";

interface pageProps {
  children: React.ReactNode;
}

function Layout({ children }: pageProps) {
  const { headerHeight } = useGlobalStore((state) => state);

  return (
    // <div className="grid grid-cols-[auto_1fr] mb-40 h-full">
    <div className="flex min-h-screen">
      <div
        className="sticky left-0 border-r shadow-lg"
        style={{
          height: `calc(100vh - ${headerHeight}px)`,
          top: `${headerHeight}px`,
        }}
      >
        {/* <div className="sticky top-[10vh] left-0 h-[90vh] border-r shadow-lg"> */}
        <AdminSideNav />
      </div>

      <div
        className="pt-6 px-8
       grow"
      >
        {children}
      </div>
    </div>
    // <div className="grid grid-cols-[auto_1fr] mb-40 h-full">
    //   {/* Sidebar should be fixed */}
    //   <div className="fixed h-screen">
    //     <AdminSideNav />
    //   </div>

    //   <div className="pt-6 px-8">{children}</div>
    // </div>
    // <div className="grid grid-cols-[auto_1fr] mb-40 h-full">
    //   <AdminSideNav />
    //   <div className="pt-6 px-8">{children}</div>
    // </div>
  );
}

export default Layout;
