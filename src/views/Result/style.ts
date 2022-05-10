import styled from 'styled-components';

export const ResultWrapper = styled.div`
  padding-top: 20px;
  ${({theme}) => theme.breakpoints.up('sm')} {
    padding-top: 92px;
  }
`;

export const ResultsTitle = styled.h3`
  font-size: 24px;
  margin: 0 0 24px;
  font-weight: 400;
  ${({theme}) => theme.breakpoints.up('sm')} {
    font-size: 30px;
    padding-left: 8px;
  }
`;

export const ResultList = styled.div`
  display: flex;
`;

export const ResultItem = styled.div``;

export const ResultImg = styled.div``;

export const ResultTitle = styled.div`
  font-size: 15px;
`;

export const ResultSubtitle = styled.div`
  font-size: 12px;
  color: #b2b2b2;
`;
