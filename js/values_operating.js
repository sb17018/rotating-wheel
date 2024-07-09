const VALUES = [];

const VALUE_EXISTS_PROMPT = document.querySelector("#valueExistsDialog");

function enterValue(ELEM) {
    let val = ELEM.value.toUpperCase();
    if (!VALUES.includes(val)) {
        VALUES.push(val);
        ELEM.value = "";
        VALUE_EXISTS_PROMPT.textContent = "";
    } else {
        VALUE_EXISTS_PROMPT.textContent = "Value exists, enter another.";
    }
}

const VALUES_DISPLAYED = document.querySelector("#valueEntered");

function showEnteredValue() {
    VALUES_DISPLAYED.innerHTML = "";
    for (let val of VALUES) {
        let listElem = document.createElement("li");
        listElem.innerHTML = "<p>" + val + "</p>";
        VALUES_DISPLAYED.appendChild(listElem);
    }
}

function enterShowValues(val) {
    enterValue(val);
    showEnteredValue();
    createCake(VALUES);
}