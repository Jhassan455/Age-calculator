let btnEl = document.querySelector("button");
let inputVlaue = document.querySelector("input");
let resultValue = document.querySelector(".result");

function calculateAge(){
    const birthdayValue = inputVlaue.value;
    if(birthdayValue === ""){
        alert("Please enter the your Birthdate");
    } else{
        const age = getAge(birthdayValue);
        resultValue.innerText = `Your age is ${age} ${age>1?"years" : "year"} old`;
    }
}
function getAge(birthdayValue){
    const currentDate = new Date();
    const birthday = new Date(birthdayValue);
    let age = currentDate.getFullYear() - birthday.getFullYear();
    const month = currentDate.getMonth() - birthday.getMonth();
    if(month < 0 || month===0 && currentDate.getDate() < birthday.getDate()){
        age--;
    }
    return age;
}
btnEl.addEventListener("click" , calculateAge);