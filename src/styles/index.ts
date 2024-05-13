import { createGlobalStyle, css } from "styled-components";

const GlobalStyles = createGlobalStyle`
${({ theme }) => css`
    html,
    body {
        padding: 0;
        margin: 0;
        background-color: ${theme.palette.background.default};
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    * {
        box-sizing: border-box;
        line-height: 1;
    }
`}
`;

export { GlobalStyles }
