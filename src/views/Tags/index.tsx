import {FC} from 'react';
import {RouteComponentProps} from 'react-router-dom';
import {TagsWrapper, TagsTitle, TagList} from './style';
import TagCard from './TagCard';

const Tags: FC<RouteComponentProps> = () => {
  return (
    <TagsWrapper>
      <TagsTitle>Tags</TagsTitle>
      <TagList>
        <TagCard />
        <TagCard />
        <TagCard />
        <TagCard />
        <TagCard />
        <TagCard />
      </TagList>
    </TagsWrapper>
  );
};

export default Tags;
