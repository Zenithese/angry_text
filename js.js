function fill() {

    let characters = document.getElementById('text').innerText.split(" ")
    let last = characters.pop()
    let settling = characters.pop()

    document.getElementById("fill").innerHTML = ""
    
    characters.forEach((character) => {
        const child = document.createElement("span")
        document.getElementById("fill").appendChild(child)
        child.innerHTML = character + "&nbsp;"
    })

    if (settling) {
        let child = document.createElement("span")
        document.getElementById("fill").appendChild(child)
        child.innerHTML = settling + "&nbsp;"
        child.className = "shake-little"
        setTimeout(() => {
            child.className = ""
        }, 1000)
    }

    if (last) {
        let child = document.createElement("span")
        document.getElementById("fill").appendChild(child)
        child.innerHTML = last
        child.className = "shake"
        setTimeout(() => {
            child.className = ""
        }, 1000)
    }

}

// function command() {
//     document.execCommand('bold');
// }

// function test(event) {
//     if (event.keyCode == 16) { // Execute command if user presses the SHIFT button:
//         // document.execCommand('bold');
//         // applyEffect("shake", document.getSelection().toString())
//     }
// }