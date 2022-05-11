import {FC, useEffect, useState} from 'react';
import {RouteComponentProps} from 'react-router-dom';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import {TagsWrapper, TagsTitle, TagList} from './style';
import TagCard from './TagCard';
import useAxios from '@/hooks/useAxios';

interface Tag {
  id: string;
  name: string;
  count: number;
}

const Tags: FC<RouteComponentProps> = () => {
  const [tags, setTags] = useState<Tag[]>([]);
  const {sendRequest: getAllTagsAPI, isLoading} = useAxios({
    url: '/tags',
  });

  useEffect(() => {
    getAllTags();
  }, []);

  const getAllTags = async () => {
    const res = await getAllTagsAPI({});
    res && setTags(res);
  };

  return (
    <TagsWrapper>
      <Backdrop open={isLoading} sx={{zIndex: 1}}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <TagsTitle>Tags</TagsTitle>
      <TagList>
        {tags.map((tag) => (
          <TagCard key={tag.id} name={tag.name} count={tag.count} />
        ))}
      </TagList>
    </TagsWrapper>
  );
};

export default Tags;
