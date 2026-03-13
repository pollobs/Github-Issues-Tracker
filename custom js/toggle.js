// Get buttons

const allButtons = document.getElementById("all");
const openButtons = document.getElementById("open");
const closedButtons = document.getElementById("closed");

// Create Click Function

function clickButton(id) {
    if (id === "all") {
        allButtons.classList.add("active");
        openButtons.classList.remove("active");
        closedButtons.classList.remove("active");
    } else if (id === "open") {
        openButtons.classList.add("active");
        allButtons.classList.remove("active");
        closedButtons.classList.remove("active");
    } else if (id === "closed") {
        closedButtons.classList.add("active");
        allButtons.classList.remove("active");
        openButtons.classList.remove("active");
    }

}