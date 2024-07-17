"use client";

import AudioPlayer from "@/components/AudioPlayer/AudioPlayer";
import styles from "./page.module.css";
import AudioButton from "@/components/AudioButton/AudioButton";
import { useState } from "react";

const HomePage = () => {
  const [currentAudio, setCurrentAudio] = useState<HTMLAudioElement | null>(
    null
  );

  const handlePlay = (audio: HTMLAudioElement) => {
    if (currentAudio && currentAudio !== audio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }
    setCurrentAudio(audio);
    audio.play();
  };

  return (
    <>
      <main className={styles.main}>
        <h1 className={styles.mainTitle}>Classroom Effects</h1>

        <AudioPlayer box_title={"Silvio Santos"}>
          <AudioButton
            audio="/Silvio_Santos/Certa_Resposta"
            title="Certa Resposta!"
            onPlay={handlePlay}
          />
          <AudioButton
            audio="/Silvio_Santos/10_segundos"
            title="10s"
            onPlay={handlePlay}
          />
          <AudioButton
            audio="/Silvio_Santos/AIAIAI_UIUI"
            title="AiAiAi"
            onPlay={handlePlay}
          />
          <AudioButton
            audio="/Silvio_Santos/Show_do_Milhao_Tema"
            title="Show Do Milhão"
            onPlay={handlePlay}
          />
        </AudioPlayer>

        <AudioPlayer box_title={"Batidas"}>
          <AudioButton
            audio="toda_hora"
            title="Toda Hora"
            onPlay={handlePlay}
          />
        </AudioPlayer>

        <AudioPlayer box_title={"Globo"}>
          <AudioButton
            audio="/Globo/Globo_Rural"
            title="Globo Rural"
            onPlay={handlePlay}
          />
          <AudioButton
            audio="/Globo/Jornal_Nacional_Encerramento"
            title="Jornal Nacional"
            onPlay={handlePlay}
          />
          <AudioButton
            audio="/Globo/Formula_1_Tema"
            title="Fórmula 1"
            onPlay={handlePlay}
          />
        </AudioPlayer>
      </main>
      <footer>
        <a href="#"> Sobre </a>
        <p>©copyright 2024 - Daniel Mendes</p>
        <p>
          Made by{" "}
          <a href="https://github.com/DanielMendesSensei" target="_blank">
            Daniel Mendes
          </a>{" "}
          - PdA
        </p>
      </footer>
    </>
  );
};

export default HomePage;
