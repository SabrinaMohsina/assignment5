

// Get the current date and time
const now = new Date();

// Extract the local time components
const hours = now.getHours(); // Hours (0-23)
const minutes = now.getMinutes(); // Minutes (0-59)
const seconds = now.getSeconds(); // Seconds (0-59)

// Format the time as HH:MM:SS
const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

console.log("Current Local Time:", formattedTime);