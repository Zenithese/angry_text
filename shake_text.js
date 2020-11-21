class ShakeText {
    constructor(text) {
        this.text = text.replace(/\s/g, " ")
    }

    parse() {

        let penultimate = "", ultimate = ""

        const reversed = this.text.split("").reverse()
        for (let word = 0; word < 2 && reversed.length;) {
            const char = reversed.shift()
            if (!word) ultimate = char + ultimate
            else penultimate = char + penultimate
            if (char === " ") word++
        }

        return [
            reversed.reverse().join("").replace(/\s/g, "&nbsp;"),
            penultimate.replace(/\s/g, "&nbsp;"),
            ultimate.replace(/\s/g, "&nbsp;")
        ]
    }
}