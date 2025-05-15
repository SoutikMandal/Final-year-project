document.getElementById("adminSignInForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const institution = document.getElementById("institution").value;
    const adminId = document.getElementById("adminId").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    // Validation for ID format and password
    if (!/^[0-9]{10}$/.test(adminId)) {
        errorMessage.textContent = "Administrative ID must be a 10-digit number.";
        return;
    }
    if (!/^[0-9]{6}$/.test(password)) {
        errorMessage.textContent = "Password must be a 6-digit number.";
        return;
    }

    // If validation passes, redirect to admin dashboard (dummy redirection)
    alert("Sign in successful. Redirecting to the admin portal...");
    window.location.href = "admin_dashboard.html";
});
