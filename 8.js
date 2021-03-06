// Задание 2
// Написать код который бы посчитал каких элементов больше:
// 1) четных или не четны
// 2) положительных или отрицательных
// 3) Что больше сумма всех положительных или отрицательных элементов (по модулю)
// 4) Инверитровать массив (1, 2, 3 -> 3, 2, 1)


// Создаем функцию, которая выдает массив случайных чисел(положительных и отрицательных)
var random = function(){
    var arr = [];
    var min = -parseInt(Math.random() * 10);
    var max = parseInt(Math.random() * 10);
    for (var i = min; i <= max ; i++) {       
        var temp = parseInt(Math.random()*(max - min) + min);
        arr.push(temp); 
    } 
    return arr;
}
var random= random();
console.log(random);

// Создаем функцию, которая принимает массив
var func = function(array){ 
// Определяем переменные 
    var kolEven = 0,kolOdd = 0,kolPos = 0,kolNeg = 0;
    var sumPos = 0,sumNeg = 0;
// Создаем переменные для записи результатов вычислений
    var rez1,rez2,rez3,rez4 = [];
// Создаем цикл для массива
        for (var i = 0; i <array.length; i++){
// Вычисляем количество четных и нечетных элементов
// Если остаток от деления элемента на 2 равен 0, то счетчик количества четных элементов увеличивается на 1
            if(array[i] %2 == 0){
                kolEven ++;
// Если остаток от деления элемента на 2 не равен 0, то счетчик количества нечетных элементов увеличивается на 1
            }else{
                kolOdd ++;
            } 
// Если  элемент больше 0, то счетчик количества положительных элементов увеличивается на 1
            if(array[i] > 0){
                kolPos ++;
// Считаем сумму всех положитеьных элементов
                sumPos += array[i];
// Если  элемент меньше 0, то счетчик количества отрицательных элементов увеличивается на 1
            }else{
                kolNeg ++;
// Считаем сумму всех отрицательных элементов по модулю
                sumNeg += Math.abs(array[i]);
            }              
        }
// Сравниваем количество четных и нечетных, результат записываем в переменную
        if(kolEven > kolOdd){
            rez1 = `Больше четных элементов, их количество = ${kolEven}`
        }else if(kolEven < kolOdd){
            rez1 = `Больше нечетных элементов, их количество = ${kolOdd}`
        }else{
            rez1 = `Количество четных и нечетных элементов одиннаковое = ${kolEven || kolOdd}`
        }
// Сравниваем количество положительных и отрицательных, результат записываем в переменную
        if(kolPos > kolNeg){
            rez2 = `Больше положительных элементов, их количество = ${kolPos}`
        }else if(kolPos < kolNeg){
            rez2 = `Больше отрицательных элементов, их количество = ${kolNeg}`
        }else{
            rez2 = `Количество положительных и отрицательных элементов одиннаковое = ${kolPos || kolNeg}`
            }
// Сравниваем суммы положительных и отрицательных, резуьтат записываем в перемеую
        if(sumPos > sumNeg){
            rez3 = `Больше сумма всех положительных элементов, и  = ${sumPos}` 
        }else if(sumPos < sumNeg){
            rez3 = `Больше сумма всех отрицательных элементов, и = ${sumNeg}`
        }else{
            rez3 = `Суммы положительных и отрицательных элементов одинаковы = ${sumPos || sumNeg}`
        }
// Пишем цикл, который будет работать, пока array.length существует
        while(array.length){
// Создаем буфферную переменную, которая на каждой итерации будет удалять 
// последний элемент массива и записывать в новый массив, тем самым инверитровать массив
            var buffer = array.pop();     
                rez4.push(buffer);            
        } 
// Записываем общий результат, включающий промежуточные 
        rez = `
        ${rez1}
        ${rez2}
        ${rez3}
        ${rez4}`
        return rez;
}

console.log(func(random));