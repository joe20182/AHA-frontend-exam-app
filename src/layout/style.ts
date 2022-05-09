import styled from 'styled-components';

interface LayoutProps {
  isPC: boolean;
}

export const LayoutWrapper = styled.div<LayoutProps>`
  display: flex;
  justify-content: space-between;
  flex-direction: ${(props) => (props.isPC ? 'row' : 'column')};
`;

export const ContentWrapper = styled.div`
  padding-top: 70px;
  flex: 1;
  &.isPC {
    padding-top: 0;
  }
`;
