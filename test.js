function format(text) {

    let penultimate = "", ultimate = ""

    const reversed = text.split("").reverse()
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

function test(event) {
    if (event.keyCode == 16) { // Execute command if user presses the SHIFT button:
        // const caret = new Caret
        // console.log(caret)
        console.log(document.getElementById("rich_text").innerText)
        console.log(document.getElementById("penultimate").innerText)
        console.log(document.getElementById("last").innerText)
    }

    // if (event.keyCode == 32) { // Execute command if user presses the SPACEBAR button:
    //     debugger
    // }
}

console.log(format("this i. s"))