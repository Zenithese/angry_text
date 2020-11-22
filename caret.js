class Caret {
    constructor() {
        this.selection
        if (window.getSelection && (this.selection = window.getSelection()).rangeCount) {
            this.range = this.selection.getRangeAt(0)
            this.parentNode = this.range.startContainer.parentNode
            this.startOffset = this.range.startOffset
            this.anchorNode = this.selection.anchorNode
        }
    }

    place() {
        if (this.parentNode.id === "rich_text") {
            this.range.setStart(this.parentNode.firstChild, this.startOffset);
            this.range.collapse(true);
            this.selection.removeAllRanges();
            this.selection.addRange(this.range);
        }

        if (this.parentNode.id === "penultimate") {
            this.range.setStart(document.getElementById("rich_text").children[0].firstChild, this.startOffset);
            this.range.collapse(true);
            this.selection.removeAllRanges();
            this.selection.addRange(this.range);
        }

        if (this.parentNode.id === "last") {
            this.range.setStart(document.getElementById("rich_text").lastChild.firstChild, this.startOffset);
            this.range.collapse(true);
            this.selection.removeAllRanges();
            this.selection.addRange(this.range);
        }
    }

    whitespace() {
        const range = new Range;
        const span = document.getElementById("last")
        range.setStartAfter(span);
        range.collapse(true);
        this.selection.removeAllRanges();
        this.selection.addRange(range);
    }
}

