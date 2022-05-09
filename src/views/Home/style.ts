import styled from 'styled-components';

export const HomeWrapper = styled.div`
  h3 {
    margin: 0 0 16px;
  }
  .keyword-input {
    margin-bottom: 28px;
  }
  .pagi-wrapper {
    padding-bottom: 180px;
  }
  .btn-wrapper {
    padding-top: 80px;
  }
  &.isPC {
    padding-top: 54px;
    h3 {
      margin: 0 0 20px;
    }
    .search-wrapper {
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      margin-bottom: 30px;
    }
    .pagi-wrapper {
      padding-bottom: 10px;
    }
    .btn-wrapper {
      padding-top: 335px;
    }
  }
`;

export const SearchWrapper = styled.div``;

export const SearchTitle = styled.h3`
  font-size: 24px;
  font-weight: 400;
`;

export const PagiWrapper = styled.div`
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

export const ResultBox = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: baseline;
  h4 {
    font-size: 48px;
    font-weight: 700;
    margin: 0 10px 0 0;
  }
`;

export const BtnWrapper = styled.div``;
