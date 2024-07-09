const MAIN_CIRCLE = document.querySelector("#mainCircle");
const SPINNING_SQUARE = document.querySelector("#spinningSquare");
const TEXTS_SQUARE = document.querySelector("#textsSquare");

const CTX = MAIN_CIRCLE.getContext("2d");
CTX.beginPath();
CTX.arc(200, 200, 200, 0, 2 * Math.PI);
CTX.stroke();

function createCake(VALUES) {

    TEXTS_SQUARE.innerHTML = "";

    const ANGLE = 2 * Math.PI / VALUES.length; // in radians
    const CAKE_CENTER_X = 200;
    const CAKE_CENTER_Y = 200;
    const RADIUS = 180;

    let pieceNumber = -0.5;

    const CTX_2 = MAIN_CIRCLE.getContext("2d");
    for (let val of VALUES) {
        CTX_2.beginPath();
        CTX_2.moveTo(CAKE_CENTER_X, CAKE_CENTER_Y);
        let coord_x = CAKE_CENTER_X + RADIUS * Math.cos(pieceNumber * ANGLE);
        let coord_y = CAKE_CENTER_Y + RADIUS * Math.sin(pieceNumber * ANGLE);
        CTX_2.lineTo(coord_x, coord_y);

        let valueEntered = document.createElement("p");
        valueEntered.textContent = val;
        let textCircle = document.createElement("div");
        textCircle.appendChild(valueEntered);
        textCircle.classList.add("text-circle");
        textCircle.style.rotate = 180 / VALUES.length * (1 + 2 * pieceNumber) + "deg";
        TEXTS_SQUARE.appendChild(textCircle);

        // Create an arc
        pieceNumber++;
        let arcStart = Math.PI * 2 * (pieceNumber - 1) / VALUES.length;
        let arcEnd = Math.PI * 2 * pieceNumber / VALUES.length;
        CTX_2.arc(CAKE_CENTER_X, CAKE_CENTER_Y, RADIUS, arcStart, arcEnd);
        CTX_2.fillStyle = changeColor();
        CTX_2.fill();
        CTX_2.closePath();
    }
}

createCake(["ONE", "TWO", "THREE"]);

// MAIN_CIRCLE.addEventListener("mouseover", function () { increaseRotateingSpeed(this) });
// MAIN_CIRCLE.addEventListener("mouseout", function () { resetRotateingSpeed(this) });

// function increaseRotateingSpeed(elem) {
//     elem.style.animationDuration = ".2s";
// }

// function resetRotateingSpeed(elem) {
//     elem.style.animationDuration = "3s";
// }

function changeColor() {
    let red = Math.floor(Math.random() * 136) + 120;
    let green = Math.floor(Math.random() * 136) + 120;
    let blue = Math.floor(Math.random() * 136) + 120;
    return "rgb(" + red + ", " + green + ", " + blue + ")";
}

const INDICATOR = document.querySelector("#indicator");

const CTX_3 = INDICATOR.getContext("2d");
CTX_3.beginPath();
CTX_3.moveTo(10, 60);
CTX_3.lineTo(0, 0);
CTX_3.lineTo(20, 0);
CTX_3.closePath();
CTX_3.fillStyle = "#000";
CTX_3.fill();