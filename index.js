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

var ceil = document.getElementsByClassName("box-item"),
	reset = document.getElementById("reset-game"),
	message = document.getElementById("message")

stepCount = 0//нач.счёт
player = "X"//текущий игрок
x_player = [];
y_player = [];
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

for (var i = 0; i < ceil.length; i++) {
	ceil[i].addEventListener("click", currentStep);
}

function currentStep() {
	// в перемменный num записываем значении id по которой кликнули
	var num = +this.getAttribute("id");
	if (!this.textContent) {//проверка содержании значении
		this.innerText = player;
		player === "X"
			? x_player.push(num) && this.classList.add("x")
			: y_player.push(num) && this.classList.add("o");
		if (
			(y_player.length > 2 || x_player.length > 2) &&
			(checkWin(y_player, num) || checkWin(x_player, num))
		) {
			// останавливаем ход игроков когда один из игроков выиграл
			for (var i = 0; i < ceil.length; i++) {
				ceil[i].removeEventListener("click", currentStep);
			}
			return (message.innerText = "Vinner player " + player);//обьявляем победителя
		}
		changePlayer();
		stepCount++;
		stepCount === 9 //проверка ничьи
			? (message.innerText = "Draw")
			: (message.innerText = "Step player " + player);
	}
}
//Смена ходов игроков
function changePlayer()
{
	player === "X" ? (player = "O") : (player = "X");
}
//сброс счёта
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
		ceil[i].classList.remove("x", "o");//сброс фонового цвета
	}
});
//смена игроков
function checkWin(arr, number) {
	for (var w = 0, wLen = victory.length; w < wLen; w++) {//проверка массива
		var someWinArr = victory[w],
			count = 0;
		if (someWinArr.indexOf(number) !== -1) { //проверям каж.массиве есть ли та цифра по которой кликнули
			for (var k = 0, kLen = someWinArr.length; k < kLen; k++) {
				if (arr.indexOf(someWinArr[k]) !== -1) {//проверям выигрышные комбинации в массиве
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