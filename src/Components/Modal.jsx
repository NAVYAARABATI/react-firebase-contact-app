import React from "react";
import { createPortal } from "react-dom";
import { AiOutlineClose } from "react-icons/ai";

const Modal = ({ onClose, isOpen, children }) => {
  return createPortal(
    <>
      {isOpen && (
        <div className="fixed inset-0 z-40 grid place-items-center bg-black/20 backdrop-blur-sm px-4">
          <div className="relative z-50 w-full max-w-md rounded-lg bg-white p-4 shadow-lg">
            <div className="mb-2 flex justify-end">
              <AiOutlineClose
                onClick={onClose}
                className="cursor-pointer text-2xl transition hover:scale-110"
              />
            </div>

            {children}
          </div>
        </div>
      )}
    </>,
    document.getElementById("modal-root")
  );
};

export default Modal;