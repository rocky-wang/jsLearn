/**
 * moveToPosFromDiv : 设置一个Div以左边为基准，一个速度偏移一个相对位移。
 * oDiv : 要操作向左偏移的Div对象类型；
 * strSpeed : 以多大的速度向左偏移，数字类型；
 * iTargetPos : 向左偏移的终点坐标，数字类型；
 */
var movTimer = null;
function moveToLeftPosFromDiv(oDiv,iSpeed,iTargetPos,flags) {
    var posFun = null;
    if ( isNaN(iSpeed) || isNaN(iTargetPos) ){
        alert('the Speed or TargetPos is Not number!');
        return ;
    }

    if ( iTargetPos > oDiv.offsetLeft ){
        posFun = function () {
            if (flags){
                iSpeed = Math.ceil((iTargetPos - oDiv.offsetLeft)/12);
            }
            return iTargetPos - oDiv.offsetLeft;
        }
    }
    else {
        iSpeed = -1 * iSpeed;
        posFun = function () {
            if (flags) {
                iSpeed = Math.floor((iTargetPos - oDiv.offsetLeft)/12);
            }
            return oDiv.offsetLeft - iTargetPos;
        }
    }

    clearInterval(movTimer);
    movTimer = setInterval(function () {
        console.log('the speed is ' + iSpeed);
        if ( posFun() <= 0 ) {
            oDiv.style.left = iTargetPos + 'px';
            clearInterval(movTimer);
        }
        else {
            oDiv.style.left = oDiv.offsetLeft + iSpeed + 'px';
        }
    },30);
}

function rewindDiv() {
    var oDiv1 = document.getElementById('div1');

    oDiv1.style.left = 0;
}

/**
 * 设置透明度变化的函数
 * */
var currentAlpha = 30;
var alphaTimer = null;
function moveToAlphaFromDiv(oDiv, iSpeed, iAlphaValue) {
    var alphaFun = null;
    if (currentAlpha < iAlphaValue){
        alphaFun = function () {
            return iAlphaValue - currentAlpha;
        };
    }
    else {
        iSpeed = -1 * iSpeed;
        alphaFun = function () {
            return currentAlpha - iAlphaValue;
        };
    }

    clearInterval(alphaTimer);
    alphaTimer = setInterval(function () {
        if ( alphaFun() <= 0 ){
            currentAlpha = iAlphaValue;
            clearInterval(alphaTimer);
        }
        else {
            currentAlpha = currentAlpha + iSpeed;
        }
        oDiv.style.opacity = currentAlpha/100;
    },30);
}

/**
 * JavaScript加载后初始化
 * */
window.onload = function () {
    var oBtn1 = document.getElementById('btn1');
    var oBtn2 = document.getElementById('btn2');
    var oSidebar = document.getElementById('asideInfo');
    var oDiv1 = document.getElementById('div1');
    var oImageDiv = document.getElementById('picDiv');

    // 触发一个移动到一个固定的偏移的功能
    oBtn1.onclick = function () {
        var sTxt = document.getElementById('speedText');
        var iSpeed = parseInt(sTxt.value);

        if ( isNaN(iSpeed) ){
            alert('Please input number character!');
            return ;
        }

        moveToLeftPosFromDiv(oDiv1,iSpeed,300,1);
    };
    // 将Div移动到开始位置
    oBtn2.onclick = rewindDiv;

    // 侧边栏鼠标移入动作
    oSidebar.onmouseover = function () {
        var tSpeed = document.getElementById('asideSpeed');
        var iSpeed = parseInt(tSpeed.value);

        if ( isNaN(iSpeed) ){
            alert('Please input number character!');
            return ;
        }
        moveToLeftPosFromDiv(oSidebar,iSpeed,0);
    };

    // 侧边栏鼠标移出动作
    oSidebar.onmouseout = function () {
        var tSpeed = document.getElementById('asideSpeed');
        var iSpeed = parseInt(tSpeed.value);

        if ( isNaN(iSpeed) ){
            alert('Please input number character!');
            return ;
        }
        moveToLeftPosFromDiv(oSidebar,iSpeed,-50);
    };

    // 图片淡入淡出
    oImageDiv.onmouseover = function () {
        moveToAlphaFromDiv(oImageDiv,12,100);
    };
    oImageDiv.onmouseout = function () {
        moveToAlphaFromDiv(oImageDiv,4,30);
    };

};