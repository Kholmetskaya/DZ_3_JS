// 5*. Написать функцию которая принимает 2 значения, массив и число и подсчитает сколько таких чисел содержит массив

var arr = [5,4,5,6,8,5,5,7];

var func = function(arr,num){
// Создаем счетчик
    var count = 0;
// Создаем цикл, который перебирает все значения массива
    for(var i = 0; i< arr.length;i++){
// Если элемент массива равен введенному числу, то счетчик увеличивается на 1
        if(arr[i] == num){
            count++
        }
    }
    return count;
}
console.log(func(arr,5));