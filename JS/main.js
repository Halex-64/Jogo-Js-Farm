/*const personagem = document.getElementById('personagem');
let posicaoHorizontal = 0;
let posicaoVertical = 0;
let posicaoDesce = 0;
const step = 10;

function updatePersonagemPosition() {
    personagem.style.left = posicaoHorizontal + 'px';
    personagem.style.top = posicaoVertical + 'px';
    personagem.style.down = posicaoDesce + 'px';
  }
  
  
  document.addEventListener('keydown', (event) => {
    switch (event.key) {
      case 'ArrowLeft':
        posicaoHorizontal -= step;
        break;
      case 'ArrowRight':
        posicaoHorizontal += step;
        break;
    }


    updatePersonagemPosition();
  });*/

let canvas = document.getElementById("personagem")
let ctx = canvas.getContext('2d')

let personagem = new Image()
personagem.id="personagem"
personagem.addEventListener('load',()=>{
ctx.drawImage(personagem,0,0)
})