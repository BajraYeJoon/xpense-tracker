import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative h-screen w-auto flex-col items-center justify-center">
      {children}
    </div>
  );
}

export default layout;
