"use client";

import Image from "next/image";
import { IconMenu2 } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";
import LangToggle from "./LangToggle";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

const navItems = [
  { name: "about", to: "about" },
  { name: "experience", to: "experience" },
  { name: "skills", to: "skills" },
  { name: "projects", to: "project" },
  { name: "contact", to: "contact" },
];

const SmallScreenNavbar = () => {
  const t = useTranslations("Navbar");

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className="p-0 m-0 border-0 bg-transparent lg:hidden"
          variant="ghost"
          size="icon"
        >
          <IconMenu2 size={24} stroke={1.4} className="text-foreground" />
        </Button>
      </DialogTrigger>
      <DialogContent className="backdrop-blur-lg bg-background/85 h-[90%]">
        <DialogHeader>
          <DialogTitle></DialogTitle>
          <DialogDescription className="p-5 flex flex-col gap-12 items-center justify-center my-auto">
            {navItems.map((nav) => (
              <Link
                key={nav.name}
                href={`#${nav.to}`}
                className={`py-2 px-4 rounded-full no-underline transition-all duration-300 ease-in-out text-foreground hover:opacity-40 text-2xl`}
              >
                {t(nav.name)}
              </Link>
            ))}
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default function NavBar() {
  const t = useTranslations("Navbar");

  return (
    <>
      {/* Navbar */}
      <nav className="w-full py-2 fixed top-0 z-30 transition-colors duration-300 ease-in-out backdrop-blur-md bg-background/60">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex justify-between items-center gap-2">
            {/* Mobile Menu Button */}
            <SmallScreenNavbar />
            <Link
              href="#"
              className="no-underline text-lg font-semibold text-primary dark:text-white"
            >
              {t("name")}
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex no-underline p-0 m-0 gap-10">
            {navItems.map((nav) => (
              <Link
                key={nav.name}
                href={`#${nav.to}`}
                className={`py-2 px-4 rounded-full no-underline transition-all duration-300 ease-in-out text-foreground`}
              >
                {t(nav.name)}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {/* GitHub */}
            <a
              href="https://github.com/Tukie"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/github.png"
                alt="github"
                width={24}
                height={24}
                className="bg-white rounded-full"
              />
            </a>
            <LangToggle />
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </>
  );
}
