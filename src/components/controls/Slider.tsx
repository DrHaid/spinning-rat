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
  min: number;
  max: number;
  step: number;
  onChange: (value: number) => void;
};

export const Slider = ({ value, min, max, step, onChange }: SliderProps) => {
  return (
    <StyledSlider
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={({ target }) => onChange(Number(target.value))}
      type="range"
    />
  );
};
