"use client";

import { MouseEvent, useCallback, useEffect, useState } from "react";
import { HiOutlineXMark } from "react-icons/hi2";
import Button from "../utils/Button";

interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel: string;
  disabled?: boolean;
  secondaryLabel?: string;
  secondaryAction?: () => void;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  footer,
  actionLabel,
  disabled,
  secondaryLabel,
  secondaryAction,
}) => {
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }

    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [onClose, disabled]);

  const handleSubmit = useCallback(() => {
    if (disabled) {
      return;
    }

    onSubmit();
  }, [onSubmit, disabled]);

  const handleSecondaryAction = useCallback(() => {
    if (disabled || !secondaryAction) {
      return;
    }

    secondaryAction();
  }, []);

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none bg-neutral-800/70">
        <div className="relative w-full md:w-4/6 lg:w-3/6 xl:w-2/5 my-6 mx-auto h-fullmd:h-auto">
          {/*content*/}
          <div
            className={`
              translate
              duration-300
              h-full
              ${showModal ? "translate-y-0" : "translate-y-full"}
              ${showModal ? "opacity-100" : "opacity-0"}
              `}
          >
            <div
              className="
                  translater
                  h-full
                  lg:h-auto
                  md:h-auto
                  rounded-lg
                  shadow-lg
                  relative
                  flex
                  flex-col
                  w-full
                  bg-white
                  outline-none
                  focus:outline-none"
            >
              {/*header*/}
              <div className="flex items-center p-6 rounded-t justify-center relative border-b">
                <button
                  onClick={handleClose}
                  className="p-1 border-0 hover:opacity-70 transition absolute left-9"
                >
                  <HiOutlineXMark size={20} />
                </button>
                <div className="text-lg font-semibold">{title}</div>
              </div>
              {/*body*/}
              <div className="relative p-6 flex-auto">{body}</div>
              {/*footer*/}
              <div className="flex flex-col space-y-2 px-6 pb-6">
                <div className="flex flex-row items-center space-x-4 w-full">
                  {secondaryAction && secondaryLabel && (
                    <Button
                      outline
                      label={secondaryLabel}
                      onClick={handleSecondaryAction}
                    />
                  )}
                  <Button label={actionLabel} onClick={handleSubmit} />
                </div>
                {footer}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
