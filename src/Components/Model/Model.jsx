"use client";
import { useRef, useState } from "react";
import WeddingDate from "../FirstSection/Components/WeddingDate";
import styles from "../FirstSection/Components/WeddingDate.module.css"; // Import the CSS module

function Model({ Label }) {
  const audioRef = useRef(null);
  const [open, setOpen] = useState(true);
  const [newOpen, setNewOpen] = useState(false);

  const handlePlay = () => {
    if (audioRef.current) {
      audioRef.current
        .play()
        .then(() => {
          console.log("Song is playing");
          handleClick();
        })
        .catch((error) => {
          console.error("Manual play failed:", error);
        });
    }
  };

  const handleClick = () => {
    setOpen(false);
    setNewOpen(true);
  };

  return (
    <>
      <audio ref={audioRef} src="/Audio/Perfect.mp3" loop />
      <div
        className={`fixed z-50 p-4 h-full w-full bg-[#ffffff] flex items-center justify-center ${
          open ? "" : styles.fadeOut
        }`}
      >
        <div className="bg-white p-7 rounded-xl border-2">
          <div className="flex justify-center shrink-0 items-center">
            <div
              className="flex"
              style={{
                fontFamily: "var(--font-personal-logo-short)",
                fontSize: "40px",
              }}
            >
              V
              <img
                alt="Your Company"
                src="/wedding.png"
                className="h-11 w-auto"
              />
              K
            </div>
          </div>
          <div
            style={{
              fontFamily: "var(--font-welcome-global)",
            }}
          >
            in this wedding vibe can you hear the love song?
          </div>
          <div className="flex justify-center mt-4 gap-5">
            <button
              className="px-3 py-1 bg-slate-400 rounded-lg text-md"
              style={{
                fontFamily: "var(--font-welcome-global)",
              }}
              onClick={handlePlay}
            >
              Yes
            </button>
            <button
              className="px-3 py-1 bg-slate-400 rounded-lg text-md"
              style={{
                fontFamily: "var(--font-welcome-global)",
              }}
              onClick={() => handleClick()}
            >
              No
            </button>
          </div>
        </div>
      </div>
      {newOpen ? <WeddingDate /> : null}
    </>
  );
}

export default Model;
