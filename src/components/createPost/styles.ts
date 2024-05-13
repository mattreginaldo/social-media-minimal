import { styled, css } from 'styled-components'
import {
  Card,
  Button
} from '@mui/material';

const CardStyled = styled(Card)`
    width: 100%;
    height: 100%;
    border-radius: 8px;
`

const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 20px;
`

const ButtonStyled = styled(Button)`
${({ theme }) => css`
    margin-top: 20px;
    width: 100px;
    height: 45px;
    font-weight: ${theme.typography.fontWeightBold};
    font-size: ${theme.typography.pxToRem(14)};
    border-radius: 8px;
    text-transform: capitalize;

    align-self: end;
    ;
`}`

export {
  CardStyled,
  CardContent,
  ButtonStyled,
}
