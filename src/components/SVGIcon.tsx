import styled from "@emotion/styled";
import { ReactComponent as PauseIcon } from "../assets/pause.svg";
import { ReactComponent as VolumeIcon } from "../assets/volume.svg";
import { ReactComponent as PlayIcon } from "../assets/play.svg";
import { THEME } from "../styling/theme";

type IconContainerProps = { cursorPointer: boolean };

const IconContainer = styled.div(({ cursorPointer }: IconContainerProps) => ({
  width: "2rem",
  cursor: cursorPointer ? "pointer" : "default",
}));

type IconType = "pause" | "play" | "volume";

const getIcon = (iconType: IconType) => {
  switch (iconType) {
    case "pause":
      return <PauseIcon fill={THEME.color.pink} />;
    case "play":
      return <PlayIcon fill={THEME.color.pink} />;
    case "volume":
      return <VolumeIcon fill={THEME.color.pink} />;
  }
};

type SVGIconProps = {
  iconType: IconType;
  onClick?: () => void;
};

export const SVGIcon = ({ iconType, onClick }: SVGIconProps) => (
  <IconContainer onClick={() => onClick?.()} cursorPointer={!!onClick}>
    {getIcon(iconType)}
  </IconContainer>
);
