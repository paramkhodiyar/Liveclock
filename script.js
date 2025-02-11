setInterval(() => {
    let now = new Date();
    if (now.getSeconds() === 0) {
        console.log(now.toLocaleTimeString());
    }
}, 1000);

function updateTime() {
    const timeElement = document.getElementById('time');
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const colon = now.getSeconds() % 2 === 0 ? ':' : ' ';
    timeElement.textContent = `${hours}${colon}${minutes}${colon}${seconds}`;
}

function updateDate() {
    const dateElement = document.getElementById('date');
    const now = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    dateElement.textContent = now.toLocaleDateString(undefined, options);
}

setInterval(updateTime, 1000);
updateTime();

updateDate();
setInterval(updateDate, 24 * 60 * 60 * 1000);
