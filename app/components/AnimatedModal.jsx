"use client";
import React from "react";
import { Modal, ModalBody, ModalContent, ModalTrigger } from "./ui/animated-modal";
import SignupForm from "./SignupForm";

export default function AnimatedModal({ buttonText = "Let's talk?", lang = "en" }) {
  return (
    <div className="flex items-center justify-center">
      <Modal>
        <ModalTrigger className=" text-white hover:bg-slate-950 hover:cursor-pointer flex justify-center group/modal-btn">
          <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
            {buttonText}
          </span>
          <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
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
