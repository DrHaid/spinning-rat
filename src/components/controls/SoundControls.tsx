import styled from "@emotion/styled";
import { useRef, useState, Ref } from "react";
import { PanelLabel, SoundPanel } from "../Panel";
import { Icon } from "../Icon";
import { YouTubePlayer, YouTubePlayerRef } from "../YouTubePlayer";
import { PlayPauseButton } from "./PlayPauseIcon";
import { Slider } from "./Slider";
import { THEME } from "../../styling/theme";

const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const FlexCenterContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

const SoundControlsRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  gap: ${THEME.space.s};
  width: 100%;
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
      <PanelLabel>Sound</PanelLabel>
      <SoundControlsRow>
        <IconContainer>
          <PlayPauseButton isPlaying={isPlaying} onClick={onPlayPauseSwitch} />
        </IconContainer>
        <FlexCenterContainer>
          <IconContainer>
            <Icon iconType="volume" />
          </IconContainer>
          <Slider
            min={0}
            max={100}
            step={1}
            value={volume}
            onChange={onChangeVolume}
          />
        </FlexCenterContainer>
      </SoundControlsRow>
      <YouTubePlayer
        ref={player}
        height="100%"
        width="100%"
        onPlayStateChange={onPlayStateChange}
        initialVolume={25}
        videoEmbedURL="https://www.youtube.com/embed/0LwcvjNJTuM?start=288"
      />
    </SoundPanel>
  );
};
