var rows = 2;
var tiles = 20;
var darkColor = '#000';
var lightColor = '#fff';
var windowWidth = window.innerWidth;

function oe (i) {
	return i % 2 === 0 ? 'even' : 'odd';
}

function createTiles (tile, index) {
	tile = tile.cloneNode(true);
	tile.classList.add(oe(index));
	return tile;
}

function createRows (row, index) {
	row = row.cloneNode(true);
	row.classList.add(oe(index));
	return row;
}

function createBoard (rows, tiles, board, index) {
	var tile = document.createElement('div');
	var row = document.createElement('div');
	var back = document.createElement('div');
	var front = document.createElement('div');

	board.classList.add('i-' + index);
	row.classList.add('checker-row');
	tile.classList.add('checker-tile');
	back.classList.add('checker-tile-back');
	front.classList.add('checker-tile-front');

	tile.appendChild(front.cloneNode());
	tile.appendChild(back.cloneNode());

	// tile.style.width = windowWidth / tiles + 'px';
	// tile.style.height = windowWidth / tiles + 'px';

	for (var i = 0; i < rows; i++) {
		var rowClone = createRows(row, i);

		for (var c = 0; c < tiles; c++) {
			var tileClone = createTiles(tile, c);
			rowClone.appendChild(tileClone);
		}

		board.appendChild(rowClone);
	}

}

window.addEventListener('DOMContentLoaded', function () {
	var checkerBoards = document.querySelectorAll('.checker-board');

	for (var i = 0; i < checkerBoards.length; i++) {
		createBoard(rows, tiles, checkerBoards[i], i);
	}

});
