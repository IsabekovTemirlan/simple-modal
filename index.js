//////////////////////////////////////////
//modal
/////////////////////////////////////////
const getEl = (el) => document.getElementById(el);

const show = getEl('show'),
 	modal = getEl('modal'),
	close = getEl('close');

const setVis = (el, style) => el.style.display = style;

const showElem = (node, p1, p2) => {
	node.addEventListener('click', () => {
		setVis(modal, p1);
		setVis(show, p2);
	});
}

showElem(show, 'block', 'none');
showElem(close, 'none', 'block');

///////////////////////////////////////////
//tic-tac-toe
///////////////////////////////////////////
//
// const field = getEl('field');
var ceil = document.getElementsByClassName("box-item"),
	reset = document.getElementById("reset-game"),
	message = document.getElementById("message")

// first = true;

stepCount = 0
player = "X"

const victory = [
	[1, 2, 3],
	[1, 4, 7],
	[1, 5, 9],
	[2, 5, 8],
	[3, 6, 9],
	[3, 5, 7],
	[4, 5, 6],
	[7, 8, 9]
];
x_player = [];
y_player = [];

field.addEventListener('click', (e) => {
	if(first) {
		e.target.innerText = 'X';
		x_player.push(+e.target.id);
	}

	if(!first) {
		e.target.innerText = 'Y';
		y_player.push(+e.target.id);		
	}
	first = !first;

	if(x_player.length > 4) {
		victory.map( v => (v[0] === x_player[0]) ? console.log('win') : null);
	}
});
for (var i = 0; i < ceil.length; i++) {
	ceil[i].addEventListener("click", currentStep);
}

function currentStep() {
	var num = +this.getAttribute("id");
	if (!this.textContent) {
		this.innerText = player;
		player === "X"
			? x_player.push(num) && this.classList.add("x")
			: y_player.push(num) && this.classList.add("y");
		if (
			(y_player.length > 2 || x_player.length > 2) &&
			(checkWin(y_player, num) || checkWin(x_player, num))
		) {
			for (var i = 0; i < ceil.length; i++) {
				ceil[i].removeEventListener("click", currentStep);
			}
			return (message.innerText = "Vinner player " + player);
		}
		changePlayer();
		stepCount++;
		stepCount === 9
			? (message.innerText = "Draw")
			: (message.innerText = "Step player " + player);
	}
}

function changePlayer()
{
	player === "X" ? (player = "Y") : (player = "X");
}

reset.addEventListener("click", function() {
	for (var i = 0; i < ceil.length; i++) {
		ceil[i].innerText = "";
	}
	x_player = [];
	y_player = [];
	player = "X";
	stepCount = 0;
	message.innerText = "Step player " + player;
	for (var i = 0; i < ceil.length; i++) {
		ceil[i].addEventListener("click", currentStep);
		ceil[i].classList.remove("x", "y");
	}
});

function checkWin(arr, number) {
	for (var w = 0, wLen = victory.length; w < wLen; w++) {
		var someWinArr = victory[w],
			count = 0;
		if (someWinArr.indexOf(number) !== -1) {
			for (var k = 0, kLen = someWinArr.length; k < kLen; k++) {
				if (arr.indexOf(someWinArr[k]) !== -1) {
					count++;
					if (count === 3) {
						return true;
					}
				}
			}
			count = 0;
		}
	}
}