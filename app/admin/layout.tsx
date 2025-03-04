import AdminSideNav from "../_components/AdminSideNav";

interface pageProps {
  children: React.ReactNode;
}

function Layout({ children }: pageProps) {
  return (
    <div className="grid grid-cols-[auto_1fr] mb-40 h-full">
      <div className="sticky top-[10vh] left-0 h-[90vh] border-r shadow-lg">
        <AdminSideNav />
      </div>
      <div className="pt-6 px-8">{children}</div>
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
