"use client";

import AudioPlayer from "@/components/AudioPlayer/AudioPlayer";
import AudioButton from "@/components/AudioButton/AudioButton";
import AudioControls from "@/components/AudioControls/AudioControls";
import styles from "./page.module.css";
import { useState } from "react";

const HomePage = () => {
  const [currentAudio, setCurrentAudio] = useState<HTMLAudioElement | null>(
    null
  );
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = (audio: HTMLAudioElement) => {
    if (currentAudio && currentAudio !== audio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }
    setCurrentAudio(audio);
    audio.play();
    setIsPlaying(true);
  };

  const handlePause = () => {
    if (currentAudio) {
      currentAudio.pause();
      setIsPlaying(false);
    }
  };

  const handleStop = () => {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
      setIsPlaying(false);
    }
  };

  const handleVolumeChange = (volume: number) => {
    if (currentAudio) {
      currentAudio.volume = volume;
    }
  };

  return (
    <>
      <main className={styles.main}>
        <h1 className={styles.mainTitle}>Classroom Effects</h1>
        {/* Controles de Áudio Universais */}
        <AudioControls
          isPlaying={isPlaying}
          onPlay={() => currentAudio?.play()}
          onPause={handlePause}
          onStop={handleStop}
          onVolumeChange={handleVolumeChange}
        />

        {/* Seções de Botões de Áudio */}
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
          <AudioButton
            audio="/Silvio_Santos/Roda_Roda_Tema"
            title="Roda Roda"
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
          <AudioButton
            audio="/Globo/Esporte_Espetacular"
            title="Esporte Espetacular"
            onPlay={handlePlay}
          />
          <AudioButton
            audio="/Globo/Sessao_Da_Tarde"
            title="Sessão Da Tarde"
            onPlay={handlePlay}
          />
          <AudioButton
            audio="/Globo/Plantao_globo"
            title="Plantão Globo"
            onPlay={handlePlay}
          />
        </AudioPlayer>

        <AudioPlayer box_title={"Efeitos Diversos"}>
          <AudioButton
            audio="/Efeitos_Diversos/Aplausos"
            title="Aplausos"
            onPlay={handlePlay}
          />
          <AudioButton
            audio="/Efeitos_Diversos/Rebobinando"
            title="Rebobinando"
            onPlay={handlePlay}
          />
          <AudioButton
            audio="/Efeitos_Diversos/Xiiiii"
            title="Xiiiii"
            onPlay={handlePlay}
          />
          <AudioButton
            audio="/Efeitos_Diversos/Uepa"
            title="Uêpa!"
            onPlay={handlePlay}
          />
          <AudioButton
            audio="/Efeitos_Diversos/Iiiiirra"
            title="Iiiiirra!"
            onPlay={handlePlay}
          />
          <AudioButton
            audio="/Efeitos_Diversos/Rapaaaaz"
            title="Rapaaaaz"
            onPlay={handlePlay}
          />
          <AudioButton
            audio="/Efeitos_Diversos/Pare"
            title="PARE!"
            onPlay={handlePlay}
          />
          <AudioButton
            audio="/Efeitos_Diversos/Ele_Gosta"
            title="Ele Gosta"
            onPlay={handlePlay}
          />
          <AudioButton
            audio="/Efeitos_Diversos/CAVALO"
            title="CAVALO"
            onPlay={handlePlay}
          />
          <AudioButton
            audio="/Efeitos_Diversos/Bob_Esponja_Fail"
            title="Fail"
            onPlay={handlePlay}
          />
          <AudioButton
            audio="/Efeitos_Diversos/BRUH"
            title="BRUH"
            onPlay={handlePlay}
          />
          <AudioButton
            audio="/Efeitos_Diversos/Goku_Drip"
            title="Goku Drip"
            onPlay={handlePlay}
          />
          <AudioButton
            audio="/Efeitos_Diversos/Miranha"
            title="Miranha"
            onPlay={handlePlay}
          />
          <AudioButton
            audio="/Efeitos_Diversos/oh-my-god"
            title="Ooooh my good"
            onPlay={handlePlay}
          />
          <AudioButton
            audio="/Efeitos_Diversos/sus"
            title="Sus"
            onPlay={handlePlay}
          />
          <AudioButton
            audio="/Efeitos_Diversos/creditos"
            title="Creditos Meme"
            onPlay={handlePlay}
          />
          <AudioButton
            audio="/Efeitos_Diversos/boom_thud"
            title="Boom Seco"
            onPlay={handlePlay}
          />
          <AudioButton
            audio="/Efeitos_Diversos/Wooow"
            title="Wooow Anime"
            onPlay={handlePlay}
          />
          <AudioButton
            audio="/Efeitos_Diversos/wide_putin"
            title="Wide Putin"
            onPlay={handlePlay}
          />
          <AudioButton
            audio="/Efeitos_Diversos/boom_rizz"
            title="Boom Rizz"
            onPlay={handlePlay}
          />
          <AudioButton
            audio="/Efeitos_Diversos/gta_sa"
            title="Mission Passed"
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
