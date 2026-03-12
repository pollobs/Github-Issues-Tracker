// Demo User
const demoUserName = "admin";
const demoPassword = "admin123";

// Submit Button
const submitBtn = document.getElementById("submitBtn");

// Add Event
submitBtn.addEventListener("click", function () {

    // Input Data
    const userName = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    console.log(userName, password);
    if (userName === demoUserName && password === demoPassword) {
        window.location.href = "job-tarcker.html";
    }

})
