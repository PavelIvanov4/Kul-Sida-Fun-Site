let base = document.getElementsByTagName('nav');
base[0].addEventListener('click', func1 = () => {
	document.getElementsByClassName('block1')[0].style.display = "block";
	document.getElementsByClassName('block2')[0].style.display = "none";
	document.getElementsByClassName('block3')[0].style.display = "none";
});

base[1].addEventListener('click', func2 = () => {
	document.getElementsByClassName('block1')[0].style.display = "none";
	document.getElementsByClassName('block2')[0].style.display = "block";
	document.getElementsByClassName('block3')[0].style.display = "none";
});

base[2].addEventListener('click', func3 = () => {
	document.getElementsByClassName('block1')[0].style.display = "none";
	document.getElementsByClassName('block2')[0].style.display = "none";
	document.getElementsByClassName('block3')[0].style.display = "block";
});

let move = document.getElementsByTagName('button');
function funFunction() {
	document.getElementById('orange-id').style.display = "block";
	document.getElementById('orange-id').style.animationPlayState = "running";
}
move[0].addEventListener('click', funFunction);

function translateEn() {
	var para = document.getElementsByTagName('p');
	var navigation = document.getElementsByTagName('nav');
	var upper = document.getElementsByTagName('h3');
	var parts = document.getElementsByClassName('art');
	para[0].innerHTML = "Welcome to this website! Here you find different articles, photos and other things that are seen everywhere on the Internet. Everything looks quite simple here, but we've chosen something that can look even better.<br><br>Have a nice day!";
	navigation[0].innerHTML = "Home";
	navigation[1].innerHTML = "Articles";
	navigation[2].innerHTML = "Fun";
	document.getElementsByTagName('h2')[0].innerHTML = "Kul Sida (Fun Page)";
	upper[0].innerHTML = "I present an article that you can change";
	upper[1].innerHTML = "How we met our good friend";
	upper[2].innerHTML = "In the library";
	parts[0].innerHTML = "It looks like normal text, but you can click and see what happens ??? so it becomes like a mini notebook.";
	parts[1].innerHTML = "We traveled in Sk??ne last month and there we saw a red house where our friend lives. He studies in Gothenburg.";
	parts[2].innerHTML = "My brother (his name is Peter) went to the library in our town last weekend and he enjoyed reading there.";
	document.getElementsByTagName('button')[0].innerHTML = "Start";
}

function translateEn2() {
	var para2 = document.getElementsByTagName('p');
	var navigation2 = document.getElementsByTagName('nav');
	var upper2 = document.getElementsByTagName('h3');
	var parts2 = document.getElementsByClassName('art');
	para2[0].innerHTML = "V??lkommen till denna webbplats! H??r finns olika artiklar, foton och andra saker som ses ??verallt p?? Internet. Allt ??r ganska enkelt h??r, men vi har valt n??got som kan se ??nnu b??ttre ut.<br><br> ??nskar er en h??rlig dag!";
	navigation2[0].innerHTML = "Hem";
	navigation2[1].innerHTML = "Artiklar";
	navigation2[2].innerHTML = "N??got Kul";
	document.getElementsByTagName('h2')[0].innerHTML = "Kul Sida";
	upper2[0].innerHTML = "Jag presenterar en artikel som ni kan f??r??ndra";
	upper2[1].innerHTML = "Hur tr??ffade vi v??r bra v??n";
	upper2[2].innerHTML = "I biblioteket";
	parts2[0].innerHTML = "Det verkar som en normal text, men du kan klicka och se vad som h??nder ??? s?? blir det som en anteckningsbok.";
	parts2[1].innerHTML = "Vi reste i Sk??ne f??rra m??naden och d?? s??g vi ett r??tt hus var v??r v??n lever. Han studerar i G??teborg.";
	parts2[2].innerHTML = "Min bror som heter Peter gick till bibliotek i v??r stad f??rra helgen och han tyckte om att l??sa d??r.";
	document.getElementsByTagName('button')[0].innerHTML = "B??rja";
}

document.getElementById('flag1').addEventListener('click', translateEn);
document.getElementById('flag2').addEventListener('click', translateEn2);