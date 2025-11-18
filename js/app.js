let amigos = [];

function adicionar() {
  const input = document.getElementById("nome-amigo");
  const nome = input.value.trim();

  if (nome === "") {
    alert("Digite um nome válido.");
    return;
  }

  if (amigos.includes(nome)) {
    alert("Esse nome já foi adicionado.");
    return;
  }

  amigos.push(nome);
  input.value = "";
  atualizarLista();
}

function atualizarLista() {
  const lista = document.getElementById("lista-amigos");
  lista.innerText = amigos.join(", ");
}

function sortear() {
  if (amigos.length < 2) {
    alert("Adicione pelo menos dois amigos para sortear.");
    return;
  }

  let sorteio = [];
  let copia = [...amigos];

  for (let i = 0; i < amigos.length; i++) {
    let amigo = amigos[i];
    let possiveis = copia.filter((nome) => nome !== amigo);
    let sorteado = possiveis[Math.floor(Math.random() * possiveis.length)];

    sorteio.push(`${amigo} → ${sorteado}`);
    copia = copia.filter((nome) => nome !== sorteado);
  }

  document.getElementById("lista-sorteio").innerText = sorteio.join("\n");
}

function reiniciar() {
  amigos = [];
  document.getElementById("lista-amigos").innerText = "";
  document.getElementById("lista-sorteio").innerText = "";
}