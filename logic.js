function angryText() {

    const editor = document.getElementById('text')
    const characters = editor.innerText.replace(/\s/g, " ").split(" ")
    let last = characters.pop()
    if (!last.length) last = characters.pop() + "&nbsp;"
    const settling = characters.pop()

    editor.innerHTML = ""

    characters.forEach((character) => {
        const child = document.createElement("span")
        editor.appendChild(child)
        child.innerHTML = character + "&nbsp;"
    })

    if (settling) {
        const child = applyEffect("shake-little", settling + "&nbsp;", editor)
        setTimeout(() => {
            child.className = ""
        }, 1000)
    }

    if (last) {
        const child = applyEffect("shake", last, editor)
        setTimeout(() => {
            child.className = ""
        }, 1000)
    }

}

function applyEffect(effect, text, parent) {
    let selection
    if (window.getSelection && (selection = window.getSelection()).rangeCount) {
        // selection.deleteFromDocument();
        const span = document.createElement("span");
        const range = selection.getRangeAt(0);
        range.collapse(true);
        span.className = effect;
        span.innerHTML = text;
        parent.appendChild(span)

        // Move the caret immediately after the inserted span
        const emtpySpan = document.createElement("span")
        parent.appendChild(emtpySpan)
        range.setStartAfter(emtpySpan);
        range.collapse(true);
        selection.removeAllRanges();
        selection.addRange(range);

        return span
    }
}

function command() {
     document.execCommand('bold');
}

function test(event) {
    if (event.keyCode == 16) { // Execute command if user presses the SHIFT button:
        // document.execCommand('bold');
        // applyEffect("shake", document.getSelection().toString())
    }
}