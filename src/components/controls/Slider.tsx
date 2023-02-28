import styled from "@emotion/styled";

const StyledSlider = styled.input`
`;

type SliderProps = {
  value: number;
  onChange: (value: number) => void;
}

export const Slider = ({ value, onChange }: SliderProps) => {
  const sliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number(event.target.value)
    onChange(val / 100);
  }

  return (
    <StyledSlider min={-100} max={100} value={value * 100} onChange={sliderChange} type="range"/>
  )
}