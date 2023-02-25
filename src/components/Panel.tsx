import styled from "@emotion/styled";
import { PropsWithChildren } from "react";
import { THEME } from "../styling/theme";

const PanelContainer = styled.div`
    border-radius: ${THEME.space.m};
    border: ${THEME.border.xs};
    width: 100%;
`;

export const Panel = ({ children }: PropsWithChildren<unknown>) => (
  <PanelContainer>{children}</PanelContainer>
);
