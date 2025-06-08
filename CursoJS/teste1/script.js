document.getElementById('purchaseForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Evita o envio do formulário padrão
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  alert(`Obrigado, ${name}! Em breve entraremos em contato pelo e-mail ${email}.`);
});
