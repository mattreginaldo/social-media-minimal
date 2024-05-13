import { Profile } from '@/@types/profile';

import * as S from './styles';

type Props = Omit<Profile, 'role' | 'email'>;

const AvatarOutlined = ({ fullname, photo }: Props) => (
  <S.BoxBorder>
    <S.AvatarStyled
      alt={fullname}
      variant="rounded"
      src={photo}
      sx={{ width: 53, height: 53 }}
    />
  </S.BoxBorder>
);

export default AvatarOutlined;
