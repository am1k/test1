 var dataList = {
        'select-goods': {
            'doors':"Двери",
            'windows':"Окна",
            'tables':"Столы"
        },

            'doors': {
                'easy':"Простая",
                'hard':"Сложная"
            },
            'windows': {
                'one': "Одинарное",
                'two': "Двойное"
            },
            'tables': {
                'tree': "Дерево",
                'metal': "Металлический"
            },


            'easy': {
                'new1': "Без узора",
                'new2': "Без ручки"
            },
            'hard': {
                'new4': "Без утеплителя",
                'new5': "C утеплителем"
            },
            'one': {
                'new6': "Без форточки",
                'new7': "С форточкой"
            },
            'two': {
                'new8': "Без стеклопакета",
                'new9': "Со стеклопакетом"
            },
            'tree': {
                'new10': "Без крышки",
                'new11': "С крышкой"
            },
            'metal': {
                'new12': "Без ящика",
                'new13': "C ящиком"
            }

    }
var m_out = ['Тип : ','Сложность: ','Вид: '];
var t = [];
function fg(d) {
    document.getElementById("out").innerHTML = "";
    var a = document.getElementById("List" + d),
        c = dataList[a.options[a.selectedIndex].value];
    t[d] = a.options[a.selectedIndex].text;
    for (var b = 0; b < m_out.length; b++) {
        a = document.getElementById("List" + b);
        if (b > d) {
            a.options.length = 0;
            t[b] = "---";
            if (c) for (var e in c) a.options[a.options.length] = new Option(c[e], e);
            c = false;
            if (a.options.length) {
                c = dataList[a.options[0].value];
                t[b] = a.options[0].text
            }
        }
        document.getElementById("out").innerHTML += m_out[b] + t[b] + "<br />"
    }
};
  window.onload = function ()
{
var s = ["List0","List1","List2"];
for (var i=0; i < s.length; i++) document.getElementById(s[i]).onchange =  function(a){return function(){fg(a)}}(i);
fg(0);
}