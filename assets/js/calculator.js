// Inicializamos con window.onload.
// Espera a que cargue toda la página antes de comenzar.
// No permite ejecutar nada hasta que todo cargue.
window.onload = ini;

function ini() {
    // Llamamos al elemento html y lo guardamos.
    let btnCalculate = document.getElementById("btnCalculate");
    btnCalculate.addEventListener("click", imcCalculate);
}

// Función que se ejecuta al hacer click en btnCalculate
function imcCalculate() {
    const weightInput = document.getElementById("imcWeight");
    const weight = parseFloat(weightInput.value);
    
    const heightInput = document.getElementById("imcHeight");
    const height = parseFloat(heightInput.value);

    
    if (isNaN(weight) || isNaN(height)) {
        
        if (isNaN(weight)) {
            weightInput.value = "";
            weightInput.placeholder = "Digite su peso";
            weightInput.classList.add("error");
        }
        
        if (isNaN(height)) {
            heightInput.value = "";
            heightInput.placeholder = "Digite su altura";
            heightInput.classList.add("error");
        }
        
        return;
    }

    for (let i = 1; i <= 5; i++) {
        document.getElementById(`strIMC${i}`).innerHTML = "--";
    }
    
    let imc = Math.round(weight / (height * height));

    if (imc <= 18.5) {
        document.getElementById("strIMC1").innerHTML = imc;
    } else if (imc <= 24.9) {
        document.getElementById("strIMC2").innerHTML = imc;
    } else if (imc <= 29.9) {
        document.getElementById("strIMC3").innerHTML = imc;
    } else if (imc <= 34.9) {
        document.getElementById("strIMC4").innerHTML = imc;
    } else {
        document.getElementById("strIMC5").innerHTML = imc;
    }

    
}