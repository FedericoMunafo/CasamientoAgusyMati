const $days = document.getElementById('days'),
$hours = document.getElementById('hours'),
$minutes = document.getElementById('minutes'),
$seconds = document.getElementById('seconds'),
$finalMessage = document.querySelector('.final.sms');

//Fechaa a futuro
const countdownDate = new Date('Mar 04, 2023 17:00:00').getTime();

let interval = setInterval(function(){
    const now = new Date().getTime();

    let distance = countdownDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    let minutes = Math.floor((distance % (1000 * 60 * 60))/ (1000*60));
    let seconds = Math.floor((distance % (1000 * 60))/ (1000));

    $days.innerHTML = days;
    $hours.innerHTML = hours,
    $minutes.innerHTML = minutes;
    $seconds.innerHTML = ('0' + seconds).slice(-2);
},1000);