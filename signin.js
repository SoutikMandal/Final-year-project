document.getElementById("signinForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const id = document.getElementById("id").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    // Basic validation for numeric fields
    if (!/^[0-9]{12}$/.test(id)) {
        errorMessage.textContent = "ID number must be a 12-digit number.";
        return;
    }
    if (!/^[0-9]{6}$/.test(password)) {
        errorMessage.textContent = "Password must be a 6-digit number.";
        return;
    }

    // If all checks pass, redirect to the exam portal (dummy redirection)
    alert("Sign in successful. Redirecting to the exam portal...");
    // window.location.href = "student_exam_portal.html";
    window.location.href = "futuristic.html";
});
