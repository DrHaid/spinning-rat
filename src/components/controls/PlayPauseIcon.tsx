import { Icon } from "../Icon";

interface PlayPauseButtonProps {
  isPlaying: boolean;
  onClick: () => void;
}

export const PlayPauseButton = ({
  isPlaying,
  onClick,
}: PlayPauseButtonProps) => (
  <Icon iconType={isPlaying ? "pause" : "play"} onClick={onClick} />
);
