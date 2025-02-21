import AdminSideNav from "../_components/AdminSideNav";

interface pageProps {
  children: React.ReactNode;
}

function Layout({ children }: pageProps) {
  return (
    <div className="grid grid-cols-[20%_auto] mb-40 h-full">
      <AdminSideNav />
      <div className="pt-6 pl-8">{children}</div>
    </div>
  );
}

export default Layout;
