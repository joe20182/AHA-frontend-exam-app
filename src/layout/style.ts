import styled from 'styled-components';

interface LayoutProps {
  isPC: boolean;
}

export const LayoutWrapper = styled.div<LayoutProps>`
  display: flex;
  justify-content: space-between;
  flex-direction: ${(props) => (props.isPC ? 'row' : 'column')};
  overflow-x: hidden;
  padding-bottom: ${(props) => (props.isPC ? '0' : '66px')};
`;

export const ContentWrapper = styled.div`
  padding: 70px 20px 0;
  flex: 1;
  &.isPC {
    padding: 0 130px;
  }
`;
