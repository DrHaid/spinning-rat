import styled from "@emotion/styled";
import { PropsWithChildren } from "react";
import { THEME } from "../styling/theme";

const PanelContainer = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  gap: ${THEME.space.s};
  border-radius: ${THEME.space.m};
  border: ${THEME.border.xs};
  padding: ${THEME.space.s};
`;

export const Panel = ({ children }: PropsWithChildren<unknown>) => (
  <PanelContainer>{children}</PanelContainer>
);
