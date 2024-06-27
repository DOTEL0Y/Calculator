// Calculator Program

const display = document.getElementById('display');

function appendDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}
function backSpaceDisplay(){
    console.log("1");
    console.log(display.value.length);
    if(display.value.length >= 1){
        console.log(display.value.length);
        display.value =display.value.substring(0,display.value.length-1)
    }
}

function calc(){
    try{
        display.value = eval(display.value);
    }
    catch{
        display.value = "Error";
    }

}