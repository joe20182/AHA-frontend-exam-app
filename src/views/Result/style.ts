import styled from 'styled-components';

export const ResultWrapper = styled.div`
  padding-top: 20px;
  padding-bottom: 100px;
  ${({theme}) => theme.breakpoints.up('sm')} {
    padding-top: 92px;
  }
`;

export const ResultsTitle = styled.h3`
  font-size: 24px;
  margin: 0 0 24px;
  font-weight: 400;
  position: relative;
  ${({theme}) => theme.breakpoints.up('sm')} {
    font-size: 30px;
  }
`;

export const ResultBackIcon = styled.img`
  margin-right: 30px;
  margin-left: -30px;
  cursor: pointer;
  display: none;
  ${({theme}) => theme.breakpoints.up('sm')} {
    display: inline-block;
  }
`;

export const ResultList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const ResultItem = styled.div`
  flex: 0 0 100%;
  margin-bottom: 40px;
  ${({theme}) => theme.breakpoints.up('sm')} {
    margin-bottom: 30px;
    flex: 0 0 calc(33.333333% - 22.6px);
  }
`;

export const ResultImg = styled.div`
  background-image: url(https://picsum.photos/400/300);
  background-size: cover;
  padding-bottom: 66.666%;
  margin-bottom: 20px;
  ${({theme}) => theme.breakpoints.up('sm')} {
    margin-bottom: 12px;
  }
`;

export const ResultTitle = styled.div`
  font-size: 15px;
`;

export const ResultSubtitle = styled.div`
  font-size: 12px;
  color: #b2b2b2;
`;
