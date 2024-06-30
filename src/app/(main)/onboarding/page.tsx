"use client";

import React, { useEffect } from "react";

import { useRouter, usePathname } from "next/navigation";
function Page() {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (pathname === "/onboarding") {
      router.replace("/dashboard");
    }
  }, [pathname]);

  return <div>Page</div>;
}

export default Page;
