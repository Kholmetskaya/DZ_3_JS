// 3. Написать функцию генерации массива случайно длинны и заполненного случайными числами
//  (параметры функции определить самостоятельно)
// 4. Написать функции  для (за входной массив взять случайный из задания 3):
// Посчитать среднее
// сумму всех элементов
// Разность всех элементов
// Количество четных / нечетных элементов
// Минимум / Максимум
// Количество положительных и отрицательных элементов


// Создаем функцию, параметром которой будет нижний предел диапазона длины массива
var func = function(min){
// Создаем пустой массив
    var arr = [];
// Создаем переменую, которая генерирует  верхний пределом длины массива
    var max = parseInt(Math.random() * 10);
    for (var i = min; i <= max ; i++) {     
//  Генерируем случайные числа и на каждой итерации записываем в массив.Значения генерируюся в диапазоне от  min до max
        var temp = parseInt(Math.random()*(max - min) + min);
        arr.push(temp); 
    } 
    return arr;
}
var rez = func(-10);
console.log(rez);

// сумма всех элементов, среднее  значение 
var sr = function(array){
    var sum = 0, sr = 0;
    for (var i = 0; i <array.length; i++){
// вычисляем сумму всех элементов
        sum += array[i];
// вычисляем среднее значения. Для красоты отбрасываем все з значения после сотых
        sr = (sum / (i+1)).toFixed(2); 
    }
    return sr;
}

// Разность всех элементов
var rz = function(array){
    var rz = 0;
    for (var i = 0; i <array.length; i++){
        rz -= array[i]; 
    }
    return rz;
}

// Минимум / Максимум
var MinMax = function(array){
    max = array[0];   
    min = max;
    for (var i = 0; i <array.length; i++){
        if(array[i] > max){
            max = array[i];
        }
        if(min > array[i] ){
            min = array[i];
        }
    }
    MinMax = min + "/" + max;
    return MinMax;
}

// Количество четных / нечетных элементов
var EvenOdd = function(array){
    var kolEven = 0,kolOdd = 0;
    for (var i = 0; i <array.length; i++){
        if(array[i] %2 == 0){
            kolEven ++;
        }else{
            kolOdd ++;
        }
    }
    EvenOdd = kolEven + "/" + kolOdd;
    return EvenOdd ;
}

// Количество положительных и отрицательных элементов
var PosNeg = function(array){
    var kolPos = 0,kolNeg = 0;
    for (var i = 0; i <array.length; i++){
        if(array[i] > 0){
            kolPos ++;
        }else{
            kolNeg ++;
        }
    }
    PosNeg = kolPos + "/" + kolNeg;
    return PosNeg ;
}

console.log(`среднее значение: ${sr(rez)}
разность всех элементов: ${rz(rez)}
минимум/максимум: ${MinMax(rez)} 
количество четных элементов/количество нечетных элементов: ${EvenOdd(rez)}
количество положительных элементов/количество отрицательных элементов:  ${PosNeg(rez)} `) ;
