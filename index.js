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

const field = getEl('field');

let first = true;
let x_player = [];
let y_player = [];

const victory = [
[0,1,2],
[3,4,5],
[6,7,8],
[0,4,8],
[2,4,6],
[0,3,6],
[2,5,8]
];


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
