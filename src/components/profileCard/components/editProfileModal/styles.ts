import { styled, css } from 'styled-components'
import {
  Box,
  Button
} from '@mui/material';
import AddPhotoAlternateRoundedIcon from '@mui/icons-material/AddPhotoAlternateRounded';

const ModalContent = styled(Box).attrs({
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
})`
  display: flex;
  flex-direction: column;
  gap: 30px;


  form {
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin-top: 30px;
  }
`

const ProfilePhotoInput = styled.div`
    display: flex;
    justify-content: center;
    transform: scale(1.5);
    #file-input{
      display: none;
    }
`

const ProfilePhotoCustomField = styled.label`
    position: relative;
    cursor: pointer;
`
const EditIcon = styled(AddPhotoAlternateRoundedIcon).attrs({
  fontSize: 'medium',
})`
    position: absolute;
    z-index: 1;
    bottom: -5px;
    right: -5px;
`

const ModalTitle = styled.span`
${({ theme }) => css`
    font-weight: ${theme.typography.fontWeightBold};
    font-size: ${theme.typography.pxToRem(24)};
    color: ${theme.palette.text.primary};
`}`

const ButtonSubmit = styled(Button)`
${({ theme }) => css`
    margin-top: 20px;
    width: 100%;
    height: 45px;
    font-weight: ${theme.typography.fontWeightBold};
    font-size: ${theme.typography.pxToRem(14)};
    border-radius: 8px;
    text-transform: capitalize;
    ;
`}`

export {
  ModalContent,
  ModalTitle,
  ProfilePhotoInput,
  ProfilePhotoCustomField,
  EditIcon,
  ButtonSubmit
}
