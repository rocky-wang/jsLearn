
window.onload = function () {
  var aDivs = document.getElementsByTagName('div');

  console.log('the length is ' + aDivs.length);
  for (var i = 0; i < aDivs.length; i++){
      aDivs[i].timer = null;
      aDivs[i].onmouseover = function () {
          startMov(this,'height',400);
      };
      aDivs[i].onmouseout = function () {
          startMov(this,'height',100);
      };
  }
};

