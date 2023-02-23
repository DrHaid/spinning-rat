import { PropsWithChildren } from "react"
import { css, Global, ThemeProvider as ThemeProviderEmotion  } from "@emotion/react"
import { theme } from "./theme";

const globalStyle = css`
  * {
    font-family: "Arial";
  }
  html {
    background: ${theme.colors.dark};
    height: 100%;
  }
  body {
    margin: 0;
    color: ${theme.colors.light};
  }
`;

export const ThemeProvider = ({
    children,
  }: PropsWithChildren<unknown>) => {
    return (
      <>
        <Global styles={globalStyle} />
        <ThemeProviderEmotion theme={theme}>
          {children}
        </ThemeProviderEmotion>
      </>
    )
  }