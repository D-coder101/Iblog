import Header from "@/app/_components/layout/header";
import Footer from "@/app/_components/layout/footer";
import { getSession } from "../_services/userServices";
import { User } from "@/utils/types";
// import { getSession } from "../_services/userServices";

async function Layout({ children }: { children: React.ReactNode }) {
  const user: User | null = await getSession();

  return (
    <main className="grid grid-rows-[auto_1fr_auto] min-h-screen">
      <Header user={user} />
      {children}
      <Footer />
    </main>
  );
}

export default Layout;
