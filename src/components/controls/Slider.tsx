import styled from "@emotion/styled";
import { THEME } from "../../styling/theme";

const StyledSlider = styled.input`
  -webkit-appearance: none;
  width: 100%;
  height: 8px;
  border-radius: 5px;
  background: ${THEME.color.brown};
  outline: none;
  margin: ${THEME.space.s} 0;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%; 
    background: ${THEME.color.pink};
    cursor: pointer;
  }

  &::-moz-range-thumb {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: ${THEME.color.pink};
    cursor: pointer;
  }
`;

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
