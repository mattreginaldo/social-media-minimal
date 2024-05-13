import { styled, css } from 'styled-components'

const HeaderContainer = styled.header`
${({ theme }) => css`
    background-color: ${theme.palette.grey[900]};
    width: 100%;
    height: 100px;

    display: flex;
    justify-content: center;
    align-items: center;
`}`

const HeaderTitle = styled.h1`
${({ theme }) => css`
    color: ${theme.palette.text.primary};
    font-weight: ${theme.typography.fontWeightBold};
    font-style: italic;
`}`

export {
  HeaderContainer,
  HeaderTitle
}
