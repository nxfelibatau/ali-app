"use client";
import React from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "./lib/utils";
import { IconBrandGithub } from "@tabler/icons-react";

const translations = {
  en: {
    welcome: "Welcome to my portfolio",
    firstName: "First name",
    lastName: "Last name",
    firstNamePlaceholder: "Ali",
    lastNamePlaceholder: "Gh",
    signUp: "Sign up →",
    github: "GitHub",
    kaggle: "Kaggle",
  },
  fa: {
    welcome: "به پورتفولیوی من خوش آمدید",
    firstName: "نام",
    lastName: "نام خانوادگی",
    firstNamePlaceholder: "علی",
    lastNamePlaceholder: "غریب پور",
    signUp: "ثبت نام →",
    github: "Github",
    kaggle: "kaggle",
  },
};

export default function SignupFormDemo({ lang = "en" }) {
  const t = translations[lang] || translations.en;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        {t.welcome}
      </h2>
      <form className="my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname">{t.firstName}</Label>
            <Input id="firstname" placeholder={t.firstNamePlaceholder} type="text" />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">{t.lastName}</Label>
            <Input id="lastname" placeholder={t.lastNamePlaceholder} type="text" />
          </LabelInputContainer>
        </div>

        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium"
          type="submit"
        >
          {t.signUp}
        </button>

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

        <div className="flex flex-col space-y-4">
          <button className="relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900">
            <IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">{t.github}</span>
          </button>
          <button className="relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900">
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">{t.kaggle}</span>
          </button>
        </div>
      </form>
    </div>
  );
}

const LabelInputContainer = ({ children, className }) => {
  return <div className={cn("flex flex-col space-y-2 w-full", className)}>{children}</div>;
};
