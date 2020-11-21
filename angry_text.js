let caret

function angryText() {
    caret = new Caret
    const container = document.getElementById('rich_text')
    const text = new ShakeText(container.innerText)
    container.innerHTML = text.inital
    text.finalWords(container)
    caret.place()
}

function whitespace(event) {
    if (event.keyCode == 32) {
        if (caret.parentNode.id === "last" && caret.startOffset < caret.anchorNode.data.length) {
            const container = document.getElementById('rich_text')
            const last = document.getElementById("last")
            const text = new ShakeText(last.innerText)
            last.remove()
            text.finalWords(container, true)
        }
    }
}