alert('Программа для решения задачи:\nДаны две переменные целого типа: А и В. Если их значения не равны, то присвоить каждой переменной сумму этих значений, а если равны, то присвоить переменным нулевые значения.');
let A = Number(prompt("Введите число A:"));
let B = Number(prompt("Введите число B:"));
let A_original = A;
let B_original = B;
if (A == B){
    A = 0;
    B = 0;
} else {
    A += B;
    B = A;
}
alert("Ответ для A = " + A_original + " и B = " + B_original + ":\n" + "A = " + A + "\nB = " + B);

