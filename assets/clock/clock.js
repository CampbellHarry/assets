// Calling showTime function at every second
setInterval(showTime, 1000);

let is24hr = false;

// Defining showTime funcion
function showTime() {
    // Getting current time and date
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    let am_pm = " AM";

    // Setting time for 12 Hrs format
    if (!is24hr) {
        if (hour >= 12) {
            if (hour > 12) hour -= 12;
            am_pm = " PM";
        } else if (hour == 0) {
            hr = 12;
            am_pm = " AM";
        }
    } else {
        am_pm = "";
    }

    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    let currentTime = hour + ":" + min + ":" + sec + am_pm;

    // Displaying the time
    document.getElementById("clock").innerHTML = currentTime;
}

showTime();

function getDate() {
    let date = new Date();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let year = date.getFullYear();
    let currentDate = month + " / " + day + " / " + year;
    return currentDate;
}

let date = new Date();
let dayOfWeek = date.toLocaleDateString("en-US", { weekday: "long" });

let month = date.toLocaleDateString("en-US", { month: "long" });

let st = "st";
let nd = "nd";
let rd = "rd";
let th = "th";

let wat =
    date.getDate() == 1
        ? st
        : date.getDate() == 2
        ? nd
        : date.getDate() == 3
        ? rd
        : th;

let full =
    dayOfWeek + " the " + date.getDate() + wat + " " + month + ", " + date.getFullYear();

document.getElementById("datee").innerHTML = full;

// Displaying the date
document.getElementById("date").innerHTML = getDate();

// Get the button element
const button = document.getElementById("myButton");

// Add an onclick event to the button
btn.onclick = function () {
    is24hr = !is24hr;
    setInterval(1000)
        document.getElementById("btn").innerHTML = is24hr ? "24hr" : "12hr";
};
