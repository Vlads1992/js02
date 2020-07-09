// Запросить у пользователя год и проверить, високосный он или нет. 
// Високосный год либо кратен 400, либо кратен 4 и при этом не кратен 100.

let hw_02_4 = document.getElementById("hw_02_4");

hw_02_4.onclick = function () {

let highyear

highyear = +prompt("Введите высокосный год")

if ((highyear % 400 == 0) || (highyear % 4 == 0) && (highyear % 100 !== 0)) {
    alert("Это високосный год")
} else {
    alert("Данный год не является високосным")
}

return false;
}