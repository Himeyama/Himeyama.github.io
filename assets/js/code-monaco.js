require.config(
    { paths: 
        { 'vs': 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.23.0/min/vs' }
    }
)

let codes = document.getElementsByClassName("highlight")
for(let code of codes){
    if(code.tagName == "PRE"){
        let text = code.innerText
        let lang = code.parentElement.parentElement.classList[0].split("-")[1]
        console.log(text)
        console.log(lang)
        console.log(code)
        lang = lang == "rb" ? "ruby" : lang
        lang = lang == "sh" ? "shell" : lang
        require(
            ["vs/editor/editor.main"],
            () => {
                const container = code.parentElement.parentElement;
                code.parentElement.remove()
                let editor = monaco.editor.create(
                    container,
                    { 
                        value: text,
                        language: lang,
                        theme: 'vs',
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
    }
}
