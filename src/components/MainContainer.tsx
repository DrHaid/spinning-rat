import styled from "@emotion/styled";
import { PropsWithChildren } from "react";
import { RatSpinProvider } from "../RatSpinProvider";
import { THEME } from "../styling/theme";

const StretchContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: ${THEME.space.m};
  height: 100%;
`;

const CenterContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const MainContainer = ({ children }: PropsWithChildren<unknown>) => (
  <StretchContainer>
    <CenterContainer>
      <RatSpinProvider>{children}</RatSpinProvider>
    </CenterContainer>
  </StretchContainer>
);
