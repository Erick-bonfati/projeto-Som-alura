// Buscar pelo seletor, classe e etc...: ( querySelector('') )

//const teclaPom = querySelector('.tecla_pom') // não vai funcionar pois não escolhemos o local onde a query vai fazer a busca

function tocaSom(seletorAudio) {
  const elemento = document.querySelector(seletorAudio); // captura o seletor dos elementos

  if(elemento != null && elemento.localName === "audio") { // se o nome do elemento selecionado for do tipo audio, execute isso
      elemento.play();
    } else {
    console.log('Elemento não encontrado ou seletor inválido!');
  }
}

const listaDeTeclas = document.querySelectorAll('.tecla'); // assim buscamos o seletor que contem as informações que passamos

for (let contador = 0; contador < listaDeTeclas.length; contador++) { // para cada tecla clicada, ele vai fazer o clique do som

  const tecla = listaDeTeclas[contador]; // selecionando a tecla pelo indice que está passando pelo contador, ex: [3] = tecla "tim"
  const instrumento = tecla.classList[1]; //pegando o indice 1 das classes que temos na nossa tecla = [3] = tecla_tim
  const idAudio = `#som_${instrumento}`; //concatena o id do audio com a classe q obtemos do instrumento = #som_tecla_Tim

  tecla.onclick = function() { // executa o som quando é clicado
    tocaSom(idAudio); // ex: toca o audio que contem a classe "#som_tecla_tim"
  }

  tecla.onkeydown = function (evento) { // quando uma tecla é clicada
    if(evento.code === "Space" || evento.code === "Enter") { // se a tecla clicada for...
      tecla.classList.add('ativa'); // adiciona a classe "ativa"
    }
  }

  tecla.onkeyup = function (evento) { // quando uma tecla é solta
    if(evento.code === "Space" || evento.code === "Enter") {
      tecla.classList.remove('ativa');
    }
  }
}

// listaDeTeclas[2].classList.add('ativa'); // ativa a classe "ativa" quando clicamos no botão

// tecla.classList.remove('ativa'); // remove a classe "ativa"

