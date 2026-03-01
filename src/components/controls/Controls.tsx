import styled from "@emotion/styled";
import { THEME } from "../../styling/theme";
import { SoundControls } from "./SoundControls";
import { SpinControls } from "./SpinControls";
import { useMediaQuery } from "../../styling/useMediaQuery";

interface ControlContainerProps {
  isColumn: boolean;
}

export const ControlsContainer = styled.div<ControlContainerProps>(
  ({ isColumn }) => ({
    display: "flex",
    flexDirection: isColumn ? "column" : "row",
    justifyContent: "space-between",
    gap: THEME.space.m,
    marginTop: THEME.space.m,
  }),
);

export const Controls = () => {
  const mobileView = useMediaQuery(
    `(max-width: ${THEME.responsive.maxMobileWidth})`,
  );
  return (
    <ControlsContainer isColumn={mobileView}>
      <SpinControls />
      <SoundControls />
    </ControlsContainer>
  );
};
