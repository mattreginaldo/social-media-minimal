import { Modal, TextField, Autocomplete, CircularProgress } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import queryKeys from '@/react-query';
import { Profile } from '@/@types/profile';
import { getRoles } from '@/services/roles';
import { Roles } from '@/@types/role';
import { updateUser } from '@/services/user';
import { ChangeEventHandler, useState } from 'react';
import AvatarOutlined from '@/components/avatarOutlined';
import { editProfileSchema } from './schema';

import * as S from './styles';

interface Props {
  open: boolean;
  onClose: () => void;
}

const EditProfileModal = ({ open, onClose }: Props) => {
  const [previewImage, setPreviewImage] = useState<string>('');
  const {
    control,
    handleSubmit,
    setValue,
    reset,
    formState: { isDirty, errors },
  } = useForm<Profile>({
    resolver: zodResolver(editProfileSchema),
    mode: 'onChange',
  });

  const queryClient = useQueryClient();

  const { isPending: updateLoading, mutate } = useMutation({
    mutationFn: updateUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [queryKeys.user] });
      reset();
      onClose();
    },
  });

  const { isPending: loadingRoles, data: queryRoles } = useQuery({
    queryKey: [queryKeys.roles],
    queryFn: getRoles,
  });

  const { data: profile } = queryClient.getQueryData([queryKeys.user]) as {
    data: Profile;
  };

  const roles = (queryRoles?.data as Roles) || [];

  const handleImageChange: ChangeEventHandler<HTMLInputElement> = e => {
    const file = e.target.files?.[0];

    if (file) {
      if (file.size > 2097152) {
        alert('Insira uma imagem de no máximo 2mb :)');
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
        setValue('photo', reader.result as string, {
          shouldDirty: true,
          shouldTouch: true,
          shouldValidate: true,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = (data: Profile) => {
    mutate({
      ...profile,
      ...data,
    });
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <S.ModalContent>
        <S.ModalTitle>Dados pessoais</S.ModalTitle>

        <form onSubmit={handleSubmit(onSubmit)}>
          <S.ProfilePhotoInput>
            <S.ProfilePhotoCustomField htmlFor="file-input">
              <S.EditIcon />
              <AvatarOutlined
                fullname={profile.fullname}
                photo={previewImage ? previewImage : profile.photo}
              />
            </S.ProfilePhotoCustomField>

            <input
              id="file-input"
              type="file"
              accept="image/jpeg, image/png, image/jpg"
              onChange={handleImageChange}
            />
          </S.ProfilePhotoInput>

          <Controller
            name="fullname"
            control={control}
            defaultValue={profile.fullname}
            render={({ field }) => (
              <TextField
                {...field}
                label="Nome completo"
                variant="standard"
                error={!!errors.fullname?.message}
                helperText={errors.fullname?.message as string}
                fullWidth
              />
            )}
          />

          <Controller
            name="email"
            control={control}
            defaultValue={profile.email}
            render={({ field }) => (
              <TextField
                {...field}
                label="Email"
                variant="standard"
                error={!!errors.email?.message}
                helperText={errors.email?.message as string}
                fullWidth
              />
            )}
          />

          <Controller
            name="role"
            control={control}
            defaultValue={profile.role}
            render={({ field }) => (
              <Autocomplete
                {...field}
                options={roles}
                key={profile.role}
                loading={loadingRoles}
                renderInput={params => (
                  <TextField
                    {...params}
                    variant="standard"
                    label="Ramo de atuação"
                    helperText={errors.role?.message as string}
                    error={!!errors.role?.message}
                    fullWidth
                  />
                )}
                onChange={(_, selected) =>
                  setValue('role', selected as string, {
                    shouldDirty: true,
                    shouldTouch: true,
                    shouldValidate: true,
                  })
                }
              />
            )}
          />

          <S.ButtonSubmit type="submit" variant="contained" disabled={!isDirty}>
            {updateLoading && (
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
            Salvar
          </S.ButtonSubmit>
        </form>
      </S.ModalContent>
    </Modal>
  );
};

export default EditProfileModal;
