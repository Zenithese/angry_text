class ShakeText {
    constructor(text) {
        this.text = text.replace(/\s/g, " ")
        this.inital = this.text.split("").reverse()
        this.penultimate = ""
        this.ultimate = ""

        for (let word = 0; word < 2 && this.inital.length;) {
            const char = this.inital.shift()
            if (!word) this.ultimate = char + this.ultimate
            else this.penultimate = char + this.penultimate
            if (char === " ") word++
        }

        this.inital = this.inital.reverse().join("").replace(/\s/g, "&nbsp;"),
        this.penultimate = this.penultimate.replace(/\s/g, "&nbsp;"),
        this.ultimate = this.ultimate.replace(/\s/g, "&nbsp;")
    }

    finalWords(container, whitespace = false) {
        if (this.penultimate) {
            const child = this.applyEffect("shake-little", this.penultimate, container, "penultimate")
            setTimeout(() => {
                child.className = "settled"
            }, 1000)
        }
        if (this.ultimate) {
            const child = this.applyEffect("shake", this.ultimate, container, "last", whitespace)
            setTimeout(() => {
                child.className = "settled"
            }, 1000)
        }
    }

    applyEffect(effect, text, parent, id, whitespace) {
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
}