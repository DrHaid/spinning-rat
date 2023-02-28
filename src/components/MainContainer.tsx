import styled from "@emotion/styled";
import { PropsWithChildren } from "react";

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
`;

export const MainContainer = ({ children }: PropsWithChildren<unknown>) => (
  <StretchContainer>
    <CenterContainer>
      {children}
    </CenterContainer>
  </StretchContainer>
);
