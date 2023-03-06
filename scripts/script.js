const radiosEl = document.querySelectorAll('.switch');
const inputEl = document.getElementById('input');
const body = document.querySelector('body');

let numbers = "";
let result = ["",""];
let operation = "";
let p = 0;
let m = 0;
let d = 0;
let mult = 0;
let conditional = 0;
let subCond = 0;
let pos = 0;
let posF = 40;
let cond = 0;
let dotCond = 1;

/* QUANDO UM RADIO É CLICADO A FUNCAO PASSAR POR TODOS PROCURANDO O CHECADO E SETA A CLASSE CORRESPONDENTE */
function changeTheme() {
	radiosEl.forEach(el => {
		if (el.checked) {
			switch(el.getAttribute('value')){
				case 'tema1':
					body.classList.remove('theme-2', 'theme-3')
					body.classList.add('theme-1');
					break;
				case 'tema2':
					body.classList.remove('theme-1', 'theme-3')
					body.classList.add('theme-2');
					break;
				case 'tema3':
					body.classList.remove('theme-1', 'theme-2')
					body.classList.add('theme-3');
					break;			
			}
		}
	})
}

/* ADICIONA FUNCAO PARA OS INPUTS */
radiosEl.forEach(el => {
	el.addEventListener('click', changeTheme);
})

/* SETA TEMA INICIAL */
window.addEventListener("load", function() {
	radiosEl[0].setAttribute("checked", "checked");
	changeTheme();
} );


// alert (eval("4+2-5"));
function equals() {
   
    if(numbers=="0."){
    }else if(operation == "+"){

        if(p == 0){

            result[1] = parseFloat(result[0]) + parseFloat(numbers);
            result[0] = parseFloat(numbers);
            numbers = result[1];
            p = 1;

        }   else if(p == 1){
                
                result[1] += parseFloat(result[0]);
                numbers = result[1];

        }


    }else if(operation == "-"){
        
        //This part is responsive to menus part
        if(m == 0){

            result[1] = parseFloat(result[0]) - parseFloat(numbers);
            result[0] = numbers;
            numbers = result[1];
            m = 1;

        }   else if(m == 1){

                result[1] -= parseFloat(result[0]);
                numbers = result[1];

        }
        subCond = 0;

    }else if(operation == "/"){

        if(d == 0){

            result[1] = parseFloat(result[0]) / parseFloat(numbers);
            result[0] = numbers;
            numbers = result[1];
            d = 1;

        } else if(d == 1){
            if(numbers.length <= 8 && numbers.length >= -8){

                    result[1] /= parseFloat(result[0]);
                    numbers = result[1];
                
            }
        }

    }else if(operation == "*"){

        if(mult == 0){

            result[1] = parseFloat(result[0]) * parseFloat(numbers);
            result[0] = parseFloat(numbers);
            numbers = result[1];
            mult = 1;

        }   else if(mult == 1){
            if(numbers.length <= 8 && numbers.length >= -8){    
                result[1] *= parseFloat(result[0]);
                numbers = result[1];
            }
        }
    }else{
        numbers = result[0];
    }

    if (conditional == 0) {
        
        conditional = 1;
    }
    
    document.getElementById("receiver").innerHTML = numbers;
    numbers = numbers.toString();
}

// function to change the 'var operation' to plus
function plus() {

    operation = "+";
    result[0] = numbers;
    numbers = "";
    conditional = 0;
    p = 0;
    document.getElementById("receiver").innerHTML = numbers;
}

function subtract() {

    if(numbers.length == 0){
        numbers += "-";
        subCond++;
    }   else {
            operation = "-";
            result[0] = numbers;
            numbers = "";
        }
    conditional = 0;
    m = 0;
    document.getElementById("receiver").innerHTML = numbers;

}

// terminar aplicação da divisão
function divide() {

    operation = "/";
    result[0] = numbers;
    numbers = "";
    d = 0;
    conditional = 0;
    document.getElementById("receiver").innerHTML = numbers;
}
// terminar aplicação de multiplicação
function multiplication() {

    operation = "*";
    result[0] = numbers;
    numbers = "";
    mult = 0;
    conditional = 0;
    document.getElementById("receiver").innerHTML = numbers;
}

