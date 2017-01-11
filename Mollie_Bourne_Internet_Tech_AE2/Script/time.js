//Clock

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var d = today.getDate();
    var mth = today.getMonth()+1;
    var y = today.getFullYear();
    m = checkTime(m);
    s = checkTime(s);
    d = checkTime(d);
    mth = checkTime(mth);
    document.getElementById('txt').innerHTML =
    h + ":" + m + ":" + s + " - " + d + "." + mth + "." + y;
    var t = setTimeout(startTime, 800);
}

function checkTime(i){
    if(i < 10) {i = "0" + i}; // add zero in front of numbers <10
    return i;
}