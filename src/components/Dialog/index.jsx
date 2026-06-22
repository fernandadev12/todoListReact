import "./dialog-style.css";
import { useRef, useEffect } from "react";
import { IconClose } from "../icons";

export function Dialog({ isOpen, onClose, children }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    // console.log("deveriamos mostrar o modal?", isOpen);
    if (isOpen) {
      openDialog();
    } else {
      closeDialog();
    }
  }, [isOpen]);
  // "Show the dialog" button opens the dialog modally
  const openDialog = () => {
    dialogRef.current.showModal();
  };

  // "Close" button closes the dialog
  const closeDialog = () => {
    dialogRef.current.close();
  };
  return (
    <>
      <dialog ref={dialogRef} className="dialog">
        <div className="btn-close-wrapper">
          <button autoFocus onClick={onClose} className="btn-close">
            <IconClose />
          </button>
        </div>
        {children}
      </dialog>
      {/* <button onClick={openDialog}>Show the dialog</button> */}
    </>
  );
}