// focar nessa parte que falta do ponto com o menos
function dot() {
    if(numbers == ""){

        numbers = "0.";
        
    }  else if(numbers == "0." ){

          
        }   else if(numbers != "" && dotCond == 1){

                numbers = numbers + ".";
                dotCond--;
            }
    
    document.getElementById("receiver").innerHTML = numbers;
}

function del() {

    numbers = numbers.toString();
    numbers = numbers.slice(0, numbers.length - 1);
    if (numbers == 0) {
        reset();
    }

    document.getElementById("receiver").innerHTML = numbers;
}

function reset() {

    numbers = "";
    result[0] = 0;
    operation = "";
    result[1] = 0;
    conditional= 0;
    subCond = 0;
    dotCond = 1;
    p = 0;
    m = 0;
    d = 0;
    mult = 0;
    document.getElementById("receiver").innerHTML = numbers;
}

/* Funções para adicionar os números na tela*/
function num1() {

    if (conditional == 1 && operation != "") {
        
        reset();
        conditional = 0;
    }
    if(numbers == "0."){
        if(numbers == ""){
                
            numbers = "1";

        }   else {
                numbers = numbers + "1";
        }
    } else if (numbers == 0) {

        numbers = numbers.slice(0, numbers.length - 1);
        if(numbers.length <= 10){

            if(numbers == ""){
                
                numbers = "1";

            }   else {
                    numbers = numbers + "1";
            }

        } 
    } else{
        
         if(numbers.length <= 10){

            if(numbers == ""){
                
                numbers = "1";

            }   else {
                    numbers = numbers + "1";
            }

        } 
    }
    
    document.getElementById("receiver").innerHTML = numbers;
}

function num2() {

    if (conditional == 1 && operation != "") {
        
        reset();
        conditional = 0;
    }   
   
    if(numbers == "0."){
        if(numbers == ""){
                
            numbers = "2";

        }   else {
                numbers = numbers + "2";
        }
    } else if (numbers == 0) {

        numbers = numbers.slice(0, numbers.length - 1);
        if(numbers.length <= 10){

            if(numbers == ""){
                
                numbers = "2";

            }   else {
                    numbers = numbers + "2";
            }

        } 
    } else{
        
         if(numbers.length <= 10){

            if(numbers == ""){
                
                numbers = "2";

            }   else {
                    numbers = numbers + "2";
            }

        } 
    }
     
    document.getElementById("receiver").innerHTML = numbers;
}

function num3() {

    if (conditional == 1 && operation != "") {
        
        reset();
        conditional = 0;
    }   
    if(numbers == "0."){
        if(numbers == ""){
                
            numbers = "3";

        }   else {
                numbers = numbers + "3";
        }
    } else if (numbers == 0) {

        numbers = numbers.slice(0, numbers.length - 1);
        if(numbers.length <= 10){

            if(numbers == ""){
                
                numbers = "3";

            }   else {
                    numbers = numbers + "3";
            }

        } 
    } else{
        
         if(numbers.length <= 10){

            if(numbers == ""){
                
                numbers = "3";

            }   else {
                    numbers = numbers + "3";
            }

        } 
    }
    
    document.getElementById("receiver").innerHTML = numbers;
}

function num4() {

    if (conditional == 1 && operation != "") {
        
        reset();
        conditional = 0;
    }   

    if(numbers == "0."){
        if(numbers == ""){
                
            numbers = "4";

        }   else {
                numbers = numbers + "4";
        }
    } else if (numbers == 0) {

        numbers = numbers.slice(0, numbers.length - 1);
        if(numbers.length <= 10){

            if(numbers == ""){
                
                numbers = "4";

            }   else {
                    numbers = numbers + "4";
            }

        } 
    } else{
        
         if(numbers.length <= 10){

            if(numbers == ""){
                
                numbers = "4";

            }   else {
                    numbers = numbers + "4";
            }

        } 
    }
    
    document.getElementById("receiver").innerHTML = numbers;
}

