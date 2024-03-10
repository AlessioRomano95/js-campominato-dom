console.log('js ok')

// 1. Selezione degli elementi HTML
// 2. Impostazioni di base per la griglia di gioco
// 3. Calcolo del numero totale di celle e aggiunta delle bombe
// 4. aggiunta della funzione per generare 16 bombe randomiche
// 5. Funzione per creare una cella della griglia
// 6. Ciclo per creare celle e gestire i click
// 7. Event listener per il click sulla cella
// 8. Controlla se il numero della cella corrisponde a una bomba
// 9. Aggiunta della cella alla griglia nel documento HTML

// 1.
const button = document.getElementById('pulsante')
const grid = document.getElementById('grid')
const points = document.getElementById('punteggio')

// 2.
const rows = 10
const cols = 10 

// 3.
const totCells = rows * cols
const bombs = 16 
const maxPoints = totCells - bombs

let score = 0;
points.innerText = score 

let isGameHover = false

const maxBombs = createBombs(totCells, bombs)
console.log(maxBombs)

// 4.
function createBombs(maxBombs, bombs) {
  const totalBombs = []
  while (totalBombs.length < bombs) {
      const randomBombs = Math.floor(Math.random() * maxBombs) + 1
      if (!totalBombs.includes(randomBombs)) totalBombs.push(randomBombs)
  }
  return totalBombs
}

// 5.
const createCells = content => {
    const cells = document.createElement('div')
    cells.className = 'cells'
    cells.innerText = content
    return cells
}

// 6.
for (let i = 1; i <= totCells; i++) {
  const newCells = createCells(i);
// 7.
  newCells.addEventListener('click', () => {
      if (isGameHover || newCells.classList.contains('clicca')) {
          return;
      }

      newCells.classList.add('clicca');
      const cellNumber = parseInt(newCells.innerText);

      //. 8.
      if (maxBombs.includes(cellNumber)) {
          isGameHover = true;
          newCells.classList.add('bomba');
          console.log('hai pestato una bomba, il tuo punteggio è ' + score);
      } else {
          score++;
          points.innerText = score;
          console.log('score: ', score);
          if (score === maxPoints) {
              console.log('complimenti hai vinto');
              isGameHover = true;
          }
      }
  });

  // 9.
  grid.appendChild(newCells);
}
