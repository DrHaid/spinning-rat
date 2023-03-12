import { useContext } from "react";
import { RatSpinContext, RatSpinParams } from "../../RatSpinProvider";
import { SpinPanel } from "../Panel";
import { Slider } from "./Slider";

export const SpinControls = () => {
  const { spinParams, setSpinParams } = useContext(RatSpinContext);

  const setParam = (val: number, key: keyof RatSpinParams) => {
    const params = { ...spinParams } as RatSpinParams;
    params[key] = val;
    setSpinParams?.(params);
  };

  return (
    <SpinPanel>
      Spin
      <Slider
        min={-1}
        max={1}
        step={0.02}
        value={spinParams.spinX}
        onChange={(val) => setParam(val, "spinX")}
      />
      <Slider
        min={-1}
        max={1}
        step={0.02}
        value={spinParams.spinY}
        onChange={(val) => setParam(val, "spinY")}
      />
      <Slider
        min={-1}
        max={1}
        step={0.02}
        value={spinParams.spinZ}
        onChange={(val) => setParam(val, "spinZ")}
      />
      Speed
      <Slider
        min={0}
        max={0.1}
        step={0.001}
        value={spinParams.speed}
        onChange={(val) => setParam(val, "speed")}
      />
      Zoom
      <Slider
        min={0.2}
        max={1.1}
        step={0.01}
        value={spinParams.zoom}
        onChange={(val) => setParam(val, "zoom")}
      />
    </SpinPanel>
  );
};
