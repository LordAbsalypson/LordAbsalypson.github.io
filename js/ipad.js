function powerMe() {
    document.getElementById("inAppBar").style.bottom = "-8%";
    document.getElementById("inAppBar").style.pointerEvents = "none";
    document.getElementsByClassName("wallpaper")[0].style.backgroundImage =
        "url('https://assets.codepen.io/2722301/bg.jpg')";
    if (powerVar == 1) {
        document.getElementsByClassName("ipadScreen")[0].style.opacity = 1;
        document.getElementsByClassName("ipadScreen")[0].style.pointerEvents =
            "all";
        powerVar = 0;
        document.getElementsByClassName("lockScreen")[0].style.transition =
            "top 800ms ease-in 0s, backdrop-filter 200ms ease-in 0s";
        document.getElementsByClassName("dockWrapper")[0].style.transition =
            "bottom 400ms ease-in-out 0s";
    } else {
        document.getElementsByClassName("ipadScreen")[0].style.opacity = 0;
        document.getElementsByClassName("ipadScreen")[0].style.pointerEvents =
            "none";
        powerVar = 1;
        setTimeout(function () {
            document.getElementsByClassName("lockScreen")[0].style.transition =
                "none";
            document.getElementsByClassName("dockWrapper")[0].style.transition =
                "none";
            document.getElementsByClassName("lockScreen")[0].style.backdropFilter =
                "blur(0)";
            document.getElementsByClassName("lockScreen")[0].style.top = "0";
            document.getElementsByClassName("dockWrapper")[0].style.bottom = "-20%";
        }, 300);
    }
    resetIcons();
}
function lockClick() {
    document.getElementsByClassName("lockScreen")[0].style.backdropFilter =
        "blur(2vh) brightness(1.2)";
    document.getElementsByClassName("lockScreen")[0].style.top = "-110%";
    document.getElementsByClassName("dockWrapper")[0].style.bottom = "3%";
}
function checkTime() {
    var day = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];
    var month = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];
    d = new Date();
    if (d.getMinutes() < 10) {
        minTime = "0" + d.getMinutes();
    } else {
        minTime = d.getMinutes();
    }
    document.getElementsByClassName("lockTime")[0].innerHTML =
        d.getHours() +
        ":" +
        minTime +
        "<br/>" +
        day[d.getDay()] +
        ", " +
        month[d.getMonth()] +
        " " +
        d.getDate();
    setTimeout(function () {
        checkTime();
    }, 500);
}
powerVar = 0;
setTimeout(function () {
    document.getElementsByClassName("ipadScreen")[0].style.opacity = 1;
}, 1000);