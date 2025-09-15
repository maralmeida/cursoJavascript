let userRole = "admin";
let accessLevel;
let isLoggedIn = true;
let userMessage;
let userType = "suscriber";
let userCategory;

if (userRole === "admin") {
    accessLevel = "Full access granted";
} else if (userRole === "manager") {
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}
console.log("Access Level:", accessLevel);

if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome, User!";
    }
} else {
    userMessage = "Please log in to access the system.";
}
console.log("user Message:",userMessage);

switch (userType){
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager"; 
        break;
    case "suscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";;
}
console.log("User Category:", userCategory);