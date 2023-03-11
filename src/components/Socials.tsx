import styled from "@emotion/styled";
import { THEME } from "../styling/theme";
import { Icon } from "./Icon";

export const SocialRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: ${THEME.space.m};
  margin-top: ${THEME.space.m};
`;

export const Socials = () => (
  <SocialRow>
    <Icon iconType="github" href="https://github.com/DrHaid/spinning-rat/" />
    <Icon
      iconType="kym"
      href="https://knowyourmeme.com/memes/horizontally-spinning-rat"
    />
  </SocialRow>
);
