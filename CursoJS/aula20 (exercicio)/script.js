function meuEscopo () {
    const form = document.querySelector('.form'); 
    const resultado = document.querySelector('.resultado');

    function recebeEventoForm (evento) {
        evento.preventDefault();

        const nome = form.querySelector('.nome').value;
        const sobrenome = form.querySelector('.sobrenome').value;
        const peso = form.querySelector('.peso').value;
        const altura = form.querySelector('.altura').value;

        const paragragrafoInfo = document.createElement('p');
        paragragrafoInfo.innerHTML = `Nome: <strong>${nome}</strong>, Sobrenome: <strong>${sobrenome}</strong>, Peso: <strong>${peso} kg.</strong>, Altura: <strong>${altura} m.</strong>`;

        resultado.appendChild(paragragrafoInfo);
    };

form.addEventListener('submit', recebeEventoForm);
};
meuEscopo();