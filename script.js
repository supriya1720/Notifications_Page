function notifs(y) {
    var x = document.getElementById("first-num").textContent;
    if(x - y > 0){
        document.getElementById("first-num").innerHTML = x - y;
    }
    else{
        document.getElementById("second-block").style.display="none";
    }
}

function unread1(){
    document.getElementById("first-msg").style.backgroundColor="white";
    document.getElementById("red-dot1").style.display="none";
}

function unread2(){
    document.getElementById("second-msg").style.backgroundColor="white";
    document.getElementById("red-dot2").style.display="none";
}

function unread3(){
    document.getElementById("third-msg").style.backgroundColor="white";
    document.getElementById("red-dot3").style.display="none";
}