let caret

function angryText() {
    caret = new Caret
    // console.log(caret)
    const container = document.getElementById('rich_text')
    const text = new ShakeText(container.innerText)
    const [inital, penultimate, ultimate] = text.parse()

    container.innerHTML = inital
    finalWords(container, penultimate, ultimate)
    // console.log(caret)
    caret.place()
}

function whitespace(event) {
    if (event.keyCode == 32 && caret.parentNode.id === "last" && caret.startOffset < caret.anchorNode.data.length) { // Execute command if user presses the SPACEBAR button:
        const container = document.getElementById('rich_text')
        const last = document.getElementById("last")
        const text = new ShakeText(last.innerText)
        const [inital, penultimate, ultimate] = text.parse()
        last.remove()
        finalWords(container, penultimate, ultimate, true)
    }
}

function finalWords(container, penultimate, ultimate, whitespace) {
    if (penultimate) {
        const child = applyEffect("shake-little", penultimate, container, "penultimate")
        setTimeout(() => {
            child.className = "settled"
        }, 1000)
    }
    if (ultimate) {
        const child = applyEffect("shake", ultimate, container, "last", whitespace)
        setTimeout(() => {
            child.className = "settled"
        }, 1000)
    }
}

function applyEffect(effect, text, parent, id, whitespace) {
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
            whitespace ? range.setStart(span.firstChild, 1) : range.setStartAfter(span);
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

    // if (event.keyCode == 32) { // Execute command if user presses the SPACEBAR button:
    //     debugger
    // }
}