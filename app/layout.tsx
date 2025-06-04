// "use client";

import type { Metadata } from "next";
import "./globals.css";
import { outfitFont } from "@/utils/fonts";
import QueryProvider from "./providers";
import { Toaster } from "react-hot-toast";
// import { getSession } from "./_services/userServices";

// import { usePathname } from "next/navigation";

export const metadata: Metadata = {
  title: "Iblog",
  description: "Welcome to blog",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const pathname = usePathname();
  // const isAdminPage = pathname.startsWith("/admin");

  return (
    <html lang="en">
      <body className={`${outfitFont.variable}`}>
        {/* <Header /> */}
        {/*QueryProvider wraps children inside a suspense boundary */}
        <Toaster
          position="top-right"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 2000,
              style: {
                background: "#4caf50",
                color: "white",
              },
            },
            error: {
              duration: 2000,
              style: {
                background: "#ef4444",
                color: "white",
              },
            },
            style: {
              fontSize: "16px",
              lineClamp: 1,
              maxWidth: "90vw",
              padding: "16px",
            },
          }}
        />
        <QueryProvider>{children}</QueryProvider>
        {/* {!isAdminPage && <Footer />} */}
      </body>
    </html>
  );
}
