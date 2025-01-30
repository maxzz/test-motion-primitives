import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'; //https://github.com/react-syntax-highlighter/react-syntax-highlighter
import { vs, vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
import tsx from 'react-syntax-highlighter/dist/esm/languages/prism/tsx';

SyntaxHighlighter.registerLanguage('jsx', jsx);
SyntaxHighlighter.registerLanguage('tsx', tsx);

export function CodeHighlighter({ code }: { code: string | undefined; }) {
    return (
        <SyntaxHighlighter className="w-full h-full" language="javascript" style={vscDarkPlus}>
            {code || ''}
        </SyntaxHighlighter>
    );
}
