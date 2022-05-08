import styled from 'styled-components';

interface LayoutProps {
  isPC: boolean;
}

export const LayoutWrapper = styled.div<LayoutProps>`
  display: flex;
  flex-direction: ${(props) => (props.isPC ? 'row' : 'column')};
`;
