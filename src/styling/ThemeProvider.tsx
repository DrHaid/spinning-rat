import { PropsWithChildren } from "react";
import { css, Global } from "@emotion/react";
import { THEME } from "./theme";

const globalStyle = css`
  * {
    font-family: "Arial";
  }
  html {
    background: ${THEME.color.dark};
    height: 100%;
  }
  body {
    margin: 0;
    color: ${THEME.color.light};
  }
`;

export const ThemeProvider = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <>
      <Global styles={globalStyle} />
      {children}
    </>
  );
};
