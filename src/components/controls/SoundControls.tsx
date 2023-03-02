import { useRef, useState } from "react";
import { SVGIcon } from "../SVGIcon";
import { YouTubePlayer, YouTubePlayerRef } from "../YouTubePlayer";
import { Row } from "./Controls";
import { PlayPauseButton } from "./PlayPauseIcon";
import { Slider } from "./Slider";

export const SoundControls = () => {
  const [volume, setVolume] = useState(25);
  const player: React.Ref<YouTubePlayerRef> = useRef(null);

  const onPlayPause = (isPaused: boolean) => {
    if (isPaused) {
      player.current?.pauseVideo();
      return;
    }
    player.current?.playVideo();
  };

  const onChangeVolume = (vol: number) => {
    setVolume(vol);
    player.current?.setVolume(vol);
  };

  return (
    <>
      Sound
      <Row>
        <PlayPauseButton onChange={onPlayPause} />
        <SVGIcon iconType="volume" />
        <Slider sliderType="volume" value={volume} onChange={onChangeVolume} />
      </Row>
      <YouTubePlayer
        ref={player}
        initialVolume={25}
        videoEmbedURL="https://www.youtube.com/embed/0LwcvjNJTuM?start=288"
      />
    </>
  );
};
