"use client";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeSwitcher } from "@/components/global/mode-toggle";

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
    <nav className="hidden  bg-background md:block">
      <nav className=" flex items-center justify-between gap-2">
        <div className="flex h-16 min-h-14 items-center gap-x-4">
          <Link
            href="/"
            className="overflow-hidden h-24 w-24 flex justify-center items-center"
          >
            <Image
              src={"/xpense-logo.svg"}
              alt="Xpense Logo"
              className="object-cover h-full w-full"
              width={500}
              height={100}
            />
          </Link>
          <div className="flex h-full">
            {navitems.map((item, index) => (
              <NavbarItem key={index} {...item} />
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <ThemeSwitcher />
          <UserButton afterSignOutUrl="/sign-in" />
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
          "w-full justify-start text-base text-muted-foreground hover:text-foreground",
          isActive && "text-foreground "
        )}
      >
        {label}
      </Link>
      {isActive && (
        <div className="absolute -bottom-[2px] left-1/2 hidden h-[2px] w-4/5 -translate-x-1/2 rounded-xl bg-foreground md:block"></div>
      )}
    </div>
  );
}

export default Navbar;
