import styled from "@emotion/styled";
import { ReactComponent as PauseIcon } from "../assets/pause.svg";
import { ReactComponent as VolumeIcon } from "../assets/volume.svg";
import { ReactComponent as PlayIcon } from "../assets/play.svg";
import { ReactComponent as GithubIcon } from "../assets/github.svg";
import { ReactComponent as FullscreenIcon } from "../assets/fullscreen.svg";
import KYMImage from "../assets/knowyourmeme.png";
import { THEME } from "../styling/theme";

type IconContainerProps = { cursorPointer: boolean };

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

type IconProps = {
  iconType: IconType;
  href?: string;
  onClick?: () => void;
};

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
