let display = document.getElementById("display");

function append(value){
    display.value += value;
}

function clearDisplay(){
    display.value = "";
}

function deleteChar(){
    display.value = display.value.slice(0,-1);
}

function calculate(){

    try{

        let expression = display.value;

        /* Degree-based Trigonometry */

        expression = expression.replace(
            /sin\(([^)]+)\)/g,
            "Math.sin(($1)*Math.PI/180)"
        );

        expression = expression.replace(
            /cos\(([^)]+)\)/g,
            "Math.cos(($1)*Math.PI/180)"
        );

        expression = expression.replace(
            /tan\(([^)]+)\)/g,
            "Math.tan(($1)*Math.PI/180)"
        );

        /* Square Root */

        expression = expression.replace(
            /sqrt\(([^)]+)\)/g,
            "Math.sqrt($1)"
        );

        /* Calculate + Round */

        let result = eval(expression);

        display.value = parseFloat(
            result.toFixed(6)
        );

    }

    catch{
        display.value = "Error";
    }
}

/* Keyboard Support */

document.addEventListener("keydown", function(e){

    if(
        (e.key >= '0' && e.key <= '9') ||
        ['+','-','*','/','.','%','(',')'].includes(e.key)
    ){
        append(e.key);
    }

    else if(e.key === "Enter"){
        calculate();
    }

    else if(e.key === "Backspace"){
        deleteChar();
    }

    else if(e.key === "Escape"){
        clearDisplay();
    }

});