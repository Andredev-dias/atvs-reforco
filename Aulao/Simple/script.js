function calcular() {
  var num1 = parseInt(document.getElementById("num01").value);
  var num2 = parseInt(document.getElementById("num02").value);
  console.log(typeof num1, typeof num2);
  console.log(num1, num2);
  document.getElementById("res").textContent = num1 + num2;
}

function media() {
  var num1 = document.getElementById("prova01").valueAsNumber;
  var num2 = document.getElementById("prova02").valueAsNumber;
  var num3 = document.getElementById("prova03").valueAsNumber;
  var mediaTexto = document.getElementById("media");
  res = (num1 + num2 + num3) / 3;
  if (res > 6) {
    mediaTexto.innerHTML = res.toFixed(2) + " (A)";
    mediaTexto.style.color = "green";
  } else {
    mediaTexto.innerHTML = res.toFixed(2) + " (R)";
    mediaTexto.style.color = "red";
  }
}

function contar() {
  // Obter o valor do número do usuário
  // const num = parseInt($("#numeroInput").val());
  const num = parseInt($("#numeroInput").val());

  if (isNaN(num)) {
    $("#resultado").text("Por favor, informe um número válido.");
    return;
  }

  // Inicializar a string de resultado
  var resultadoStr = "";
  if (num <= 100000) {
    // Loop para contar até o número informado
    for (var cont = 1; cont <= num; cont++) {
      // resultadoStr += cont + "<br>";
      resultadoStr = resultadoStr + cont + "<br>";
    }
    // Exibir o resultado
    $("#resultado").html(resultadoStr);
  } else {
    $("#resultado").html("vai trava se voce digitar um numero grande");
  }
}
