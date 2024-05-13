import { styled, css } from 'styled-components'
import { Avatar } from '@mui/material';

const AvatarStyled = styled(Avatar)`
${({ theme }) => css`
    border: 2px solid ${theme.palette.background.default};
    border-radius: 8px;
`}`

const BoxBorder = styled.div`
${({ theme }) => css`
    border: 3px solid ${theme.palette.primary.dark};
    border-radius: 8px;
    width: 60px;
    height: 60px;

    display: flex;
    align-items: center;
    justify-content: center;
`}`

export {
  BoxBorder,
  AvatarStyled
}
