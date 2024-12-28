"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ModeToggle } from "../ui/dark-mode-toggle";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { navbarSlideup } from "../animations/navbar-slideup";

const Navbar = () => {
  const [hidden, setHidden] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.nav
      className="z-50 flex items-center justify-between sticky top-0 border-b px-4 bg-background sm:px-8 md:px-16 lg:px-24"
      variants={navbarSlideup}
      animate={hidden ? "initial" : "animate"}
    >
      <Link className="font-bold text-xl" href={"/"}>
        Sahaj Yatra
      </Link>
      <div className="flex items-center space-x-6">
        <SignInDropdown />
        <LogInDropdown />
        <ModeToggle />
      </div>
    </motion.nav>
  );
};

const SignInDropdown = () => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="py-4 relative cursor-pointer"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <h1>Sign in </h1>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="absolute top-full right-0 bg-background border shadow-md rounded-md"
        >
          <div className="flex flex-col p-4 space-y-2 w-40">
            <Link
              className="hover:bg-accent hover:text-accent-foreground p-1 rounded-sm"
              href="/user/register"
            >
              As User
            </Link>
            <Link
              className="hover:bg-accent hover:text-accent-foreground p-1 rounded-sm"
              href="/busowner/register"
            >
              As Busowner
            </Link>
          </div>
        </motion.div>
      )}
    </div>
  );
};

const LogInDropdown = () => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="py-4 relative cursor-pointer"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <h1>Login in </h1>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="absolute top-full right-0 bg-background border shadow-md rounded-md"
        >
          <div className="flex flex-col p-4 space-y-2 w-40">
            <Link
              className="hover:bg-accent hover:text-accent-foreground p-1 rounded-sm"
              href="/"
            >
              As User
            </Link>
            <Link
              className="hover:bg-accent hover:text-accent-foreground p-1 rounded-sm"
              href="/"
            >
              As Busowner
            </Link>
            <Link
              className="hover:bg-accent hover:text-accent-foreground p-1 rounded-sm"
              href="/"
            >
              As Superadmin
            </Link>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
