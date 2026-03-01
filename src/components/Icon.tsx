import styled from "@emotion/styled";
import PauseIcon from "../assets/pause.svg?react";
import VolumeIcon from "../assets/volume.svg?react";
import PlayIcon from "../assets/play.svg?react";
import GithubIcon from "../assets/github.svg?react";
import FullscreenIcon from "../assets/fullscreen.svg?react";
import KYMImage from "../assets/knowyourmeme.png";
import { THEME } from "../styling/theme";

interface IconContainerProps {
  cursorPointer: boolean;
}

const IconContainer = styled.div(({ cursorPointer }: IconContainerProps) => ({
  width: "2rem",
  height: "2rem",
  cursor: cursorPointer ? "pointer" : "default",
}));

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  border: ${THEME.border.xxs};
`;

type IconType = "pause" | "play" | "volume" | "github" | "kym" | "fullscreen";

const getIcon = (iconType: IconType) => {
  switch (iconType) {
    case "pause":
      return <PauseIcon fill={THEME.color.pink} />;
    case "play":
      return <PlayIcon fill={THEME.color.pink} />;
    case "volume":
      return <VolumeIcon fill={THEME.color.pink} />;
    case "github":
      return <GithubIcon fill={THEME.color.pink} />;
    case "kym":
      return <StyledImg src={KYMImage} />;
    case "fullscreen":
      return <FullscreenIcon fill={THEME.color.pink} />;
  }
};

interface IconProps {
  iconType: IconType;
  href?: string;
  onClick?: () => void;
}

export const Icon = ({ iconType, href, onClick }: IconProps) => (
  <IconContainer onClick={() => onClick?.()} cursorPointer={!!onClick}>
    {href ? (
      <a href={href} target="_blank">
        {getIcon(iconType)}
      </a>
    ) : (
      getIcon(iconType)
    )}
  </IconContainer>
);
