// Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом.

let hw_02_5 = document.getElementById("hw_02_5");

hw_02_5.onclick = function () {

let number, first, second, third, fourth, fifth

number = prompt("Введите пятираздряное число")

first = number.slice(0,1);
second = number.slice(1,2);
fourth = number.slice(3,4);
fifth = number.slice(4);

if ((first == fifth) && (second == fourth)) {
    alert("Число является палиндромом");
} else {
    alert("Число не является палиндромом")
}

return false;
}