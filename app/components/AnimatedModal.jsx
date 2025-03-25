"use client";
import React from "react";
import { Modal, ModalBody, ModalContent, ModalTrigger } from "./ui/animated-modal";
import SignupForm from "./SignupForm";

export default function AnimatedModal({ buttonText = "Let's talk?", lang = "en" }) {
  return (
    <div className="flex items-center justify-center">
      <Modal>
        <ModalTrigger className="relative border py-2 px-4 text-white hover:bg-gray-950 hover:cursor-pointer flex justify-center group/modal-btn overflow-hidden">
          <span className="group-hover/modal-btn:translate-x-40 text-sm md:text-base text-center transition-transform duration-500">
            {buttonText}
          </span>
          <div className="absolute inset-0 flex items-center justify-center transition-transform duration-500 text-white z-20 translate-x-[-100%] group-hover/modal-btn:translate-x-0">
            Ali GH <i className="bx bx-arrow-from-left"></i>
          </div>
        </ModalTrigger>
        <ModalBody>
          <ModalContent>
            <SignupForm lang={lang} />
          </ModalContent>
        </ModalBody>
      </Modal>
    </div>
  );
}