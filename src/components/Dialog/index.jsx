import "./dialog-style.css";
import { useRef, useEffect } from "react";

export function Dialog({ isOpen, onClose }) {
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
      <dialog ref={dialogRef}>
        <button autoFocus onClick={onClose}>
          Close
        </button>
        <p>This modal dialog has a groovy backdrop!</p>
      </dialog>
      {/* <button onClick={openDialog}>Show the dialog</button> */}
    </>
  );
}
