import styled from 'styled-components';

export const FollowWrapper = styled.div`
  width: 375px;
  background-color: #1b1b1b;
`;

export const FollowTabs = styled.div`
  display: flex;
`;

export const FollowTab = styled.div`
  flex: 1;
  padding: 32px 0 12px;
  cursor: pointer;
  text-align: center;
  color: #929292;
  border-bottom: 2px solid #1f1f1f;
  transition: 0.3s;
  &.active {
    color: #fff;
    border-bottom: 2px solid #fff;
  }
`;

export const ListWrapper = styled.div`
  padding: 32px 16px 0;
  height: calc(100vh - 70px);
  overflow-y: auto;
`;

export const ListItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  button {
    margin-left: auto;
  }
`;

export const AvatarBox = styled.div`
  width: 40px;
  height: 40px;
  border: 1px solid #f8f8f8;
  border-radius: 5px;
  margin-right: 15px;
  background-image: url('https://avatars.githubusercontent.com/u/35068498?v=4');
  background-size: cover;
`;

export const Account = styled.div`
  font-size: 14px;
  opacity: 0.5;
`;

export const Detail = styled.div``;

export const Name = styled.div``;
