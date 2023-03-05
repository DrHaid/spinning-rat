import { useState } from "react";
import { Icon } from "../SVGIcon";

type PlayPauseButtonProps = {
  onChange: (isPaused: boolean) => void;
};

export const PlayPauseButton = ({ onChange }: PlayPauseButtonProps) => {
  const [isPaused, setIsPaused] = useState(true);

  const onIconClick = () => {
    const paused = !isPaused;
    setIsPaused(paused);
    onChange(paused);
  };

  return <Icon iconType={isPaused ? "play" : "pause"} onClick={onIconClick} />;
};
