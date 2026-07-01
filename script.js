function showLocalTime(eventTime, elementId) {

    const date = new Date(eventTime);

    document.getElementById(elementId).innerHTML =
        date.toLocaleString(undefined, {
            weekday: "short",
            day: "2-digit",
            month: "short",
            hour: "2-digit",
            minute: "2-digit",
            hour12: true
        });
}


// EVENTS (ONLY ONE TIME SOURCE)
showLocalTime("2026-08-02T19:00:00+08:00", "t1");
showLocalTime("2026-08-09T19:30:00+08:00", "t2");
showLocalTime("2026-08-16T19:00:00+07:00", "t3");
showLocalTime("2026-07-18T19:00:00+02:00", "t4");
showLocalTime("2026-07-25T19:30:00+01:00", "t5");
