import PostCard from '@/components/postCard';
import queryKeys from '@/react-query';
import { getPosts } from '@/services/posts';
import { CircularProgress } from '@mui/material';
import { useQuery } from '@tanstack/react-query';

import * as S from './styles';

function PostsList() {
  const { isPending, data: queryPosts } = useQuery({
    queryKey: [queryKeys.posts],
    queryFn: getPosts,
  });

  if (isPending) {
    return (
      <S.PostsLoading>
        <CircularProgress />
      </S.PostsLoading>
    );
  }

  return (
    <S.PostsList>
      {queryPosts?.data.map(post => (
        <PostCard key={post.id} {...post} />
      ))}
    </S.PostsList>
  );
}

export default PostsList;
