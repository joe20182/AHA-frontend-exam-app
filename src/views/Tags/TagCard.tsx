import {FC} from 'react';
import {TagItem, TagImgBox, TagLabel, TagName, TagDescription} from './style';

interface TagProp {
  name: string;
  count: number;
}

const TagCard: FC<TagProp> = ({name, count}) => {
  return (
    <TagItem>
      <TagImgBox>
        <TagLabel>{name}</TagLabel>
      </TagImgBox>
      <TagName>{name}</TagName>
      <TagDescription>{count} Results</TagDescription>
    </TagItem>
  );
};

export default TagCard;
