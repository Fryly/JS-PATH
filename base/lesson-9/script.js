// функции 

function myFirstFunction() {
    console.log('Hello my first function');
}

myFirstFunction();

//мы можем передавать функции параметры, которые в дальнейшем могут использоваться внутри самой функции
//таких параметров мы можем передавать бесконечно, через запятую

function mySecondFunction(text) {
    console.log(text);
}

mySecondFunction('Hello my second function');

//локальные переменные, обьявленные внутри тела функции могут использоваться только внутри тела функции

function myThirdFunction() {
    let num = 20;
    console.log(num);
}

//глобальные переменные, так же доступны внутри функии

let num = 20;

function myFortFunction() {
    console.log(num);
}

//другими словами, если функция во время своего выполнения не находит какой либо переменной, то она поднимается на уровень выше и ищёт её там - так и образуется замыкание функции, по простому замыкание какой-то функции это сама функция со всеми доступными для нее внешними параметрами

//так же функции могут нам возвращать какое либо значение с помощью ключевого слова return

function calc(a, b){
    return a + b;
}

console.log(calc(4,7));

// важно знать что любой код написанный после return никогда не выполниться, так как return говорит о том что функция дальше выполняться не будет

//так же с помощью return мы можем возвращать какие-то данные наружу

function returnNum(){
    let num = 42;

    //здесь должно быть много много много года, для вычисления num :)

    return num;
}

console.log(returnNum());

//все функции которые мы использовали выше относятся к function declaration, у них есть одна особенность, такую функцию можно вызвать до ее обьявления...всё потому что чтении всего скрипта компилятор первым делом ищет ключевые слов var и function declaration, обрабатывает их, после чего выполнит весь остальной скрипт

funcDeclar();

function funcDeclar(){
    console.log('это function declaration');
}

// есть второй тип это function expression, в этом случае мы можем вызвать функцию только после её обьявления, потому что она создается только тогда когда до неё дошел потом кода, в отличии от function declaration

const funcExp = function(){
    console.log('это function expression');
};

funcExp();

// стрелочные функции

// главным отличем от двух способов задании функции выше, является то что у стрелочной функции нет своего контекста

const arrowFunc = (a, b) => a + b;