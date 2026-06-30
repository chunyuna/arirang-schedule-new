// 🕒 live clock
function updateClock() {

const now = new Date();

document.getElementById("clock").innerHTML =
now.toLocaleString(undefined, {
weekday:"long",
year:"numeric",
month:"long",
day:"numeric",
hour:"2-digit",
minute:"2-digit",
second:"2-digit"
});

document.getElementById("timezone").innerHTML =
"Timezone: " + Intl.DateTimeFormat().resolvedOptions().timeZone;

}

setInterval(updateClock, 1000);
updateClock();


// 🌍 convert event time → USER LOCAL TIME
function showLocal(eventTime, id) {

const date = new Date(eventTime);

document.getElementById(id).innerHTML =
date.toLocaleString(undefined, {
weekday:"short",
hour:"2-digit",
minute:"2-digit",
hour12:true
});

}


// 🎤 EVENTS (venue time → auto local conversion)
showLocal("2026-08-02T19:00:00", "t1");
showLocal("2026-08-09T19:30:00", "t2");
showLocal("2026-08-16T19:00:00", "t3");
