import styled from 'styled-components';

interface TabProp {
  notice?: boolean;
}

export const TabWrapper = styled.div<TabProp>`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  position: relative;
  &:after {
    content: '';
    display: ${({notice}) => (notice ? 'block' : 'none')};
    width: 6px;
    height: 6px;
    background-color: #00d1ff;
    position: absolute;
    top: -6px;
    right: 0px;
    border-radius: 50%;
  }
`;

export const TabName = styled.div`
  font-size: 12px;
  visibility: hidden;
  &.active {
    visibility: visible;
  }
`;