function num5() {

    if (conditional == 1 && operation != "") {
        
        reset();
        conditional = 0;
    } 

    if(numbers == "0."){
        if(numbers == ""){
                
            numbers = "5";

        }   else {
                numbers = numbers + "5";
        }
    } else if (numbers == 0) {

        numbers = numbers.slice(0, numbers.length - 1);
        if(numbers.length <= 10){

            if(numbers == ""){
                
                numbers = "5";

            }   else {
                    numbers = numbers + "5";
            }

        } 
    } else{
        
         if(numbers.length <= 10){

            if(numbers == ""){
                
                numbers = "5";

            }   else {
                    numbers = numbers + "5";
            }

        } 
    }
    
    document.getElementById("receiver").innerHTML = numbers;
}

function num6() {

    if (conditional == 1 && operation != "") {
        
        reset();
        conditional = 0;
    }    

    if(numbers == "0."){
        if(numbers == ""){
                
            numbers = "6";

        }   else {
                numbers = numbers + "6";
        }
    } else if (numbers == 0) {

        numbers = numbers.slice(0, numbers.length - 1);
        if(numbers.length <= 10){

            if(numbers == ""){
                
                numbers = "6";

            }   else {
                    numbers = numbers + "6";
            }

        } 
    } else{
        
         if(numbers.length <= 10){

            if(numbers == ""){
                
                numbers = "6";

            }   else {
                    numbers = numbers + "6";
            }

        } 
    }
    
    document.getElementById("receiver").innerHTML = numbers;
}

function num7() {

    if (conditional == 1 && operation != "") {
        
        reset();
        conditional = 0;
    }

    if(numbers == "0."){
        if(numbers == ""){
                
            numbers = "7";

        }   else {
                numbers = numbers + "7";
        }
    } else if (numbers == 0) {

        numbers = numbers.slice(0, numbers.length - 1);
        if(numbers.length <= 10){

            if(numbers == ""){
                
                numbers = "7";

            }   else {
                    numbers = numbers + "7";
            }

        } 
    } else{
        
         if(numbers.length <= 10){

            if(numbers == ""){
                
                numbers = "7";

            }   else {
                    numbers = numbers + "7";
            }

        } 
    }
    
    document.getElementById("receiver").innerHTML = numbers;
}

function num8() {

    if (conditional == 1 && operation != "") {
        
        reset();
        conditional = 0;
    }   

    if(numbers == "0."){
        if(numbers == ""){
                
            numbers = "8";

        }   else {
                numbers = numbers + "8";
        }
    } else if (numbers == 0) {

        numbers = numbers.slice(0, numbers.length - 1);
        if(numbers.length <= 10){

            if(numbers == ""){
                
                numbers = "8";

            }   else {
                    numbers = numbers + "8";
            }

        } 
    } else{
        
         if(numbers.length <= 10){

            if(numbers == ""){
                
                numbers = "8";

            }   else {
                    numbers = numbers + "8";
            }

        } 
    }
    
    document.getElementById("receiver").innerHTML = numbers;
}

function num9() {

    if (conditional == 1 && operation != "") {
        
        reset();
        conditional = 0;
    }

    if(numbers == "0."){
        if(numbers == ""){
                
            numbers = "9";

        }   else {
                numbers = numbers + "9";
        }
    } else if (numbers == 0) {

        numbers = numbers.slice(0, numbers.length - 1);
        if(numbers.length <= 10){

            if(numbers == ""){
                
                numbers = "9";

            }   else {
                    numbers = numbers + "9";
            }

        } 
    } else{
        
         if(numbers.length <= 10){

            if(numbers == ""){
                
                numbers = "9";

            }   else {
                    numbers = numbers + "9";
            }

        } 
    }
    
    document.getElementById("receiver").innerHTML = numbers;
}

function num0() {

    if (conditional == 1 && operation != "") {
        
        reset();
        conditional = 0;
    }

    if(numbers == "0."){
        if(numbers == ""){
     
            numbers = "0";

        }   else {
                numbers = numbers + "0";
        }
    } else if (numbers == 0) {

        numbers = numbers.slice(0, numbers.length - 1);
        if(numbers.length <= 8){

            if(numbers == ""){
                
                numbers = "0";

            }   else {
                    numbers = numbers + "0";
            }

        } 
    } else{
        
         if(numbers.length <= 8){

            if(numbers == ""){
                
                numbers = "0";

            }   else {
                    numbers = numbers + "0";
            }

        } 
    }

    document.getElementById("receiver").innerHTML = numbers;
}