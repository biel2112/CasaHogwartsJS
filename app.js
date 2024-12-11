function sortearCasa() {
  let numeroSorteado = parseInt(Math.random() * 4 + 1);
  let casa = "";
  switch (numeroSorteado) {
    case 1:
      casa = "Grifinória";
      break;
    case 2:
      casa = "Sonserina";
      break;
    case 3:
      casa = "Corvinal";
      break;
    case 4:
      casa = "Lufa-Lufa";
      break;
  }
  return casa;
}

function determinarCasa() {
  let casa = sortearCasa();
  let msg = document.querySelector("p");
  msg.innerText = `Você é da \n${casa}`;
  pintarFundo(casa);
}

function pintarFundo(casa){
    let fundo = document.getElementById("container-principal");
    let cor = "";

    switch(casa){
        case "Grifinória":
      cor = "red"
      break;
    case "Sonserina":
      cor = "green";
      break;
    case "Corvinal":
      cor = "blue"
      break;
    case "Lufa-Lufa":
      cor = "yellow";
      break;
    }
    fundo.style.backgroundColor = cor;
}