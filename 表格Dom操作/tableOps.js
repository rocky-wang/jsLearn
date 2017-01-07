/**
 * Created by Rocky-Wang on 2017/1/6.
 */
function setColorByRules(oTable) {
    // 遍历表格中的每一行
    for (var i = 0; i < oTable.tBodies[0].rows.length; i++){
        var oRow = oTable.tBodies[0].rows[i];
        if (i % 2){
            oRow.style.backgroundColor = '#ccc';
        }
        else {
            oRow.style.backgroundColor = '';
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

function searchByText(oTable, sContent) {
    setColorByRules(oTable);
    for (var i = 0; i < oTable.tBodies[0].rows.length; i++){
        var oCell = oTable.tBodies[0].rows[i].cells[1];

        if (oCell.innerHTML === sContent){
            oCell.parentNode.style.backgroundColor = 'yellow';
        }
    }
}

function sortList(oUl) {
    var aLis = oUl.getElementsByTagName('li');

    var arrayBuf = [];

    for (var i = 0; i < aLis.length; i++){
        arrayBuf[i] = aLis[i];
    }

    arrayBuf.sort(function (li1, li2) {
        var n1 = parseInt(li1.innerHTML);
        var n2 = parseInt(li2.innerHTML);

        return n1 - n2;
    });

    for (i = 0; i < arrayBuf.length; i++){
        oUl.appendChild(arrayBuf[i]);
    }

}

function sortByScore(oTable) {
    var arrayRows = [];
    var aElementTrs = oTable.tBodies[0].rows;

    for (var i = 0; i < aElementTrs.length; i++){
        arrayRows[i] = aElementTrs[i];
    }

    arrayRows.sort(function (aTr1, aTr2) {
       var n1 = parseInt(aTr1.cells[3].innerHTML);
       var n2 = parseInt(aTr2.cells[3].innerHTML);

       return n2 - n1;
    });

    for (i = 0; i < arrayRows.length; i++){
        oTable.tBodies[0].appendChild(arrayRows[i]);
    }

    setColorByRules(oTable);
}