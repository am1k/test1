
function getChar(event) {
    if (event.which == null) {
        if (event.keyCode < 32) return null;
        return String.fromCharCode(event.keyCode) // IE
    }

    if (event.which!=0 && event.charCode!=0) {
        if (event.which < 32) return null;
        return String.fromCharCode(event.which)   // остальные
    }

    return null; // специальная клавиша
}

function InitCalculate(){
var form = document.forms['calculator'];
      console.log(form)

    var heightElem = form.elements.height;
    heightElem.onkeypress = function(e) {
        e = e || event;
        var chr  = getChar(e);

        if (e.ctrlKey || e.altKey || chr == null) return; // специальная клавиша
        if (chr < '0' || chr > '9') return false;
    }

    // клавиатура, вставить/вырезать клавиатурой
    heightElem.onkeyup = calculate;

    // любые действия, кроме IE. В IE9 также работает, кроме удаления
    heightElem.oninput = calculate;

    var widthElem = form.elements.width;
    widthElem.onkeypress = function(e) {
        e = e || event;
        var chr  = getChar(e);

        if (e.ctrlKey || e.altKey || chr == null) return; // специальная клавиша
        if (chr < '0' || chr > '9') return false;
    }

    // клавиатура, вставить/вырезать клавиатурой
    widthElem.onkeyup = calculate;

    // любые действия, кроме IE. В IE9 также работает, кроме удаления
    widthElem.oninput = calculate;

    var optionElem = form.elements.option;
    optionElem.onclick = calculate;

   calculate();
    function calculate() {
        var sum = +heightElem.value * +widthElem.value;
        if (!sum) return;


        if (!optionElem.checked) {
            sum = +heightElem.value * +widthElem.value;
        } else {

            for(var i=0; i<+heightElem.value * +widthElem.value; i++) {
                sum =  (+heightElem.value * +widthElem.value) + 5;
            }
        }
        sum = Math.round(sum);



        var heught = ['Итоговая сумма:  '] + sum;
        document.getElementById('sum1').innerHTML= heught;
        //   document.getElementById('money-before').innerHTML = moneyElem.value;
        //   document.getElementById('money-after').innerHTML = sum;
    }
}







