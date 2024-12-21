// Referência ao botão
const agendarBtn = document.getElementById("finaliza");
const dataInput = document.getElementById("data");

// Adiciona o evento de clique
agendarBtn.addEventListener("click", () => {
  const dataSelecionada = dataInput.value;

  if (dataSelecionada) {
    // Exibe o alerta com a data escolhida
    alert(`Seu agendamento foi confirmado para: ${dataSelecionada}`);
  } else {
    // Exibe o alerta se nenhuma data foi selecionada
    alert("Por favor, escolha uma data antes de agendar.");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const mobileMenu = document.querySelector(".mobile-menu");
  const navList = document.querySelector(".nav-list");

  function toggleMenu() {
    mobileMenu.classList.toggle("active");
    navList.classList.toggle("active");
  }

  mobileMenu.addEventListener("click", toggleMenu);
});

// Obtém o parâmetro "servico" da URL
const params = new URLSearchParams(window.location.search);
const selectedServico = params.get("servico");

// Pré-seleciona o serviço no formulário, se existir
if (selectedServico) {
  const servicoSelect = document.getElementById("servico");
  servicoSelect.value = selectedServico;
}
