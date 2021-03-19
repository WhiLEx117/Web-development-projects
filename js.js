const inputxt = document.getElementById("entrada"),
  convert = document.getElementById("convertbtn"),
  result = document.getElementById("result");
result2 = document.getElementById("result2");

function remainder() {
  const valor = inputxt.value % 2;
  result2.textContent = valor;
  if (valor % 2) {
    console.log("impar ");
    result.textContent = "impar";
  } else {
    console.log("par");
    result.textContent = "Par";
  }
  return;
}

convert.addEventListener("click", () => {
  const texto = remainder();
});
