import styled from "@emotion/styled"
import { THEME } from "../styling/theme"
import { Panel } from "./Panel"

const Row = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${THEME.space.m};
  margin-top: ${THEME.space.m};
`

export const Controls = () => 
<Row>
  <Panel>
    Hello
  </Panel>
  <Panel>
    World
  </Panel>
</Row>
