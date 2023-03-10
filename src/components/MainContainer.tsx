import styled from "@emotion/styled";
import { PropsWithChildren } from "react";
import { RatSpinProvider } from "../RatSpinProvider";

const StretchContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const CenterContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 50rem;
  margin-top: 5vh;
`;

export const MainContainer = ({ children }: PropsWithChildren<unknown>) => (
  <StretchContainer>
    <CenterContainer>
      <RatSpinProvider>{children}</RatSpinProvider>
    </CenterContainer>
  </StretchContainer>
);
