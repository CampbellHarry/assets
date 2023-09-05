var isWarning = false;

function updateWarningText() {
    var warningTextElement = document.getElementById("warningText");
    var warningHeadElement = document.getElementById("warn");
    var warnBoxElement = document.querySelector(".warnbox");
    var blurry = document.querySelector(".warnbox p")
    var smallt = document.getElementById("small")

    if (isWarning) {
        warningTextElement.textContent = "Attention This is a urgent Message.";
        warningHeadElement.textContent = "Urgent Message";
        warnBoxElement.style.borderColor = "red";
        blurry.style.textShadow = "0 0 10px white"
        smallt.textContent = "Click to acknowledge"
    } else {
        warningTextElement.textContent = "Sorted this urgent Message";
        warningHeadElement.textContent = "Resolved";
        warnBoxElement.style.borderColor = "green";
        blurry.style.textShadow = "0 0 0px white"
        smallt.textContent = "Click to review message."
    }
    isWarning = !isWarning;
}