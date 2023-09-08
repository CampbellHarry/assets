var warningCount = 0;

document.getElementById("addButton").addEventListener("click", function() {
    if (warningCount < 5) {

        warningCount++;

        var timestamp = new Date().toLocaleString();
        var inputField = document.getElementById("inputField");
        var warnText = inputField.value;

        var newWarning = document.createElement("div");
        newWarning.classList.add("warning");

        var warningTitle = "Warning";

        if (warningCount === 3 || warningCount === 4) {
            warningTitle += " - Account Suspension";
        } else if (warningCount === 5) {
            warningTitle += " - Permanent Ban";
        }

        var warningMessage = "<h2>" + warningTitle + "</h2><p><strong>Timestamp:</strong> " + timestamp + "</p><p><strong>Reason:</strong> " + warnText + "</p>";

        newWarning.innerHTML = warningMessage;

        var linepoint = document.getElementById("linepoints" + warningCount);
        linepoint.style.transform = "scale(1.2)";

        var actionsContainer = document.getElementById("actions" + warningCount);
        actionsContainer.appendChild(newWarning);

        linepoint.classList.remove("hidden");

        var line = document.getElementById("line" + warningCount);
        line.classList.remove("hidden");

        var linepoint = document.getElementById("linepoints" + warningCount);
        linepoint.style.transform = "scale(1.2)";

        var linepointz = document.getElementById("linepointz");
        linepointz.classList.remove("hidden");

        // Remove previous warning level classes
        for (var i = 1; i <= 5; i++) {
            linepointz.classList.remove("pfpwar" + i);
        }

        // Add the new warning level class
        linepointz.classList.add("pfpwar" + warningCount);

    } else {
        alert("You've reached the maximum number of warnings (5).");
    }
});
