import { useRef } from "react";
import { YouTubePlayer, YouTubePlayerRef } from "../YouTubePlayer";

export const SoundControls = () => {
  const player: React.Ref<YouTubePlayerRef> = useRef(null);

  return (
    <>
      Sound
      <YouTubePlayer
        ref={player}
        videoEmbedURL="https://www.youtube.com/embed/0LwcvjNJTuM?start=288"
      />
      <button onClick={() => player.current?.playVideo()}>play</button>
      <button onClick={() => player.current?.pauseVideo()}>pause</button>
      <button onClick={() => player.current?.setVolume(50)}>mute</button>
      {/* <iframe src="https://www.youtube.com/embed/0LwcvjNJTuM?start=288"/> */}
    </>
  );
};
