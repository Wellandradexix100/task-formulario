function verificacao() {
  let senha = document.getElementById("senha").value;
  let verificacaoSenha = document.getElementById("confirmSenha").value;
  if (senha === verificacaoSenha) {
    alert("cadastro realizado com sucesso");
  } else {
    alert("As senhas não são iguais");
  }
}
