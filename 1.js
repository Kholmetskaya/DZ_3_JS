// 1. Написать функцию которая принимала бы 2 параметра (число и символ, порядок может быть любой)
// функция должна вернуть строку из символов заданной длинны.

// Создаем функцию, которая принимает 2 параметра(число и символ)
var func = function(num,str) {
// Создаем пустой массив
    var arr=[];
// Если оба параметра не число, то программа выдает ошибку
    if(isNaN(num) && isNaN(str) ){
        console.log("Ошибка");
// Если второй параметр строка, а первый параметр число,
// тогда записываем в массив второй элемент, а первый принимаем за длину массива
    } else if (isNaN(str)){
        for(var i=0; i<num-1 ; i++){
            arr[i] = str;
            arr.push(arr[i]);
        }  
// Если первый параметр строка, а второй параметр число,
// тогда записываем в массив первый элемент, а второй принимаем за длину массива 
    }else{
        for(var i=0; i<str-1 ; i++){
            arr[i] = num;
            arr.push(arr[i]);
        }  
    } 
    return arr;
 }
 console.log(func("b",4));

 
