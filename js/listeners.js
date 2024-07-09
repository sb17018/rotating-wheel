const INPUT_FIELD = document.querySelector("#valueInput");

INPUT_FIELD.addEventListener("change", function () { enterShowValues(this) });

const SPINNING_BTN = document.querySelector("#spinningBtn");

// SPINNING_SQUARE taken from "circle_generation.js"
let duration = 0;
let rotationStart = 0;
let rotationEnd = 375;

SPINNING_BTN.addEventListener("click", () => {
    SPINNING_SQUARE.classList.add("running");
    // SPINNING_SQUARE.style.animationDuration = duration + "s";
    setInterval(() => {
        duration += .2;
        console.log(duration);
        console.log(rotationStart);
        SPINNING_SQUARE.style.setProperty("--rotation-start", rotationStart + "deg");
        SPINNING_SQUARE.style.setProperty("--rotation-end", rotationEnd + "deg");
        SPINNING_SQUARE.style.setProperty("--rotation-duration", duration + "s");
        rotationStart = rotationEnd;
        if (rotationStart = 7500) rotationStart = 0;
        rotationEnd = rotationStart + 375;
    }, duration * 1000);
});


