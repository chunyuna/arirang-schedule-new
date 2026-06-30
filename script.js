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


// 🌍 Multi-timezone converter
function showTimes(dateStr, ids) {

const date = new Date(dateStr);

function format(tz){
return date.toLocaleString("en-US", {
hour:"2-digit",
minute:"2-digit",
hour12:true,
timeZone: tz
});
}

document.getElementById(ids.kl).innerHTML =
format("Asia/Kuala_Lumpur");

document.getElementById(ids.tokyo).innerHTML =
format("Asia/Tokyo");

document.getElementById(ids.london).innerHTML =
format("Europe/London");

document.getElementById(ids.local).innerHTML =
date.toLocaleString(undefined, {
hour:"2-digit",
minute:"2-digit",
hour12:true
});

}


// Events
showTimes("2026-08-02T19:00:00", {
kl:"kl1",
tokyo:"tokyo1",
london:"london1",
local:"local1"
});

showTimes("2026-08-09T19:30:00", {
kl:"kl2",
tokyo:"tokyo2",
london:"london2",
local:"local2"
});

showTimes("2026-08-16T19:00:00", {
kl:"kl3",
tokyo:"tokyo3",
london:"london3",
local:"local3"
});