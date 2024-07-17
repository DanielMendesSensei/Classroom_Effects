"use client";
// Sim, estou fazendo propDrilling
import Audio_Player from "./AudioPlayer.module.css";

interface AudioPlayerProps {
  box_title: string;
  children: JSX.Element | JSX.Element[];
}
const AudioPlayer = ({ box_title, children }: AudioPlayerProps) => {
  return (
    <section className={Audio_Player.audioPlayer}>
      <h2>{box_title}</h2>
      <section className={Audio_Player.audios}>{children}</section>
    </section>
  );
};

export default AudioPlayer;
