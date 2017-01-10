/**
 * Created by Rocky-Wang on 2017/1/10.
 */
var timer = null;
function MoveToDiv(speed) {
    var oDiv1 = document.getElementById('div1');

    speed = parseInt(speed);
    if (isNaN(speed)){
        alert('the speed is Not number!');
        return ;
    }

    clearInterval(timer);
    timer = setInterval(function () {
        if (oDiv1.offsetLeft >= 300) {
            clearInterval(timer);
        }
        else {
            oDiv1.style.left = oDiv1.offsetLeft + speed + 'px';
        }
    },30);
}

function rewindDiv() {
    var oDiv1 = document.getElementById('div1');

    oDiv1.style.left = 0;
}


var sideTimer = null;
function toOffsetByAsider(oDiv,targetOffset) {
    var speed = 0;
    var tmp = null;

    if (targetOffset > oDiv.offsetLeft){
        speed = 3;
        tmp = function () {
            return targetOffset - oDiv.offsetLeft;
        };

    }
    else {
        speed = -3;
        tmp = function () {
            return oDiv.offsetLeft - targetOffset;
        };
    }

    clearInterval(sideTimer);
    sideTimer = setInterval(function () {
        console.log('the tmp is ' + tmp() );
        if ( tmp() <= 0 ){
            oDiv.style.left = targetOffset + 'px';
            clearInterval(sideTimer);
        }
        else {
            oDiv.style.left = oDiv.offsetLeft + speed + 'px';
        }
    },30);
}

window.onload = function () {
    var oBtn1 = document.getElementById('btn1');
    var oBtn2 = document.getElementById('btn2');
    var oSider = document.getElementById('asideInfo');

    oBtn1.onclick = function () {
        var sTxt = document.getElementById('speedText');
        MoveToDiv(sTxt.value);
    };
    oBtn2.onclick = rewindDiv;

    oSider.onmouseover = function () {
        toOffsetByAsider(oSider,0);
    };
    oSider.onmouseout = function () {
        toOffsetByAsider(oSider,-50);
    }
};