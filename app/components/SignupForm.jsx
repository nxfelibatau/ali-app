"use client";
import React, { useState, useCallback } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "./lib/utils";
import { IconBrandGithub } from "@tabler/icons-react";
import emailjs from "emailjs-com";

const translations = {
  en: {
    welcome: "Welcome to my portfolio",
    firstName: "First name",
    lastName: "Last name",
    email: "Email",
    projectRequest: "Project request",
    firstNamePlaceholder: "Ali",
    lastNamePlaceholder: "Gh",
    emailPlaceholder: "example@gmail.com",
    projectPlaceholder: "Describe your project...",
    signUp: "Send →",
    github: "GitHub",
    kaggle: "Kaggle",
  },
  fa: {
    welcome: "به پورتفولیوی من خوش آمدید",
    firstName: "نام",
    lastName: "نام خانوادگی",
    email: "ایمیل",
    projectRequest: "درخواست پروژه",
    firstNamePlaceholder: "علی",
    lastNamePlaceholder: "غریب پور",
    emailPlaceholder: "example@gmail.com",
    projectPlaceholder: "پروژه خود را توضیح دهید...",
    signUp: "ارسال→",
    github: "Github",
    kaggle: "kaggle",
  },
};

export default function SignupFormDemo({ lang = "en" }) {
  const t = translations[lang] || translations.en;

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    projectRequest: "",
  });

  const handleChange = useCallback((e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      const templateParams = {
        to_email: "yashooshmand@gmail.com",
        from_email: formData.email,
        first_name: formData.firstName,
        last_name: formData.lastName,
        project_request: formData.projectRequest,
      };

      emailjs
        .send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
          templateParams,
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
        )
        .then(() => alert("Email sent successfully!"))
        .catch((error) => alert("Error sending email: " + error.text));
    },
    [formData]
  );

  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        {t.welcome}
      </h2>
      <form className="my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname">{t.firstName}</Label>
            <Input
              id="firstname"
              name="firstName"
              placeholder={t.firstNamePlaceholder}
              type="text"
              onChange={handleChange}
              required
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">{t.lastName}</Label>
            <Input
              id="lastname"
              name="lastName"
              placeholder={t.lastNamePlaceholder}
              type="text"
              onChange={handleChange}
              required
            />
          </LabelInputContainer>
        </div>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">{t.email}</Label>
          <Input
            id="email"
            name="email"
            placeholder={t.emailPlaceholder}
            type="email"
            onChange={handleChange}
            required
          />
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="projectRequest">{t.projectRequest}</Label>
          <textarea
            id="projectRequest"
            name="projectRequest"
            placeholder={t.projectPlaceholder}
            className="w-full p-2 border rounded-md dark:bg-zinc-900 dark:text-white"
            onChange={handleChange}
            required
          />
        </LabelInputContainer>

        <button
          className="bg-gradient-to-br from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block w-full text-white rounded-md h-10 font-medium"
          type="submit"
        >
          {t.signUp}
        </button>

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-2 h-[1px] w-full" />

        <div className="flex flex-col space-y-4">
          <a
            href="https://github.com/sawdi777"
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900"
          >
            <IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
              {t.github}
            </span>
          </a>

          <a
            href="https://www.kaggle.com/sawdi777"
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900"
          >
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
              {t.kaggle}
            </span>
          </a>
        </div>
      </form>
    </div>
  );
}

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
