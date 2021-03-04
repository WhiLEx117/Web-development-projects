
const   num1 = document.getElementById("number1");
const    num2 = document.getElementById("number2");
const  convertir = document.getElementById('convert');
const p = document.getElementById("result");

convertir.addEventListener('click', () =>{
    const numb1 = parseFloat(num1.value)
    const numb2 = parseFloat(num2.value)


    p.textContent = numb1 + numb2;
})
