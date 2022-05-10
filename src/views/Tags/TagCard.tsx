import {FC} from 'react';
import {TagItem, TagImgBox, TagLabel, TagName, TagDescription} from './style';

const TagCard: FC = () => {
  return (
    <TagItem>
      <TagImgBox>
        <TagLabel>Cool</TagLabel>
      </TagImgBox>
      <TagName>Cool</TagName>
      <TagDescription>350 Results</TagDescription>
    </TagItem>
  );
};

export default TagCard;
