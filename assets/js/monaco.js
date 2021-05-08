require.config(
    { paths: 
        { 'vs': 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.23.0/min/vs' }
    }
)
require(
    ["vs/editor/editor.main"],
    () => {
        const container = document.getElementById('monaco-container');
        let editor = monaco.editor.create(
            container,
            { 
                value: ['function x() {', '\tconsole.log("Hello world!");', '}'].join('\n'),
                language: "javascript",
                theme: 'vs-dark',
                automaticLayout: true,
                scrollBeyondLastLine: false,
                readOnly: true,
                contextmenu: false,
                minimap: {
                    enabled: false
                }
            }
        );
        let el = editor._domElement
        el.style.height = `${editor.getModel().getLineCount() * 19}px`
        editor.onDidChangeModelContent(() => {
            el.style.height = `${editor.getModel().getLineCount() * 19}px`
        })
    }
);