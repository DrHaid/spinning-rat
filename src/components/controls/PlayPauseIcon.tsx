import { useState } from "react";
import { SVGIcon } from "../SVGIcon";

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

  return (
    <SVGIcon iconType={isPaused ? "play" : "pause"} onClick={onIconClick} />
  );
};
