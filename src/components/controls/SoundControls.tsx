import styled from "@emotion/styled";
import { useRef, useState } from "react";
import { SoundPanel } from "../Panel";
import { SVGIcon } from "../SVGIcon";
import { YouTubePlayer, YouTubePlayerRef } from "../YouTubePlayer";
import { PlayPauseButton } from "./PlayPauseIcon";
import { Slider } from "./Slider";

const SoundSlider = styled.div`
  display: flex;
  flex-direction: row;
`;

const SoundControlsRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

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
    <SoundPanel>
      Sound
      <SoundControlsRow>
        <PlayPauseButton onChange={onPlayPause} />
        <SoundSlider>
          <SVGIcon iconType="volume" />
          <Slider
            sliderType="volume"
            value={volume}
            onChange={onChangeVolume}
          />
        </SoundSlider>
      </SoundControlsRow>
      <YouTubePlayer
        ref={player}
        width="270px"
        initialVolume={25}
        videoEmbedURL="https://www.youtube.com/embed/0LwcvjNJTuM?start=288"
      />
    </SoundPanel>
  );
};
