import { styled, css } from 'styled-components';

const EditorStyled = styled.div`
  ${({ theme }) => css`
      .tiptap{
        height: 120px;
        border: 1px solid ${theme.palette.primary.main};
        border-radius: 8px;
        outline: 0;
        padding: 10px;

        p.is-editor-empty:first-child::before {
          color: #adb5bd;
          content: attr(data-placeholder);
          float: left;
          height: 0;
          pointer-events: none;
        }
      }
  `}
`;

const CharacterCount = styled.div`
  ${({ theme }) => css`
      display: flex;
      justify-content: end;
      margin-top: 10px;

      span{
        color: ${theme.palette.primary.main}
      }
  `}
`;

export { EditorStyled, CharacterCount };
