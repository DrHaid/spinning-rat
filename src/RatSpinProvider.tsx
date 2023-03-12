import { createContext, PropsWithChildren, useState } from "react";

export type RatSpinParams = {
  spinX: number;
  spinY: number;
  spinZ: number;
  speed: number;
  zoom: number;
};

type RatSpinContextProps = {
  spinParams: RatSpinParams;
  setSpinParams?: (spinParams: RatSpinParams) => void;
};

const RAT_SPIN_DEFAULTS = {
  spinX: 0,
  spinY: -0.4,
  spinZ: 0,
  speed: 0.175,
  zoom: 0.75,
};

export const RatSpinContext = createContext<RatSpinContextProps>({
  spinParams: RAT_SPIN_DEFAULTS,
});

export const RatSpinProvider = ({ children }: PropsWithChildren<unknown>) => {
  const [spinParams, setSpinParams] =
    useState<RatSpinParams>(RAT_SPIN_DEFAULTS);

  return (
    <RatSpinContext.Provider
      value={{
        spinParams,
        setSpinParams,
      }}
    >
      {children}
    </RatSpinContext.Provider>
  );
};
