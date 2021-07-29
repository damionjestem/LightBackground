const h = "height";
const w = "width";
var entityMap = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
    "/": "&#x2F;",
};

function escapeHtml(string) {
    return String(string).replace(/[&<>"'\/]/g, function (s) {
        return entityMap[s];
    });
}

/**
 *
 * @param {string} id - string of element's id
 * @returns value of element
 */
function getValue(id) {
    return document.getElementById(id).value;
}

function randomColor() {
    function randomHex() {
        let str = Math.round(132 + Math.random() * 123).toString(16);
        return str.length == 1 ? "0" + str : str;
    }
    return "#" + randomHex() + randomHex() + randomHex();
}

/**
 * Function placing bubble into output field
 * @param msg - message to put into bubble
 * @param {string} c - class of div message will appear, "error" by default
 */
function getMessage(msg, c = "error") {
    const parentDiv = document.getElementById("dots-output");
    let bubble = document.createElement("div");
    bubble.setAttribute("class", c);
    bubble.innerHTML = msg;
    parentDiv.insertAdjacentElement("afterbegin", bubble);
}

function codeReveal(element) {
    const outputDiv = document.getElementById("code-output");
    let codeOutput = document.createElement("code");
    codeOutput.innerHTML = escapeHtml(element.innerHTML);
    outputDiv.insertAdjacentElement("afterbegin", codeOutput);
}

function func() {
    const output = document.getElementById("dots-output");
    //reset content of output
    output.innerHTML = "";
    var height = parseInt(getValue(h));
    var width = parseInt(getValue(w));

    if (height && width) {
        function createDot(dot) {
            dot.setAttribute("id", j.toString() + i.toString());
            dot.setAttribute("class", "dot");
            dot.style.backgroundColor = randomColor();
        }

        for (var i = 0; i <= height - 1; i++) {
            let row = document.createElement("div");
            row.setAttribute("class", "dots-row");
            for (var j = 0; j <= width - 1; j++) {
                let dot = document.createElement("div");
                createDot(dot);
                row.appendChild(dot);
            }
            if (output) {
                output.insertAdjacentElement("afterbegin", row);
            }
        }
        codeReveal(output);
    } else getMessage("Oba pola muszą zawierać liczby!");
}
