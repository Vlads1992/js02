// Запросить у пользователя его возраст и определить, 
//кем он является: ребенком (0–2), подростком (12–18), взрослым (18_60) или пенсионером (60– ...).

let hw_02_1 = document.getElementById("hw_02_1");

hw_02_1.onclick = function () {

let age = prompt("Введите пожалуйста свой возраст");



if (typeof (+age) == "number") {
    // alert ("Всё ок)");

    

    if ((age > 0) && (age < 12)) {
            alert("Вы ребенок"); 
            } else if ((age > 11) && (age < 19)) {
                alert("Вы подросток");
            } else if ((age > 18) && (age < 61)) {
                alert("Вы взрослый");
            } else if (age > 60) {
                alert("Вы пенсионер");
            }
    
            while (age < 0) {
                age = +prompt("Неправильный ввод!");
            }

return false;       
        }     
}
