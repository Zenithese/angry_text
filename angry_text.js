let caret

function angryText() {

    const caret = new Caret
    console.log(caret)
    const editor = document.getElementById('rich_text')
    const characters = editor.innerText.replace(/\s/g, " ").split(" ")
    let last = characters.pop()
    if (!last.length) last = "&nbsp;"
    const settling = characters.pop()

    editor.innerHTML = characters.length ? characters.join(" ") + "&nbsp;" : ""

    if (settling) {
        const child = applyEffect("shake-little", settling + "&nbsp;", editor, "penultimate")
        setTimeout(() => {
            child.className = "settled"
        }, 1000)
    }

    if (last) {
        const child = applyEffect("shake", last, editor, "last")
        setTimeout(() => {
            child.className = "settled"
        }, 1000)
    }

    console.log(caret)
    caret.place()

}

function applyEffect(effect, text, parent, id) {
    let selection;
    if (window.getSelection && (selection = window.getSelection())) {
        const span = document.createElement("span")
        parent.appendChild(span)
        span.id = id
        span.className = effect;
        span.innerHTML = text;

        // Move the caret immediately after the inserted span
        if (effect === "shake") {
            const range = new Range;
            range.setStartAfter(span);
            range.collapse(true);
            selection.removeAllRanges();
            selection.addRange(range);
        }

        return span
    }
}

function test(event) {
    if (event.keyCode == 16) { // Execute command if user presses the SHIFT button:
        const caret = new Caret
        console.log(caret)
    }
}