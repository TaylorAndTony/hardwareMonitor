function setCpuVal(value) {
    document.getElementById("cpu").innerHTML = value + "%";
    // value: 12.7%
    // num: 12
    var num = parseInt(value);
    // first: 1
    var first = parseInt(num / 10);
    if (first > 9){
        first = 9;
    }
    var c = [
        "#477066",  // 0
        "#02774f",  // 1
        "#285b41",  // 2
        "#07817a",  // 3
        "#0b2d64",  // 4
        "#3f4470",  // 5
        "#732e7e",  // 6
        "#99004d",  // 7
        "#ce3b3b",  // 8
        "#f52443",  // 9
    ];
    changeBgColor(c[first]);
}
// auto set, callback of setInterval
function autoCpuVal() {
    fetch("http://127.0.0.1:8080/cpu")
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
// setInterval(autoCpuVal, 4000);
// autoCpuVal();
setInterval(clock, 1000);
clock();