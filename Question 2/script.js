//Task 1


function countdown(duration) {
    let timerDisplay = document.getElementById('timerDisplay');
    let timeRemaining = duration;


    timerDisplay.textContent =  "Seconds remaining:" + timeRemaining;


    let countdownInterval = setInterval(() => {
        timeRemaining--;
        timerDisplay.textContent =  "Seconds remaining:" + timeRemaining;


        if (timeRemaining <= 0) {
            clearInterval(countdownInterval);
            alert('Countdown complete!');
        }
    }, 1000); 
}

countdown(30)



//Task 2

function displayNotification () {
    setTimeout(function () {
        alert("Display Message");
    }, 2000)}

displayNotification()


// //Task 3

document.addEventListener('DOMContentLoaded', () => {
    const notification = document.getElementById('notification');
    const dismissButton = document.getElementById('dismissButton');
    let notificationInterval;

    // Display notification every 5 seconds
    notificationInterval = setInterval(() => {
        notification.style.display = 'block';
    }, 1000); // Interval in milliseconds (5 seconds)

    // Dismiss button click event listener
    dismissButton.addEventListener('click', () => {
        clearInterval(notificationInterval);
        notification.style.display = 'none';
    });
});