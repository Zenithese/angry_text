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
            const text = new ShakeText(last.innerText, bug)
            bug++
            console.log(`_${text.penultimate}_`, `_${text.ultimate}_`)
            last.remove()
            text.finalWords(container, true)
            
            const newpen = document.getElementById("new-penultimate")
            const ultimate = document.getElementById("last")
            if (newpen.innerHTML.slice(newpen.innerHTML.length - 6) == "&nbsp;") {
                ultimate.innerHTML = "&nbsp;" + ultimate.innerHTML
                newpen.innerHTML = newpen.innerHTML.slice(0, newpen.innerHTML.length - 6)
                const range = new Range;
                range.setStart(ultimate.firstChild, 1)
                range.collapse(true);
                window.getSelection().removeAllRanges();
                window.getSelection().addRange(range);
            }
        }
    }
}