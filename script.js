// Function to navigate based on role
function navigateTo(role) {
    switch(role) {
        case 'admin':
            window.location.href = 'admin_dashboard.html'; // Admin dashboard
            break;
        case 'teacher':
            window.location.href = 'teacher_dashboard.html'; // Teacher dashboard
            break;
        case 'student':
            window.location.href = 'student_dashboard.html'; // Student exam page
            break;
        default:
            alert("Invalid role selected!");
    }
}
