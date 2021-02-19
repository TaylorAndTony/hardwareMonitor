function setCpuVal(value) {
    document.getElementById("cpu").innerHTML = value + "%";
    // value: 12.7%
    // num: 12
    var num = parseInt(value);
    // first: 1
    var first = parseInt(num / 10);
    if (first > 9) {
        first = 9;
    }
    var c = [
        "#1d2d50",  // 0
        "#263b68",  // 1
        "#2d4477",  // 2
        "#354f8a",  // 3
        "#3e5a99",  // 4
        "#4464ac",  // 5
        "#6244ac",  // 6
        "#7c44ac",  // 7
        "#a044ac",  // 8
        "#ac4485",  // 9
    ];
    changeBgColor(c[first]);
}
// auto set, callback of setInterval
function autoCpuVal() {
    fetch("http://127.0.0.1:8080/info")
        .then(response => response.json())
        .then(json => setCpuVal(json.usage));
}
// change background color gradually
function changeBgColor(color) {
    var obj = document.body;
    obj.style.background = color;
}
function clock() {
    date = new Date();
    hour = date.getHours();
    minute = date.getMinutes();
    second = date.getSeconds();
    if (second < 10) {
        second = '0' + second;
    }
    if (minute < 10) {
        minute = '0' + minute;
    }
    if (hour < 10) {
        hour = '0' + hour;
    }
    var timeStr = `${hour}:${minute}:${second}`;
    document.getElementById("clock").innerHTML = timeStr;
}
// main
setInterval(autoCpuVal, 4000);
autoCpuVal();
setInterval(clock, 1000);
clock();