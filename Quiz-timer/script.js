// Get the progress element
let progressElement = document.getElementById("progress");
progressElement.value = 100;

// Get the initial time from the data-label attribute
let initialTime = progressElement.getAttribute("data-label");

// Convert the initial time to seconds
let timeInSeconds = convertTimeToSeconds(initialTime);
const actualTime = timeInSeconds;

// Start the timer
let timer = setInterval(function() {
  // Convert the time to hours, minutes, and seconds
  let hours = Math.floor(timeInSeconds / 3600);
  let minutes = Math.floor((timeInSeconds % 3600) / 60);
  let seconds = timeInSeconds % 60;

  // Format the time with leading zeros
  let formattedTime = formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds);

  // Update the data-label attribute and the text content
  progressElement.setAttribute("data-label", formattedTime);
  progressElement.textContent = formattedTime;

  // Check if the timer has reached 0
  if (timeInSeconds <= 0) {
    clearInterval(timer);
    progressElement.textContent = "Time's up!";
  }
  
  // Decrement the time by 1 second
  timeLeft = timeInSeconds--;
  timeLeft;
  
  const progressHandler = function () {
    let timeLeftInPercent = (timeLeft / actualTime) * 100;
    progressElement.value = timeLeftInPercent;
  }
  
  progressHandler();
}, 1000); // Update the timer every second (1000 milliseconds)

// Function to convert time in the format "hh:mm:ss" to seconds
function convertTimeToSeconds(time) {
  let parts = time.split(":");
  let hours = parseInt(parts[0]);
  let minutes = parseInt(parts[1]);
  let seconds = parseInt(parts[2]);
  return hours * 3600 + minutes * 60 + seconds;
}

// Function to format time with leading zeros
function formatTime(time) {
  return time < 10 ? "0" + time : time;
}