"use client";
import React, { useRef, useState } from "react";

const BackgroundMusic = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (audioRef.current) {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((error) => {
          console.error("Manual play failed:", error);
        });
    }
  };

  return (
    <div>
      {/* Audio element */}
      <audio ref={audioRef} src="/Audio/Perfect.mp3" loop />
      {!isPlaying && (
        <button
          onClick={handlePlay}
          style={{ fontSize: "16px", padding: "10px 20px" }}
        >
          Enable Background Music
        </button>
      )}
    </div>
  );
};

export default BackgroundMusic;
