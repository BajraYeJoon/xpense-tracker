import Navbar from "@/site/navigation/Navbar";
import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative h-screen max-w-screen-2xl container">
      <Navbar />
      {children}
    </main>
  );
}

export default layout;
