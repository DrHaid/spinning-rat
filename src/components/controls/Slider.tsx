import styled from "@emotion/styled";

const StyledSlider = styled.input``;

type SliderProps = {
  value: number;
  sliderType?: "multiplier" | "volume";
  onChange: (value: number) => void;
};

const SLIDER_SETTINGS = {
  multiplier: {
    min: -100,
    max: 100,
    mult: 100,
  },
  volume: {
    min: 0,
    max: 100,
    mult: 1,
  },
};

export const Slider = ({
  value,
  sliderType = "multiplier",
  onChange,
}: SliderProps) => {
  const sliderSettings = SLIDER_SETTINGS[sliderType];

  const sliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number(event.target.value);
    onChange(val / sliderSettings.mult);
  };

  return (
    <StyledSlider
      min={sliderSettings.min}
      max={sliderSettings.max}
      value={value * sliderSettings.mult}
      onChange={sliderChange}
      type="range"
    />
  );
};
