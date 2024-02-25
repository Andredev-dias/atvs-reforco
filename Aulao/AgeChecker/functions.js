function checkMajority() {
  var wasBorn = document.getElementById("clientBirth").valueAsNumber;
  var res = document.getElementById("result");
  console.log(wasBorn);

  if (isNaN(wasBorn)) {
    res.textContent = "Digite apenas numeros";
    res.style.color = "red";
    return;
  }

  const thisYear = new Date().getFullYear();
  const age = thisYear - wasBorn;

  if (age >= 18) {
    res.textContent = "Over 18, ENTRY";
    res.style.color = "green";
    document.getElementById("clientAge").textContent = age + " anos de idade";
  } else {
    res.textContent = "Under 18, NOT ALLOWED";
    res.style.color = "orange";
    document.getElementById("clientAge").textContent = age + " anos de idade";
  }
}
