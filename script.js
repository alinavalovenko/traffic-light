var lamps = document.getElementsByClassName('traffic-light-lamp');
var number = document.createElement('div');
number.style.cssText = 'display: flex; justify-content: center; align-items: center; width: 100%; height: 100%; font-size: 20px; color: #fff; font-weight: 700;';
lamps[2].appendChild(number);

var TIMER_STOP = false,
    TIMER_PAUSE = false,
    TIMER_PAUSE_STEP = 0,
    TIMER_PAUSE_COLOR = '';

var durationRed = 20, durationYellow = 5, durationGreen = 15;

function timer(duration, colorClass) {

    if(TIMER_STOP) {
        return;
    } else if(TIMER_PAUSE) {
        TIMER_PAUSE_STEP = duration;
        TIMER_PAUSE_COLOR = colorClass;
        return;
    }

    if(duration < 1) {
        nextLamp(colorClass);
        return;
    }

    if(colorClass === 'green') {
        number.innerText = duration;
    }

    console.log(duration + ' - ' + colorClass);

    setTimeout(function() {
        timer(--duration, colorClass);
    }, 1000);

}

function nextLamp(colorClass) {

    var nextColor, duration;

    if(colorClass === 'red') {
        nextColor = 'yellow';
        duration = durationYellow;
    } else if(colorClass === 'yellow') {
        nextColor = 'green';
        duration = durationGreen;
    } else {
        nextColor = 'red';
        duration = durationRed;
        number.innerText = '';
    }

    timer(duration, nextColor);
    paintLamp(nextColor);

}

function paintLamp(colorClass) {

    if(colorClass === 'red') {
        lamps[2].classList.remove('green');
        lamps[0].classList.add('red');
    } else if(colorClass === 'yellow') {
        lamps[0].classList.remove('red');
        lamps[1].classList.add('yellow');
    } else if(colorClass === 'green'){
        lamps[1].classList.remove('yellow');
        lamps[2].classList.add('green');
    } else {
        lamps[0].className = 'traffic-light-lamp';
        lamps[1].className = 'traffic-light-lamp';
        lamps[2].className = 'traffic-light-lamp';
    }

}

document.querySelector('.traffic-light-start').addEventListener('click', function() {


    if(TIMER_PAUSE) {

        TIMER_STOP = false;
        TIMER_PAUSE = false;

        timer(TIMER_PAUSE_STEP, TIMER_PAUSE_COLOR);
        paintLamp(TIMER_PAUSE_COLOR);

        TIMER_PAUSE_STEP = 0;
        TIMER_PAUSE_COLOR = '';

    } else {

        TIMER_STOP = false;
        TIMER_PAUSE = false;
        TIMER_PAUSE_STEP = 0;
        TIMER_PAUSE_COLOR = '';

        timer(durationRed, 'red');
        paintLamp('red');
    }

});

document.querySelector('.traffic-light-pause').addEventListener('click', function() {

    if(!TIMER_STOP) {
        TIMER_PAUSE = true;
    }

});

document.querySelector('.traffic-light-stop').addEventListener('click', function() {

    TIMER_STOP = true;
    TIMER_PAUSE = false;
    paintLamp();

});