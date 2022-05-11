import styled from 'styled-components';

export const TagsWrapper = styled.div`
  padding: 20px 0 0;
  ${({theme}) => theme.breakpoints.up('sm')} {
    padding: 80px 127px 0;
  }
`;

export const TagsTitle = styled.h3`
  font-size: 24px;
  margin: 0 0 24px;
  font-weight: 400;
  ${({theme}) => theme.breakpoints.up('sm')} {
    font-size: 30px;
  }
`;

export const TagList = styled.div`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  padding: 0 5px;
  ${({theme}) => theme.breakpoints.up('sm')} {
    padding: 0;
  }
`;

export const TagItem = styled.div`
  border-radius: 10px;
  margin-bottom: 24px;
  /* margin-right: 24px; */
  ${({theme}) => theme.breakpoints.up('sm')} {
    margin-bottom: 36px;
  }
`;

export const TagImgBox = styled.div`
  width: 150px;
  height: 150px;
  background-color: rgba(255, 255, 255, 0.06);
  margin-bottom: 10px;
  border-radius: 10px;
  position: relative;
`;

export const TagLabel = styled.span`
  font-size: 24px;
  font-weight: 700;
  border: 4px solid #fff;
  border-radius: 8px;
  position: absolute;
  left: 10px;
  bottom: 14px;
  padding: 7px 14px;
  max-width: 135px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const TagName = styled.div`
  font-size: 15px;
  width: 150px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const TagDescription = styled.div`
  font-size: 12px;
  color: #b2b2b2;
`;
