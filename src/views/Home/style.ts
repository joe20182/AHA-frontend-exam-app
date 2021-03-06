import styled from 'styled-components';

export const HomeWrapper = styled.div`
  .keyword-input {
    margin-bottom: 28px;
  }
  ${({theme}) => theme.breakpoints.up('sm')} {
    padding-top: 54px;
  }
`;

export const SearchWrapper = styled.div`
  ${({theme}) => theme.breakpoints.up('sm')} {
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    margin-bottom: 32px;
  }
`;

export const SearchTitle = styled.h3`
  font-size: 24px;
  font-weight: 400;
  margin: 0 0 16px;
  ${({theme}) => theme.breakpoints.up('sm')} {
    margin: 0 0 20px;
  }
`;

export const PagiWrapper = styled.div`
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding-bottom: 209px;
  ${({theme}) => theme.breakpoints.up('sm')} {
    padding-bottom: 28px;
  }
`;

export const ResultBox = styled.div`
  margin-bottom: 8px;
  display: flex;
  align-items: baseline;
  h4 {
    font-size: 48px;
    font-weight: 700;
    margin: 0 10px 0 0;
  }
  ${({theme}) => theme.breakpoints.up('sm')} {
    margin-bottom: 14px;
  }
`;

export const BtnWrapper = styled.div`
  padding-top: 80px;
  ${({theme}) => theme.breakpoints.up('sm')} {
    padding-top: 335px;
  }
`;

export const ResultNumber = styled.h4`
  line-height: 1;
`;
