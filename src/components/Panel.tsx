import styled from "@emotion/styled";
import { THEME } from "../styling/theme";

export const RatPanel = styled.div`
  display: flex;
  aspect-ratio: 1/1;
  background-color: ${THEME.color.black};
  border-radius: ${THEME.space.m};
  border: ${THEME.border.xs};
  padding: ${THEME.space.s};
`;

export const SpinPanel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  border-radius: ${THEME.space.m};
  border: ${THEME.border.xs};
  padding: ${THEME.space.s};
  gap: ${THEME.space.s};
`;

export const SoundPanel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  border-radius: ${THEME.space.m};
  border: ${THEME.border.xs};
  padding: ${THEME.space.s};
  gap: ${THEME.space.s};
`;

export const PanelLabel = styled.div`
  display: flex;
  align-items: start;
  width: 100%;
`;
