const getEl = (el) =>  document.getElementById(el);

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

