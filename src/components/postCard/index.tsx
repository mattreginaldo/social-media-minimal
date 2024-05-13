import { Post } from '@/@types/post';
import AvatarOutlined from '@/components/avatarOutlined';
import formatPublicationDate from '@/utils/formatPublicationDate';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import queryKeys from '@/react-query';
import { getUser } from '@/services/user';
import { Profile } from '@/@types/profile';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { deletePost } from '@/services/posts';

import * as S from './styles';

const PostCard = ({ id: postId, author, publishedAt, body }: Post) => {
  const queryClient = useQueryClient();

  const { data: queryUser } = useQuery({
    queryKey: [queryKeys.user],
    queryFn: getUser,
  });

  const profile = queryUser as { data: Profile };

  const { mutate } = useMutation({
    mutationFn: deletePost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [queryKeys.posts] });
    },
  });

  const getAuthor = (): Profile & { permissionToDelete: boolean } => {
    if (profile && author.email === profile.data.email) {
      return {
        ...profile.data,
        permissionToDelete: true,
      };
    }

    return { ...author, permissionToDelete: false };
  };

  const removePost = () => {
    //TODO: confirmation modal
    mutate(postId);
  };

  return (
    <S.CardStyled>
      <S.CardStyledHeader>
        {getAuthor() && (
          <S.UserData>
            <AvatarOutlined fullname={getAuthor().fullname} photo={getAuthor().photo} />

            <S.UserDescriptions>
              <S.UserFullName>{getAuthor().fullname}</S.UserFullName>
              <S.UserRole>{getAuthor().role}</S.UserRole>
            </S.UserDescriptions>
          </S.UserData>
        )}

        <S.PublicationTimeCounter>{formatPublicationDate(publishedAt)}</S.PublicationTimeCounter>
      </S.CardStyledHeader>

      <S.CardContent>
        <S.PostBody dangerouslySetInnerHTML={{ __html: body }}></S.PostBody>
      </S.CardContent>

      {getAuthor().permissionToDelete && (
        <S.CardFooter>
          <DeleteOutlineOutlinedIcon onClick={removePost} />
        </S.CardFooter>
      )}
    </S.CardStyled>
  );
};

export default PostCard;
