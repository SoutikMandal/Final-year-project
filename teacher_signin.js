document.getElementById("teacherSignInForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const subjectName = document.getElementById("subjectName").value;
    const subjectCode = document.getElementById("subjectCode").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    // Validation for subject code format and password
    if (!/^[A-Z]{2}[0-9]{6}$/.test(subjectCode)) {
        errorMessage.textContent = "Subject code must be in the format AA123456.";
        return;
    }
    if (!/^[0-9]{6}$/.test(password)) {
        errorMessage.textContent = "Password must be a 6-digit number.";
        return;
    }

    // If validation passes, redirect to teacher dashboard (dummy redirection)
    alert("Sign in successful. Redirecting to the teacher portal...");
    window.location.href = "teachernew.html";
});
