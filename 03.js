// Запросить у пользователя трехзначное число и проверить, есть ли в нем одинаковые цифры.

let hw_02_3 = document.getElementById("hw_02_3");

hw_02_3.onclick = function () {

let number, first, second, third

number = prompt("Enter a 3 digit number")
first = number.slice(0,1);
second = number.slice(1,2);
third = number.slice(2,3);

if (first == second || first == third || third == second) {
    alert(`The number has same digits`)
} else {
    alert(`The number doesn't have same digits`)
}

return false;
}
