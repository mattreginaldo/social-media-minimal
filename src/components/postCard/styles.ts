import { styled, css } from 'styled-components'
import {
  Card,
} from '@mui/material';

const CardStyled = styled(Card)`
    border-radius: 8px;
    padding: 35px;

    animation: fadeInDown;
    animation-duration: 0.5s;
`

const CardStyledHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const UserData = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
`
const UserDescriptions = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`

const UserFullName = styled.span`
${({ theme }) => css`
    font-weight: ${theme.typography.fontWeightBold};
    font-size: ${theme.typography.pxToRem(16)};
    color: ${theme.palette.text.primary};
`}`


const UserRole = styled.span`
${({ theme }) => css`
    font-weight: ${theme.typography.fontWeightRegular};
    font-size: ${theme.typography.pxToRem(14)};
    color: ${theme.palette.grey[500]};
`}`

const PublicationTimeCounter = styled.span`
${({ theme }) => css`
    font-weight: ${theme.typography.fontWeightRegular};
    font-size: ${theme.typography.pxToRem(14)};
    color: ${theme.palette.grey[500]};

    align-self: flex-start;
`}`

const AvatarStyled = styled.div`
${({ theme }) => css`
    border: 2px solid ${theme.palette.primary.dark};
    border-radius: 8px;
    width: 60px;
    height: 60px;

    display: flex;
    align-items: center;
    justify-content: center;
`}`

const CardContent = styled.div`
    padding: 35px 0;
`

const PostBody = styled.div`
${({ theme }) => css`
    font-weight: ${theme.typography.fontWeightRegular};
    font-size: ${theme.typography.pxToRem(14)};
    color: ${theme.palette.grey[400]};
    line-height: 20px;
`}`

const CardFooter = styled.div`
    display: flex;
    justify-content: flex-end;
`


export {
  CardStyled,
  CardStyledHeader,
  UserData,
  AvatarStyled,
  UserDescriptions,
  UserFullName,
  UserRole,
  PublicationTimeCounter,
  CardContent,
  PostBody,
  CardFooter
}
