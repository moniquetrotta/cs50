// Implemente, um programa que primeiro pergunta ao usuário quanto dinheiro é devido
//Use o maior valor de moeda possível, e mantenha o valor de moedas usadas
// e depois imprime o número mínimo de moedas com as quais essa mudança pode ser feita.
//moedas disponíveis sejam de 25, 10, 5 e 1 centavo(s).
//quanto ainda preciso dar de troco
//quantas moedas eu usei

function calcularTroco() {
  //Pegando o valor dentro do input
  let valorATrocar = document.getElementById('valor').value;

  valorATrocar = parseFloat(valorATrocar);
  //contador das moedas utilizadas
  let moedas = 0;
  //Enquanto o valor a ser trocado não for zero [chegar ao final]
  while (valorATrocar > 0) {
    {
      if (valorATrocar >= 25) {
        valorATrocar -= 25; //diminui 25
        moedas++; //adiciona 1 moeda
      } else if (valorATrocar >= 10) {
        valorATrocar -= 10; //diminui 10
        moedas++; //adiciona 1 moeda
      } else if (valorATrocar >= 5) {
        valorATrocar -= 5; //diminui 5
        moedas++; //adiciona 1 moeda
      } else if (valorATrocar >= 1) {
        valorATrocar -= 1; //diminui 1
        moedas++; //adiciona 1 moeda
      }
    }
    //criando elementos html
    const divcontador = document.createElement('div');
    const pmoedas = document.createElement('p');
    const pvalor = document.createElement('p');
    const contador = document.getElementById('contador');
    //adicionando conteúdo ao elemento
    pmoedas.textContent = `Moedas utilizadas ${moedas}`;
    pvalor.textContent = `Valor de troco restante ${valorATrocar}`;

    //adicionando nome da class na div
    divcontador.classList.add('divcontador');

    //colocando o elemento na tag HTML criada
    contador.appendChild(divcontador);
    divcontador.appendChild(pmoedas);
    divcontador.appendChild(pvalor);

    // console.log('Moedas usadas:', moedas);
    // console.log('Valor de troco inserido:', valorATrocar);
  }

  // ----  HTML ----
  //Criando uma div no HTML
  const novaDiv = document.createElement('div');
  //Adicionando o conteúdo da div
  novaDiv.textContent = `Moedas utilizadas ${moedas}`;
  //Selecionando onde será inserida a div
  const contador = document.getElementById('contador');
  //Inserindo a div no HTML
  contador.appendChild(novaDiv);

  console.log('Moedas usadas:', moedas);
  console.log('Valor de troco inserido:', valorATrocar);
}
