/**
 * Created by evgeni.tsn on 31-Mar-16.
 */

function clock(){
    var time = new Date();
    var hours = time.getHours().toString();
    var minutes = time.getMinutes().toString();
    var seconds = time.getSeconds().toString();

    if (minutes<10){
        minutes = "0" + minutes;
    }

    if (seconds<10){
        seconds = "0" + seconds;
    }

    document.getElementById("time").innerHTML = hours+":"+minutes+":"+seconds;
}
setInterval("clock()", 1000);