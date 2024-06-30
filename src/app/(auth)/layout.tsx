import Image from "next/image";
import logo from "@/assets/xpense-logo.svg";
import { Wallet } from "lucide-react";
function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center">
      {/* Logo */}
      <div className="flex justify-center items-center ">
        <Wallet size={30} className="text-blue-300" />
        <Image src={logo} alt="Xpense Logo" width={200} />
      </div>
      <div className="">{children}</div>
    </div>
  );
}

export default layout;
