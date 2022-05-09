import styled from 'styled-components';

export const MobileNavWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 66px;
  left: 0;
  bottom: 0;
  background: rgba(24, 24, 24, 0.2);
  box-shadow: inset 0px 0.5px 0px rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(54.3656px);
  display: flex;
  align-items: center;
  justify-content: center;
  > div {
    margin: 0 27px;
  }
`;
