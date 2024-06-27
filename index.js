// Calculator Program

const display = document.getElementById('display');

function appendDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calc(){
    try{
        display.value = eval(display.value);
    }
    catch{
        display.value = "Error";
    }

}