window.addEventListener('DOMContentLoaded', function () {
	var checkerBoards = document.querySelectorAll('.checker-board');
	var checkerTile = document.createElement('div');

	checkerTile.setAttribute('class', 'checker-tile');

	// var width = window.innerWidth;

	for (var i = 0; i < checkerBoards.length; i++) {
		var checkerBoard = checkerBoards[i];

		for (var c = 0; c < 20; c++) {
			checkerBoard.append(checkerTile.cloneNode())
		}


	}

});
