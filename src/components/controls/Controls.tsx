import styled from "@emotion/styled"
import { THEME } from "../../styling/theme"
import { Panel } from "../Panel"
import { SoundControls } from "./SoundControls";
import { SpinControls } from "./SpinControls";

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: ${THEME.space.m};
  margin-top: ${THEME.space.m};
`
export const Controls = () => {
  return (
    <Row>
      <Panel>
        <SpinControls/>
      </Panel>
      <Panel>
        <SoundControls/>
      </Panel>
    </Row>)
}