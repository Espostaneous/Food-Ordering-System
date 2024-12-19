function confirmLogout() {
    // Prompt the user for confirmation
    if (confirm("Do you want to log out?")) {
        // If user confirms, redirect to logout PHP script
        window.location.href = "client/logout.php?logout=true";
    }
}
