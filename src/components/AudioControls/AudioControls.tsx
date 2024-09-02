"use client";

import React from "react";
import Audio_Controls from "./AudioControls.module.css";
import Icon from "../Icon";

interface AudioControlsProps {
  isPlaying: boolean;
  onPlay: () => void;
  onPause: () => void;
  onStop: () => void;
  onVolumeChange: (volume: number) => void;
}

const AudioControls: React.FC<AudioControlsProps> = ({
  isPlaying,
  onPlay,
  onPause,
  onStop,
  onVolumeChange,
}) => {
  return (
    <section className={Audio_Controls.AudioControls}>
      <button onClick={isPlaying ? onPause : onPlay}>
        {isPlaying ? (
          <Icon name="bx bx-pause" size="50px" />
        ) : (
          <Icon name="bx bx-play" size="50px" />
        )}
      </button>
      <button onClick={onStop}>
        <Icon name="bx bx-stop" size="50px" />
      </button>
      <Icon name="bx bx-volume-full" size="40px" color="#f1f1f1" />

      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        onChange={(e) => onVolumeChange(Number(e.target.value))}
        defaultValue="1"
      />
    </section>
  );
};

export default AudioControls;
