"use client";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const navitems = [
  {
    label: "Dashboard",
    link: "/dashboard",
  },
  {
    label: "Transactions",
    link: "/transactions",
  },
  {
    label: "Manage",
    link: "/manage",
  },
];

const Navbar = () => {
  return (
    <>
      <DesktopNavbar />
    </>
  );
};

function DesktopNavbar() {
  return (
    <nav className="hidden border-separate border-b bg-background md:block">
      <nav className="container flex items-center justify-between px-8">
        <div className="flex h-20 min-h-14 items-center gap-x-4">
          <div className="overflow-hidden h-24 w-24 flex justify-center items-center">
            <Image
              src={"/xpense-logo.svg"}
              alt="Xpense Logo"
              className="object-cover h-full w-full"
              width={500}
              height={100}
            />
          </div>
          <div className="flex h-full">
            {navitems.map((item, index) => (
              <NavbarItem key={index} {...item} />
            ))}
          </div>
        </div>
      </nav>
    </nav>
  );
}

function NavbarItem({ label, link }: { label: string; link: string }) {
  const pathname = usePathname();
  const isActive = pathname === link;
  return (
    <div className="relative flex items-center">
      <Link
        href={link}
        className={cn(
          buttonVariants({
            variant: "ghost",
          }),
          "w-full justify-start text-lg text-muted-foreground hover:text-foreground",
          isActive && "text-foreground"
        )}
      >
        {label}
      </Link>
    </div>
  );
}

export default Navbar;
