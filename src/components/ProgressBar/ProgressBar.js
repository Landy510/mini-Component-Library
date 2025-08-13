/* eslint-disable no-unused-vars */
import styled from 'styled-components';

import { COLORS } from '../../constants';

const Sizes = {
  small: {
    "--height": 8 + "px",
    "--borderRadius": 4 + "px",
    "--padding": 0 + "px"
  },
  medium: {
    "--height": 12 + "px",
    "--borderRadius": 4 + "px",
    "--padding": 0 + "px"
  },
  large: {
    "--height": 24 + "px",
    "--borderRadius": 8 + "px",
    "--padding": 4 + "px"
  },
}

const ProgressBar = ({ value, size }) => {
  const styles = Sizes[size];
  return (
    <ProgressWrapper style={styles}>
      <span 
        id="loadinglabel"
        style={{
          display: "none"
        }}
      >Loading:</span>
      <Progress 
        role="progressbar"
        aria-labelledby='loadinglabel'
        aria-valuenow={value}
        style={isFinished(value)} 
        value={value}
      ></Progress>
    </ProgressWrapper>
  );
};

function isFinished(value) {
  if(value < 100) return {"--borderRadius": "4px 0 0 4px"};
  return {"--borderRadius": "4px"};
}

const ProgressWrapper = styled.div`
  height: var(--height);
  padding: var(--padding);
  width: 370px;
  background-Color: ${COLORS.transparentGray15};
  border-radius: var(--borderRadius);
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  overflow: hidden;
`
const Progress = styled.span`
  display: block;
  height: 100%;
  border-radius: var(--borderRadius);
  width: ${p => p.value + "%"};
  background-color: ${COLORS.primary};
`

export default ProgressBar;
