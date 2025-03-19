"use client";
import { cn } from "../lib/utils";
import Link from "next/link";
import React, { useState, createContext, useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IconMenu2, IconX } from "@tabler/icons-react";

const SidebarContext = createContext(null);

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context)
    throw new Error("useSidebar must be used within a SidebarProvider");
  return context;
};

export const SidebarProvider = ({
  children,
  open: controlledOpen,
  setOpen: controlledSetOpen,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <SidebarContext.Provider
      value={{
        open: controlledOpen ?? open,
        setOpen: controlledSetOpen ?? setOpen,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

export const Sidebar = ({ children, open, setOpen }) => (
  <SidebarProvider open={open} setOpen={setOpen}>
    {children}
  </SidebarProvider>
);

export const SidebarBody = (props) => (
  <>
    <DesktopSidebar {...props} />
    <MobileSidebar {...props} />
  </>
);

const DesktopSidebar = ({ className, children }) => {
  const { open, setOpen } = useSidebar();

  return (
    <motion.div
      className={cn(
        "h-full px-4 py-4 hidden md:flex md:flex-col bg-neutral-100 dark:bg-neutral-800 flex-shrink-0",
        className
      )}
      animate={{ width: open ? "300px" : "60px" }}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {children}
    </motion.div>
  );
};

const MobileSidebar = ({ className, children }) => {
  const { open, setOpen } = useSidebar();

  return (
    <div
      className={cn(
        "h-10 px-4 py-4 flex md:hidden items-center justify-between bg-neutral-100 dark:bg-neutral-800 w-full"
      )}
    >
      <button
        onClick={() => setOpen(!open)}
        className="text-neutral-800 dark:text-neutral-200"
      >
        {open ? <IconX /> : <IconMenu2 />}
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={cn(
              "fixed inset-0 bg-white dark:bg-neutral-900 p-10 z-[100] flex flex-col",
              className
            )}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const SidebarLink = ({ link, className }) => {
  const { open } = useSidebar();
  return (
    <Link
      href={link.href}
      className={cn(
        "flex items-center py-2 space-x-2 text-sm group/sidebar",
        className
      )}
    >
      {link.icon}
      {open && (
        <span className="text-neutral-700 dark:text-neutral-200 group-hover/sidebar:translate-x-1 transition duration-150">
          {link.label}
        </span>
      )}
    </Link>
  );
};
