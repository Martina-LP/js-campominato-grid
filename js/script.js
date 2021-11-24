
// L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, 
// in cui ogni cella contiene un numero tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.

const playButton = document.getElementById('play');
playButton.addEventListener('click', startGame);

// Funzione principale del gioco
function startGame() {

  const introText = document.getElementById('text');
  introText.classList.add('hidden');

  const mainGrid = document.getElementById('grid');
  mainGrid.classList.remove('hidden');
  mainGrid.innerHTML = '';

  // Scelta dell'utente
  const levelSelect = parseInt( document.getElementById('levels').value );
  let maxGridNumber;
  let gridItemDimension;
  if( levelSelect === 1 ) {
    maxGridNumber = 100;
    gridItemDimension = 10;
  } else if ( levelSelect === 2 ) {
    maxGridNumber = 81;
    gridItemDimension = 9;
  } else if ( levelSelect === 3 ) {
    maxGridNumber = 49;
    gridItemDimension = 7;
  }

  // Creo un determinato numero di 'cells' in base al livello selezionato
  for( let i = 1; i <= maxGridNumber; i++ ) {
  
  const newGeneratedCell = generateGridItem(i, gridItemDimension);

  newGeneratedCell.addEventListener('click', handleCellClick);

  mainGrid.appendChild(newGeneratedCell);
  }
};

function handleCellClick() {
  // Selezionando ogni cella aggiungo la classe 'selected'
  this.classList.add('selected');
};

// Genero un nuovo 'cells' per la griglia
// 
// innerNumber -> numero che compare all'interno della cella
// cellDimension -> dimensione della cella
// 
// return: l'elemento pronto per essere 'appeso' alla griglia
function generateGridItem(innerNumber, cellDimension) {
  // Creo un nuovo div
  const newCell = document.createElement('div');
  // Aggiungo la classe 'cells'
  newCell.classList.add('cells');
  // Popolo la cella con lo span col numero
  newCell.innerHTML = `<span>${innerNumber}</span>`;
  // Width e height vengono impostate in base al livello scelto dall'utente
  newCell.style.width = `calc(100% / ${cellDimension})`;
  newCell.style.height = `calc(100% / ${cellDimension})`;

  return newCell;
};