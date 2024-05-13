import { useEditor, EditorContent, Editor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import CharacterCount from '@tiptap/extension-character-count';
import Placeholder from '@tiptap/extension-placeholder';

import * as S from './styles';

const limit = 300;

const extensions = [
  StarterKit,
  Placeholder.configure({
    placeholder: 'Escreva alguma coisa …',
  }),
  CharacterCount.configure({
    limit,
  }),
];

interface Props {
  content: string;
  onChange: (html: string) => void;
  onCharacterCounted?: (counter: number) => void;
}

const CustomEditor = ({ content, onChange, onCharacterCounted }: Props) => {
  const editor = useEditor({
    extensions,
    content,
    onUpdate({ editor }) {
      onChange(editor.getHTML());
      onCharacterCounted && onCharacterCounted(editor.storage.characterCount.characters());
    },
  }) as Editor;

  if (!editor) {
    return null;
  }

  return (
    <S.EditorStyled>
      <EditorContent editor={editor} />
      <S.CharacterCount>
        <span>
          {editor.storage.characterCount.characters()}/{limit} characters
        </span>
      </S.CharacterCount>
    </S.EditorStyled>
  );
};

export default CustomEditor;
