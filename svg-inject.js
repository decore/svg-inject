document.addEventListener("DOMContentLoaded", function(event) {
	var icons = document.getElementsByClassName('isvg');
	console.log(icons);
	for (var i=0; i<icons.length; i++) {
		var icon = icons[i];
		console.log(icon);
		var http = new XMLHttpRequest();
		http.open('GET', '/img/svg/sketch-front.svg', true);
		http.onload = function () {
			icon.innerHTML = http.responseText;
		}
		http.send();
	};
});