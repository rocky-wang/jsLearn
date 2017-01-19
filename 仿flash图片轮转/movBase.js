/**
 * Created by Rocky-Wang on 2017/1/18.
 */

// 获取目标的样式信息
function getStyle(obj, name) {
    if (obj.currentStyle){
        return obj.currentStyle[name];
    }
    else {
        return getComputedStyle(obj,null)[name];
    }
}

// 通过类名获取对象
function getObjsByClass(oParent, sClass) {
    var aResult = [];

    var aElement = oParent.getElementsByTagName('*');

    for (var i = 0; i < aElement.length; i++){
        if (aElement[i].className === sClass){
            aResult.push(aElement[i]);
        }
    }
    return aResult;
}

/**
 * 运动通用框架，设置Div中对应attr属性的运动偏移量
 * */
function startMov(oDiv,sAttr,iTargetPos) {
    clearInterval(oDiv.timer);
    oDiv.timer = setInterval(function () {
        var cur = 0;

        if ( sAttr == 'opacity' ){
            cur = Math.round(parseFloat(getStyle(oDiv,sAttr))*100);
        }
        else {
            cur = parseInt(getStyle(oDiv,sAttr));
        }

        var speed = (iTargetPos - cur )/6;
        speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

        if (cur == iTargetPos){
            clearInterval(oDiv.timer);
        }
        else {
            if ( sAttr == 'opacity' ){
                oDiv.style.filter = 'alpha(opacity:' + (cur + speed) + ')';
                oDiv.style.opacity = (cur + speed)/100;
            }
            else {
                oDiv.style[sAttr] = cur + speed + 'px';
            }
        }
    },30);

}