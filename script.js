console.log('js ok')

// 1. Selezione degli elementi HTML
// 2. Impostazioni di base per la griglia di gioco
// 3. Calcolo del numero totale di celle
// 4. Funzione per creare una cella della griglia
// 5. Event listener per il click sul bottone "inizia gioco"
// 7. Event listener per il click sulla cella
// 8. Aggiunta della cella alla griglia nel documento HTML

// 1.
const button = document.getElementById('pulsante')
const grid = document.getElementById('grid')

// 2.
const rows = 10
const cols = 10 

// 3.
const totCells = rows * cols 

// 4.
const createCells = content => {
    const cells = document.createElement('div')
    cells.className = 'cells'
    cells.innerText = content
    return cells
}

// 5.6.7.
button.addEventListener('click', function(){
  grid.innerHTML = '';
  for (let i = 1; i <= totCells; i++){
      const newCells = createCells(i);
      newCells.addEventListener('click', () => {
          newCells.classList.toggle('clicca');
          console.log(newCells);
      });

      // 8.
      grid.appendChild(newCells);
  }
});
