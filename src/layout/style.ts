import styled from 'styled-components';

interface ContentWrapperProps {
  showFollowers?: boolean;
}

export const LayoutWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: 'column';
  overflow-x: hidden;
  padding-bottom: '66px';
  ${({theme}) => theme.breakpoints.up('sm')} {
    flex-direction: 'row';
    padding-bottom: 0;
  }
`;

export const ContentWrapper = styled.div<ContentWrapperProps>`
  padding: 70px 20px 100px;
  flex: 1;
  ${({theme}) => theme.breakpoints.up('sm')} {
    /* padding: 0 130px; */
    padding: ${({showFollowers}) => `0 ${showFollowers ? 505 : 130}px 0 130px`};
  }
`;
