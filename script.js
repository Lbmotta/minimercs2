
// Mostra a data/hora atual no rodapé
window.onload = function() {
  const now = new Date();
  document.getElementById('dataHora').innerText = now.toLocaleString();

  const hora = now.getHours();
  let saudacao = "";
  if (hora < 12) {
    saudacao = "Bom dia, aqui encontra os melhores produtos!";
  } else if (hora < 18) {
    saudacao = "Boa tarde, aqui encontra os melhores produtos!";
  } else {
    saudacao = "Boa noite, aqui encontra os melhores produtos!";
  }
  document.getElementById('saudacao').innerText = saudacao;
};
