function setCpuVal(value) {
    document.getElementById("cpu").innerHTML = value + "%";
    num = parseInt(value);
    if (num < 10) { changeBgColor("#373853"); }
    else if (num < 20) { changeBgColor("#453753"); }
    else if (num < 30) { changeBgColor("#59643b"); }
    else if (num < 40) { changeBgColor("#64583b"); }
    else if (num < 50) { changeBgColor("#856e32"); }
    else if (num < 60) { changeBgColor("#a05f42"); }
    else if (num < 70) { changeBgColor("#a04297"); }
    else if (num < 80) { changeBgColor("#d84389"); }
    else if (num < 90) { changeBgColor("#ee3f45"); }
    else {
        changeBgColor("#ee0008");
    }
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
// main
setInterval(autoCpuVal, 4000);
autoCpuVal();