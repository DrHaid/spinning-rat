import { Icon } from "../SVGIcon";

type PlayPauseButtonProps = {
  isPlaying: boolean;
  onClick: () => void;
};

export const PlayPauseButton = ({
  isPlaying,
  onClick,
}: PlayPauseButtonProps) => (
  <Icon iconType={isPlaying ? "pause" : "play"} onClick={onClick} />
);
