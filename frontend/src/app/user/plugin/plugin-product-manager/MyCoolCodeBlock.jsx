import { CopyBlock, dracula } from 'react-code-blocks';

export function MyCoolCodeBlock({ code, language, showLineNumbers }) {
  <CopyBlock
    text={code}
    language={language}
    showLineNumbers={showLineNumbers}
    theme={dracula}
    codeBlock
  />;
}