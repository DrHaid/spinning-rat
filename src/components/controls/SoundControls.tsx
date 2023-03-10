import styled from "@emotion/styled";
import { useRef, useState, Ref } from "react";
import { SoundPanel } from "../Panel";
import { Icon } from "../SVGIcon";
import { YouTubePlayer, YouTubePlayerRef } from "../YouTubePlayer";
import { PlayPauseButton } from "./PlayPauseIcon";
import { Slider } from "./Slider";

const FlexCenterContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const SoundControlsRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const SoundControls = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(25);
  const player: Ref<YouTubePlayerRef> = useRef(null);

  const onPlayPauseSwitch = () => {
    if (isPlaying) {
      player.current?.pauseVideo();
      return;
    }
    player.current?.playVideo();
  };

  const onChangeVolume = (vol: number) => {
    setVolume(vol);
    player.current?.setVolume(vol);
  };

  const onPlayStateChange = (isPlaying: boolean) => {
    setIsPlaying(isPlaying);
  };

  return (
    <SoundPanel>
      Sound
      <SoundControlsRow>
        <PlayPauseButton isPlaying={isPlaying} onClick={onPlayPauseSwitch} />
        <FlexCenterContainer>
          <FlexCenterContainer>
            <Icon iconType="volume" />
          </FlexCenterContainer>
          <Slider
            sliderType="volume"
            value={volume}
            onChange={onChangeVolume}
          />
        </FlexCenterContainer>
      </SoundControlsRow>
      <YouTubePlayer
        ref={player}
        onPlayStateChange={onPlayStateChange}
        width="270px"
        initialVolume={25}
        videoEmbedURL="https://www.youtube.com/embed/0LwcvjNJTuM?start=288"
      />
    </SoundPanel>
  );
};
