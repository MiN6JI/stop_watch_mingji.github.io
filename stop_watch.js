//Global variables
const timeOut = document.querySelector('.watch .time');
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const resetBtn = document.getElementById('reset');

//let variables
let seconds = 0;
let intervals = null;

//Event Listensers
startBtn.addEventListener('click', start);
stopBtn.addEventListener('click', stop);
resetBtn.addEventListener('click', reset);

//Update the timer
function timer(){
    seconds++;

    //format our time
    let hrs = Math.floor( seconds / 3600);
    let mins = Math.floor((seconds - (hrs * 3600)) / 60);
    let secs = seconds % 60;
    
    if(secs < 10) secs = '0' + secs;
    if(mins < 10) mins = '0' + mins;
    if(hrs < 10) hrs = '0' + hrs;

    timeOut.innerHTML = `${hrs}:${mins}:${secs}`;
}

function start(){
    if(intervals){
        return
    }

    intervals = setInterval(timer, 1000);
}

function stop(){
    clearInterval(intervals);
    intervals = null;
}

function reset(){
    stop();
    seconds = 0;
    timeOut.innerHTML = '00:00:00'
}