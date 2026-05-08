"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar/navbar";
import Footer from "./Footer/footer";

interface ConditionalNavigationProps {
  children: React.ReactNode;
  navData?: any[];
  footerData?: any;
  settings?: any;
}

export function ConditionalNavigation({ 
  children, 
  navData, 
  footerData,
  settings
}: ConditionalNavigationProps) {
  const pathname = usePathname();
  const isStudio = pathname?.startsWith("/studio");

  if (isStudio) {
    return <>{children}</>;
  }

  return (
    <>
      <Navbar navData={navData} settings={settings} />
      <main className="flex-grow">
        {children}
      </main>
      <Footer data={footerData} />
    </>
  );
}
