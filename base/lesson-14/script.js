// массивы и их методы
//создадим простой массив

const _arr = [42, 27, 9, 13, 31];

//мы можем добавлять в конец массива новый элемент

_arr.push(24);
console.log(_arr); // [ 42, 27, 9, 13, 31, 24 ]

//также можем удалять с конца последний элемент

_arr.pop();
console.log(_arr); //сейчас 24 удалилось [ 42, 27, 9, 13, 31 ]

//можно также удалять и первый элемент массива unshift()
//либо добавлять новый элемент в начало массива shift()
//но эти методы крайне редко используют, изза того что будут изменены все последующие индексы массива

//перебирать массива можно как обычным циклом for

for (let i = 0; i < _arr.length; i++) {

    //так как массив это частный случай обьекта, то обращаемя к значению каждого из свойств также как и в обьекте
    //здесь вкачестве свойства выступает индекс каждого элемента массива
    console.log(_arr[i]);
}

//также мы можем использовать специальный цикл for of
//данный цикл мы можем использовать только для массиво подобных структор - массивов, псевдомассивов, строку, map и set

for (let value of _arr) {
    console.log(value);
}

//одним из преимуществ цикла for of является то что внутри мы можем использовать break/continue

for (let value of _arr) {
    if (value == 9) {
        console.log(value);
        break;
    } else {
        console.log(value);
    }
    
}

//для еще более гибкого перебора существует метод foreach
//он может принимать в себя три параметра
//1 - элемент массива
//2 - индекс элемента массива
//3 - сам массив

_arr.forEach((elem, index, array)=>{
    console.log(`элемент ${elem} имеет индекс ${index} в массиве ${array}`);
});

//существуют и другие методы перебора - map, filter, reduce, every/some
//все они в отличии от foreach могут модифицировать массив

//рассмотрим ещё некоторые методы массива

//split разбивает строку из элементов отделенных пробелом или запятой, и преообразует их в массив в таком же порядке

const _str = 'apple, orange juice, A, 123';
const $arr = _str.split(', '); //символ зпт мы указываем чтобы сказать как элементы отделены друг от друга в исходной строке
//вместо зпт мы можем вставлять целые регулярные выражения
console.log($arr);

//есть обратный метод, который из нашего массива исходного вернет строку из элелементов

console.log($arr.join('; ')); //теперь же мы в скобках указываем разделитель для строки которая выведется в итоге

//также есть метод для сортировки массивов

const things = ['слово', 'Слово', '1 Слово', '2 Слова'];
console.log(things.sort()); // ['1 Слово', '2 Слова', 'Слово', 'слово']

//так произошло потому что без указания параметра или функции для сортировка, массив сартируется в порядке следования точек unicode
//снача цифры, затем заглавные буквы, затем прописные

//если мы хотим задать свои параметры сортировки можем воспользоваться колбэками

const _num = [26, 1, 15, 8, 101, 0];
console.log(_num.sort((a, b) => a - b));

//если а - b будет отрацательное, то а будет стоять раньше
//если a - b = 0, то останется без изменения
//если a - b буде положительное, то а станет после b

//псевдо массив, это аналогичный массив, с такой же последовательностью и элементами
//важно знать что у псевдо массва отсутствуют все методы, которые применимы к обычному массиву