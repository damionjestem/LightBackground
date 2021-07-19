const h = "height";
const w = "width";


/**
 * 
 * @param {string} id - string of element's id 
 * @returns value of element
 */
function getValue(id) {
    return document.getElementById(id).value;
}

function randomColor(){
    function randomHex() {
        let str = Math.round(132+(Math.random()*123)).toString(16)
        return str.length == 1 ? "0" + str : str;
    }
    return "#" + randomHex() + randomHex() + randomHex();
}

/**
 * Function placing bubble into container field
 * @param msg - message to put into bubble
 * @param {string} c - class of div message will appear, "error" by default
 */
function getMessage(msg, c = "error") {
    const container = document.getElementById("content");
    let bubble = document.createElement("div");
    bubble.setAttribute("class", c);
    bubble.innerHTML = msg;
    container.insertAdjacentElement("afterbegin", bubble);
}

function func() {
    const container = document.getElementById("content");
    //reset content
    container.innerHTML = "";
    var height = parseInt(getValue(h));
    var width = parseInt(getValue(w));
    if (!height || !width) {
        getMessage("Oba pola muszą zawierać liczby!");
    }

    function dotStyle(dot) {
        dot.setAttribute("id", j.toString() + i.toString());
        dot.setAttribute("class", "dot");
        dot.style.backgroundColor = randomColor();
    }

    for(var i = 0; i <= height-1; i++){
        let row = document.createElement("div");
        row.setAttribute("class", "row");
        for(var j = 0; j <= width-1; j++){
            let dot = document.createElement("div");
            dotStyle(dot);
            row.appendChild(dot);
        }
        if (container) {
            container.insertAdjacentElement("afterbegin", row);
        }
    }
}
