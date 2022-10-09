const cdmDate = new Date('2022-11-20').getTime()

function newDate() {
    const currentDate = new Date().getTime(); 
    const diff = cdmDate - currentDate

    const seconds = 1000;
    const minutes = seconds * 60
    const hours = minutes * 60
    const days = hours * 24;

    const d = Math.floor(diff / (days));
    const h = Math.floor((diff % (days)) / (hours));
    const m = Math.floor((diff % (hours)) / (minutes));
    const s = Math.floor((diff % (minutes)) / (seconds));

    document.getElementById('days').innerText = d;
    document.getElementById('hours').innerText = h < 10 ? "0" + h : h
    document.getElementById('minutes').innerText = m < 10 ? "0" + m : m;
    document.getElementById('seconds').innerText = s;
}


setInterval(function() {
    newDate()
}, 1000)

