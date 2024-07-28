const baseTotalCards = 8;
const baseAvailableCards = ['🏍️', '🚓', '🚲', '✈️','🛩️','🏎️','🛸','🚁','🛰️'];
const levels = 5;

let cards = [];
let selectedCards = [];
let valuesUsed = [];
let currentMove = 0;
let currentAttempts = 0;
let valuePts = 0;
let hearts = 10; 
let sameIcon = ''; 

let cardTemplate = '<div class="card"><div class="back"></div><div class="face"></div></div>';

function activate(e) {
   if (currentMove < 2) {
      if ((!selectedCards[0] || selectedCards[0] !== e.target) && !e.target.classList.contains('active')) {
         e.target.classList.add('active');
         selectedCards.push(e.target);

         if (++currentMove == 2) {
            currentAttempts++;
            document.querySelector('.intentos').innerHTML = currentAttempts + ' intentos';

            // Obtener el contenido (icono) de las cartas seleccionadas
            let firstCard= selectedCards[0].querySelector('.face').innerText;
            let secondCard = selectedCards[1].querySelector('.face').innerText;

            if (firstCard === secondCard) {
               // Las cartas coinciden
               selectedCards = [];
               currentMove = 0;

               valuePts += 10; // Suma 10 puntos por adivinar dos cartas iguales
               document.querySelector('.puntos').innerText = valuePts + ' puntos'; // Actualiza el texto de puntos

               // Actualizar el texto de aciertos con el icono de la carta acertada
               sameIcon = firstCard;
               let aciertosElement = document.querySelector('.aciertos span');
               aciertosElement.innerText = `${aciertosElement.innerText} ${sameIcon}`; // Añade el emoji de la carta acertada

               if (checkAllCardsFound()) {
                  showNextLevelButton();
               }
            } else {
               setTimeout(() => {
                  selectedCards[0].classList.remove('active');
                  selectedCards[1].classList.remove('active');
                  selectedCards = [];
                  currentMove = 0;

                  hearts--; // Resta un corazón
                  updateHeartsDisplay(); // Actualiza el texto de corazones

                  if (hearts === 0) {
                     showGameOverModal(); // Muestra la ventana modal de fin del juego
                  }
               }, 600);
            }
         }
      }
   }
}

function updateHeartsDisplay() {
   let heartsDisplay = '💜'.repeat(hearts);
   document.querySelector('.hearts span').innerText = heartsDisplay; // Actualiza el texto de corazones
}

function checkAllCardsFound() {
   return document.querySelectorAll('.card:not(.active)').length === 0;
}

function resetAciertos() {
    document.querySelector('.aciertos span').innerText = ' 🏅 Aciertos '; // Reinicia el texto de aciertos
 }

function showNextLevelButton() {
   let nextLevelButton = document.createElement('button');
   nextLevelButton.id = 'nextLevel';
   nextLevelButton.innerText = 'Next Level';
   nextLevelButton.addEventListener('click', () => {
      let currentLevel = parseInt(document.querySelector('#currentLevel').innerText);
      if (currentLevel < levels) {
         document.querySelector('#currentLevel').innerText = currentLevel + 1;
         document.querySelector('.level span').innerText = 'Level ' + (currentLevel + 1); // Actualiza el texto del nivel
         initializeLevel(currentLevel + 1);
         resetAciertos();
      } else {
         showEndGameModal(); // Muestra la ventana modal al finalizar el último nivel
      }
      nextLevelButton.remove();
   });
   document.querySelector('#juego').append(nextLevelButton);
}

function randomValue(totalCards) {
   let rnd = Math.floor(Math.random() * totalCards * 0.5);
   let values = valuesUsed.filter(value => value === rnd);
   if (values.length < 2) {
      valuesUsed.push(rnd);
   } else {
      randomValue(totalCards);
   }
}

function getFaceValue(value, availableCards) {
   let rtn = value;
   if (value < availableCards.length) {
      rtn = availableCards[value];
   }
   return rtn;
}

function initializeLevel(level) {
   let totalCards = baseTotalCards + (level * 2);
   let availableCards = baseAvailableCards.slice();
   for (let i = 0; i < level; i++) {
   }

   cards = [];
   selectedCards = [];
   valuesUsed = [];
   currentMove = 0;
   currentAttempts = 0;

   document.querySelector('#juego').innerHTML = ''; // Limpia el juego anterior

   for (let i = 0; i < totalCards; i++) {
      let div = document.createElement('div');
      div.innerHTML = cardTemplate;
      cards.push(div);
      document.querySelector('#juego').append(cards[i]);
      randomValue(totalCards);
      cards[i].querySelectorAll('.face')[0].innerHTML = getFaceValue(valuesUsed[i], availableCards);
      cards[i].querySelectorAll('.card')[0].addEventListener('click', activate);
   }
}

function showEndGameModal() {
   let modal = document.createElement('div');
   modal.id = 'endGameModal';
   modal.innerHTML = `
      <div class="modal-content">
         <h2>Fin del Juego</h2>
         <button id="restartButton">Reiniciar</button>
      </div>
   `;
   document.body.appendChild(modal);
   document.querySelector('#restartButton').addEventListener('click', () => {
      location.reload(); // Reinicia la página
   });
}


initializeLevel(0); // Inicializa el primer nivel

// Agrega elemento para mostrar el nivel actual
let currentLevelDisplay = document.createElement('div');
currentLevelDisplay.id = 'currentLevel';
currentLevelDisplay.innerText = '1';
document.body.appendChild(currentLevelDisplay);

// Agrega elemento para mostrar los intentos actuales
let statsDisplay = document.createElement('div');
statsDisplay.id = 'stats';
statsDisplay.innerHTML = '0 intentos';
document.body.appendChild(statsDisplay);

// Agrega elemento para mostrar los corazones
let heartsDisplay = document.createElement('div');
heartsDisplay.id = 'hearts';
document.body.appendChild(heartsDisplay);

// Agrega elemento para mostrar los aciertos
let aciertosDisplay = document.createElement('div');
aciertosDisplay.className = 'aciertos';
aciertosDisplay.innerHTML = '<span>Aciertos 0</span>';
document.body.appendChild(aciertosDisplay);
