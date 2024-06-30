import Navbar from "@/components/site/navigation/Navbar";
import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative h-screen w-full">
      <Navbar />
      {children}
    </main>
  );
}

export default layout;
