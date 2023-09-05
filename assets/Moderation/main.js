// main.js

// Function to update the moderation notification with user input
function updateNotification(e) {
    e.preventDefault();

    // Get user input values
    var username = document.getElementById("userr").value;
    var time = document.getElementById("timee").value;
    var modnote = document.querySelector('[name="moderation"]').value;
    var reason = document.getElementById("reasonn").value;
    var prohibited = document.getElementById("prooff").value;


    var actions = "";
    switch (modnote) {
        case "Moderation Action discussed":
            actions = "No action taken (Warning)";
            break;
        case "Username Violates":
            actions = "Account Deletion";
            break;
        case "Spamming":
            actions = "Chat Limited for 2 days";
            break;
        case "Illegal content":
            actions = "Reported to Police and Account Ban";
            break;
        case "Discrimination":
            actions = "Account Suspension for 2 days";
            break;
        case "Scamming":
            actions = "Account Ban";
            break;
        case "Hacking":
            actions = "Account Ban";
            break;
        default:
            actions = "No action specified";
    }

    // Update the notification elements with user input and determined action
    document.getElementById("username").textContent = username;
    document.getElementById("time").textContent = "Reviewed at: " + time + " LOCAL TIME";
    document.getElementById("modnote").textContent = modnote;
    document.getElementById("reason").textContent = reason;
    document.getElementById("prohibited").textContent = prohibited;
    document.getElementById("actions").textContent = actions;
}

// Event listener to trigger the updateNotification function when the form is submitted
document.getElementById("moderationForm").addEventListener("submit", function (e) {
    updateNotification(e);
});
