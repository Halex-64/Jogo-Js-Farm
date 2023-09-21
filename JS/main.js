// Seleciona o elemento <img> no documento HTML.
var img = document.querySelector('img');

// Variáveis para controlar a animação.
var pos = 0;       // A posição atual na imagem sprite.
var largura = 298; // A largura de cada quadro na imagem.
var altura = 192;  // A altura de cada quadro na imagem.

// Função para avançar para o próximo quadro da animação.
function prox() {
    // Calcula a posição vertical (linha) na imagem sprite.
    var linha = Math.floor(pos / 8) * altura;

    // Calcula a posição horizontal (coluna) na imagem sprite.
    var coluna = pos % 4 * largura;

    // Define a posição da imagem para mostrar o quadro correto.
    img.style.marginTop = -linha + 'px';
    img.style.marginLeft = -coluna + 'px';

    // Aumenta a posição atual após definir a posição da imagem.
    pos++;

    // Se atingiu o último quadro, volta para o primeiro.
    if (pos == 10) pos = 0;
}

// Chama a função 'prox()' a cada 150 milissegundos para criar a animação.
setInterval(prox, 150);
