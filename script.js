var hours = document.querySelector('#hours');
var minutes = document.querySelector('#minutes');
var seconds = document.querySelector('#seconds');
var amPm = document.querySelector('#amPm');

function clock() {
    var currentHours = new Date().getHours();
    var currentMinutes = new Date().getMinutes();
    var currentSeconds = new Date().getSeconds();

    if (currentHours < 12) {
        if (currentHours < 10) {
            currentHours = '0' + currentHours;
        }

        else if (currentMinutes < 10) {
            currentMinutes = '0' + currentMinutes;
        }

        else if (currentSeconds < 10) {
            currentSeconds = '0' + currentSeconds;
        }
    }
    else {
        currentHours = currentHours - 12;
        amPm.innerText = "pm";
    }

    hours.innerText = currentHours;
    minutes.innerText = currentMinutes;
    seconds.innerText = currentSeconds;

    setTimeout(() => {
        clock();
    }, 1000);
}

clock();