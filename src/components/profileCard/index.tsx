import { Profile } from '@/@types/profile';
import AvatarOutlined from '../avatarOutlined';
import { useQuery } from '@tanstack/react-query';
import queryKeys from '@/react-query';
import { CircularProgress, Divider } from '@mui/material';
import { ModeEditOutlineOutlined } from '@mui/icons-material';
import { getUser } from '@/services/user';
import { useState } from 'react';
import EditProfileModal from './components/editProfileModal';

import * as S from './styles';

const imageCoverMock =
  'https://w0.peakpx.com/wallpaper/454/273/HD-wallpaper-green-leaf-plant-on-white-background.jpg';

const ProfileCard = () => {
  const [openEditModalProfile, setOpenEditModalProfile] = useState(false);
  const { isPending, data: queryUser } = useQuery({
    queryKey: [queryKeys.user],
    queryFn: getUser,
  });

  if (isPending) {
    return (
      <S.ProfileLoading>
        <CircularProgress />
      </S.ProfileLoading>
    );
  }

  const profile = queryUser as { data: Profile };

  const {
    data: { fullname, photo, role },
  } = profile as { data: Profile };

  return (
    <S.CardStyled>
      <EditProfileModal
        open={openEditModalProfile}
        onClose={() => setOpenEditModalProfile(false)}
      />

      <S.ImageCover src={imageCoverMock} alt="cover mock" />

      <S.CardContent>
        <AvatarOutlined fullname={fullname} photo={photo} />

        <S.UserFullName>{fullname}</S.UserFullName>
        <S.UserRole>{role}</S.UserRole>

        <Divider variant="fullWidth" sx={{ width: '100%' }} />

        <S.ButtonStyled
          variant="outlined"
          startIcon={<ModeEditOutlineOutlined />}
          onClick={() => setOpenEditModalProfile(true)}
        >
          Editar seu perfil
        </S.ButtonStyled>
      </S.CardContent>
    </S.CardStyled>
  );
};

export default ProfileCard;
