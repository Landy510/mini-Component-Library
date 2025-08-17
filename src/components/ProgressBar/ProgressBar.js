/* eslint-disable no-unused-vars */
import styled from 'styled-components';

import VisuallyHidden from "../VisuallyHidden";
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
    <Wrapper style={styles}>
      <VisuallyHidden>{value}</VisuallyHidden>
      <ProgressbarWrapper>
        <Progress 
          role="progressbar"
          aria-labelledby='loadinglabel'
          aria-valuenow={value}
          value={value}
        ></Progress>
      </ProgressbarWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: var(--height);
  padding: var(--padding);
  background-Color: ${COLORS.transparentGray15};
  border-radius: var(--borderRadius);
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  `
  
  const ProgressbarWrapper = styled.div`
  height: 100%;
  border-radius: 4px;
  overflow: hidden;
`

const Progress = styled.span`
  display: block;
  height: 100%;
  width: ${p => p.value + "%"};
  background-color: ${COLORS.primary};
`

export default ProgressBar;
