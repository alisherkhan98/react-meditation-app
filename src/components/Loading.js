import React from "react";
import { Modal, Fade, Backdrop } from "@mui/material";
function Loading({open}) {
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            zIndex: 1101,
            backgroundImage: "linear-gradient(90deg, #f1afab,#fdd58f)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0"
            y="0"
            version="1.1"
            viewBox="0 0 55 100"
            xmlSpace="preserve"
            width="20vw"
            style={{
              maxWidth: "200px",
            }}
          >
            <circle cx="6" cy="50" r="6" fill="#fff" opacity="0">
              <animate
                attributeName="opacity"
                begin="0.3"
                dur="1.5s"
                repeatCount="indefinite"
                values="0;1;0"
              ></animate>
            </circle>
            <circle cx="26" cy="50" r="6" fill="#fff" opacity="0">
              <animate
                attributeName="opacity"
                begin="0.4"
                dur="1.5s"
                repeatCount="indefinite"
                values="0;1;0"
              ></animate>
            </circle>
            <circle cx="46" cy="50" r="6" fill="#fff" opacity="0">
              <animate
                attributeName="opacity"
                begin="0.5"
                dur="1.5s"
                repeatCount="indefinite"
                values="0;1;0"
              ></animate>
            </circle>
          </svg>
        </div>
      </Fade>
    </Modal>
  );
}

export default Loading;
