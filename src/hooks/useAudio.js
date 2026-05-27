import { useState, useRef, useEffect } from 'react';

/**
 * Hook para control de audio con manejo de estados y políticas de navegador.
 */
export const useAudio = (url) => {
  const audio = useRef(new Audio(url));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.current.play().catch(() => setPlaying(false)) : audio.current.pause();
  }, [playing]);

  useEffect(() => {
    const currentAudio = audio.current;
    currentAudio.loop = true;
    currentAudio.addEventListener('ended', () => setPlaying(false));
    return () => {
      currentAudio.removeEventListener('ended', () => setPlaying(false));
      currentAudio.pause();
    };
  }, []);

  return [playing, toggle];
};
