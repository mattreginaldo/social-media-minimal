import { styled, css } from 'styled-components'
import {
  Card,
  Button
} from '@mui/material';

const CardStyled = styled(Card)`
    border-radius: 8px;
    position: relative;
`

const ImageCover = styled.img`
    height: 80px;
    width: 100%;
    object-fit: cover;
    object-position: bottom;
`

const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
    margin-top: -35px;
    padding-bottom: 25px;
`

const ButtonStyled = styled(Button)`
${({ theme }) => css`
    height: 45px;
    font-weight: ${theme.typography.fontWeightBold};
    font-size: ${theme.typography.pxToRem(14)};
    border-radius: 8px;
    text-transform: capitalize;
    ;
`}`

const UserFullName = styled.span`
${({ theme }) => css`
    font-weight: ${theme.typography.fontWeightBold};
    font-size: ${theme.typography.pxToRem(16)};
    color: ${theme.palette.text.primary};
    padding: 0 20px;
    text-align: center;
`}`

const UserRole = styled.span`
${({ theme }) => css`
    font-weight: ${theme.typography.fontWeightRegular};
    font-size: ${theme.typography.pxToRem(14)};
    color: ${theme.palette.grey[500]};
    padding: 0 20px;
    text-align: center;
`}`

const ProfileLoading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
`

export {
  CardStyled,
  CardContent,
  ButtonStyled,
  ImageCover,
  UserFullName,
  UserRole,
  ProfileLoading
}
