import styled from 'styled-components';

export const TabWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

export const TabName = styled.div`
  font-size: 12px;
  visibility: hidden;
  &.active {
    visibility: visible;
  }
`;
