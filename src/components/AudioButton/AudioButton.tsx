"use client";

import { useRef } from "react";
import AudioButtonStyle from "./AudioButton.module.css";

interface AudioButtonProps {
  title: string;
  audio: string;
  onPlay: (audio: HTMLAudioElement) => void;
}

const AudioButton = ({ title, audio, onPlay }: AudioButtonProps) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  const playAudio = () => {
    if (audioRef.current) {
      onPlay(audioRef.current);
    }
  };

  return (
    <div>
      <button onClick={playAudio} className={AudioButtonStyle.button}>
        {title}
      </button>
      <audio
        ref={audioRef}
        src={`/audio/${audio}.mp3`}
        style={{ display: "none" }}
      />
    </div>
  );
};

export default AudioButton;
