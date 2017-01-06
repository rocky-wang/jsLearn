/**
 * Created by Rocky-Wang on 2017/1/6.
 */
function setColorByRules(oTable) {
    console.log('set Color by rules: ' + oTable.tBodies[0].rows.length);
    for (var i = 0; i < oTable.tBodies[0].rows.length; i++){
        var oRow = oTable.tBodies[0].rows[i];
        if (i % 2){
            oRow.style.backgroundColor = '#ccc';
        }

        var oldColor = '';

        oRow.onmouseout = function () {
            this.style.backgroundColor = oldColor;
        };

        oRow.onmouseover = function () {
            oldColor = this.style.backgroundColor;
            this.style.backgroundColor = 'green';
        };
    }
}

function addTableByInputData(oTable) {
    var oTr = document.createElement('tr');
    var oTd = document.createElement('td');

    var oName = document.getElementById('tabName');
    var  oAge = document.getElementById('tabAge');
    var oScore = document.getElementById('tabScore');

    oTd.innerHTML = oTable.tBodies[0].rows.length + 1;
    oTr.appendChild(oTd);

    oTd = document.createElement('td');
    oTd.innerHTML = oName.value;
    oTr.appendChild(oTd);

    oTd = document.createElement('td');
    oTd.innerHTML = oAge.value;
    oTr.appendChild(oTd);

    oTd = document.createElement('td');
    oTd.innerHTML = oScore.value;
    oTr.appendChild(oTd);

    oTd = document.createElement('td');
    oTd.innerHTML = '<a href="javascript:;">删除</a>';
    oTr.appendChild(oTd);
    oTd.getElementsByTagName('a')[0].onclick = function () {
        oTable.tBodies[0].removeChild(this.parentNode.parentNode);
    };

    oTable.tBodies[0].appendChild(oTr);

    setColorByRules(oTable);
}