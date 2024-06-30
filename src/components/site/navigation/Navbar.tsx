"use client";
import { useState } from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeSwitcher } from "@/components/global/mode-toggle";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export const navItems = [
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
      <MobileNavbar />
    </>
  );
};

const Logo = () => (
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
);

const RightControls = () => (
  <div className="flex items-center gap-2">
    <ThemeSwitcher />
    <UserButton afterSignOutUrl="/sign-in" />
  </div>
);

function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="flex items-center justify-between w-full h-16 border-separate bg-background md:hidden"
      role="banner"
    >
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" aria-label="Open menu">
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent className="w-72 sm:w-[540px] pt-8" side="left">
          {navItems.map((item, index) => (
            <NavbarItem
              key={index}
              {...item}
              onClick={() => setIsOpen((prev) => !prev)}
            />
          ))}
        </SheetContent>
      </Sheet>
      <Logo />
      <RightControls />
    </nav>
  );
}

const DesktopNavbar = () => (
  <header className="hidden bg-background md:block" role="banner">
    <nav className="flex items-center justify-between gap-2">
      <div className="flex h-16 min-h-14 items-center gap-x-4">
        <Logo />
        <div className="flex h-full">
          {navItems.map((item, index) => (
            <NavbarItem key={index} {...item} />
          ))}
        </div>
      </div>
      <RightControls />
    </nav>
  </header>
);

function NavbarItem({
  label,
  link,
  onClick,
}: {
  label: string;
  link: string;
  onClick?: () => void;
}) {
  const pathname = usePathname();
  const isActive = pathname === link;
  return (
    <div className="relative flex items-center">
      <Link
        href={link}
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "w-full justify-start text-base text-muted-foreground hover:text-foreground",
          isActive && "text-foreground"
        )}
        onClick={() => {
          if (onClick) onClick();
        }}
      >
        {label}
      </Link>
      {isActive && <ActiveIndicator />}
    </div>
  );
}

const ActiveIndicator = () => (
  <div className="absolute -bottom-[2px] left-1/2 hidden h-[2px] w-4/5 -translate-x-1/2 rounded-xl bg-foreground md:block"></div>
);

export default Navbar;
