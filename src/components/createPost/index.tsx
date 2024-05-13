import { useState } from 'react';
import CustomEditor from '../customEditor';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createPost } from '@/services/posts';
import queryKeys from '@/react-query';
import { Profile } from '@/@types/profile';
import { CircularProgress } from '@mui/material';

import * as S from './styles';

const CreatePost = () => {
  const [contentEditor, setContentEditor] = useState('');
  const [characterCounter, setCharacterCounter] = useState(0);

  const queryClient = useQueryClient();

  const profile = queryClient.getQueryData([queryKeys.user]) as {
    data: Profile;
  };

  const { isPending: newPostLoading, mutate } = useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      setContentEditor('');
      setCharacterCounter(0);
      queryClient.invalidateQueries({ queryKey: [queryKeys.posts] });
    },
  });

  const onChange = (content: string) => {
    setContentEditor(content);
  };

  const createNewPost = () => {
    const randomId = Math.floor(100000 + Math.random() * 900000);

    mutate({
      body: contentEditor,
      author: {
        ...profile.data,
      },
      id: randomId,
      publishedAt: String(new Date()),
    });
  };

  return (
    <S.CardStyled>
      <S.CardContent>
        <CustomEditor
          content={contentEditor}
          onChange={onChange}
          onCharacterCounted={setCharacterCounter}
        />

        <S.ButtonStyled
          variant="contained"
          disabled={characterCounter === 0}
          onClick={createNewPost}
        >
          {newPostLoading && (
            <CircularProgress
              size={24}
              color="inherit"
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                marginTop: '-12px',
                marginLeft: '-12px',
              }}
            />
          )}
          Postar
        </S.ButtonStyled>
      </S.CardContent>
    </S.CardStyled>
  );
};

export default CreatePost;
