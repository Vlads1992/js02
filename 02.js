// Запросить у пользователя число от 0 до 9 и вывести ему спецсимвол, 
// который расположен на этой клавише (1–!, 2–@, 3–# и т. д).

let hw_02_2 = document.getElementById("hw_02_2");

hw_02_2.onclick = function () {

let number = prompt("Пожалуйста введите число от 0 до 9"); 

do  {
    number = +prompt("Введите диапазон от 0 до 9");
} while (number < 0);

do  {
    number = +prompt("Введите диапазон от 0 до 9");
} while (number > 9);

if (number == 0) {
    prompt (")");
}

if (number == 1) {
    prompt ("!");
}

if (number == 2) {
    prompt ("@");
}

if (number == 3) {
    prompt ("#");
}

if (number == 4) {
    prompt ("$");
}

if (number == 5) {
    prompt ("%");
}

if (number == 6) {
    prompt ("^");
}

if (number == 7) {
    prompt ("&");
}

if (number == 8) {
    prompt ("*");
}

if (number == 9) {
    prompt ("(");
}

return false;
}

