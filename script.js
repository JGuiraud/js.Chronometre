$(document).ready(function(){

/* ------- classe Chrono ------- */
function Chrono(currentTime) {
    this.time = currentTime;
    this.start = function(){
    timer();
    }
    this.pause = function(){
    pause();
    }
    this.stop = function(){
    stop();
    }
}

/* ------- Bouttons ------- */
var Chronometre = new Chrono(0);
var counter;
$("#pause").hide();
$("#start").click(function(){
    counter = setInterval(timer, 1000);
    Chronometre.start();
    $("#start").hide();
    $("#pause").show();
})
$("#pause").click(function(){
    Chronometre.pause();
    $("#start").show();
    $("#pause").hide();
})
$("#stop").click(function(){
    Chronometre.stop();
    $("#pause").hide();
    $("#start").show();
})

/* ------ timer -------- */
function timer(){
    Chronometre.time +=1
    var hour = Math.floor(Chronometre.time /3600);
    var minute = Math.floor((Chronometre.time - hour*3600)/60);
    var seconds = Chronometre.time - (hour*3600 + minute*60);
        // if (seconds<10) {
        //     seconds = "0" + seconds;
        // }
        // if (minute<10) {
        //     minute = "0" + minute;
        // }
        // if (hour<10) {
        //     hour = "0" + hour;
        // }
    $("#timer").html(hour + ":" + minute + ":" + seconds);  
}

/* ------- pause --------*/
function pause (){
    clearInterval(counter);
}

/* ------- stop ------- */
function stop(){
    clearInterval(counter);
    Chronometre.time = 0;
    $("#timer").html("00:00:00");
}


});

