document.getElementById("active-passaword").addEventListener("click", function(){ 
  
  const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*";

  let senhaGerada = ""
  let tamanho = 12;

  for (let i = 0; i < tamanho; i++) {
    let numeroAleatorio = Math.floor(Math.random() * caracteres.length);
    senhaGerada += caracteres[numeroAleatorio];
  }

  document.getElementById("view-passaword").value = senhaGerada
  document.getElementById("active-passaword").innerText = "Regerar";



})