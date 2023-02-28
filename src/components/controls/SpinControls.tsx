import { useState } from "react";
import { Slider } from "./Slider"

export const SpinControls = () => {
  const [spinX, setSpinX] = useState(0);
  const [spinY, setSpinY] = useState(0);
  const [spinZ, setSpinZ] = useState(0);
  const [speed, setSpeed] = useState(0);
  const [zoom, setZoom] = useState(0);

  return (
    <>
      Spin
      <Slider value={spinX} onChange={setSpinX} />
      <Slider value={spinY} onChange={setSpinY} />
      <Slider value={spinZ} onChange={setSpinZ} />
      Speed
      <Slider value={speed} onChange={setSpeed} />
      Zoom
      <Slider value={zoom} onChange={setZoom} />
    </>
  )
}