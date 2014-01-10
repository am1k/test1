/*var dataList = {
    'select-goods': {
        'doors':"Двери",
        'windows':"Окна",
        'tables':"Столы"
        },
            'select-kind': {
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
                }
            },
                    'select-skin': {
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
}

var selectList = [
    {name:"Country", value:"select-goods", id:"County" },
    {name:"City", value:"select-kind", id:"City"},
    {name:"Shop", value:"select-skin", id:"Shop"} ]



function my(){
    var country = document.getElementById('Country');
    var city = document.getElementById('City');
    var shop = document.getElementById('Shop');

    country.addEventListener('change', function(){

        console.log(country.value)

        changeSelectedList(country.value,city);

        //city.value = 'select';
        //shop.value = 'select';


    }) ;



}

city.addEventListener('change', function(){

    console.log(city.value)
    //shop.value = 'select';
})

shop.addEventListener('change', function(){


})



}

function changeSelectedList(value,collection){
    console.log(collection)

};





