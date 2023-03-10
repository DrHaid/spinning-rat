import styled from "@emotion/styled";
import { THEME } from "../styling/theme";

export const RatPanel = styled.div`
  display: flex;
  width: 500px;
  height: 500px;
  background-color: ${THEME.color.black};
  border-radius: ${THEME.space.m};
  border: ${THEME.border.xs};
  padding: ${THEME.space.s};
`;

export const SpinPanel = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 3;
  justify-content: center;
  border-radius: ${THEME.space.m};
  border: ${THEME.border.xs};
  padding: ${THEME.space.s};
  gap: ${THEME.space.s};
`;

export const SoundPanel = styled.div`
  display: flex;
  flex-shrink: 0;
  flex-grow: 0;
  border-radius: ${THEME.space.m};
  border: ${THEME.border.xs};
  padding: ${THEME.space.s};
  flex-direction: column;
  gap: ${THEME.space.s};
`;
