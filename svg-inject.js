document.addEventListener("DOMContentLoaded", function(event) {
	var icons = document.getElementsByClassName('isvg');
	// console.log(icons);
	// console.log(typeof(icons));
	// icons.forEach(function(item, i, icons) {
	Array.prototype.forEach.call(icons, function(icon, i){
		// var icon = item;
		// console.log(icon);
		var http = new XMLHttpRequest();
		http.open('GET', '/img/svg/' + icon.getAttribute('data-icon') + '.svg', true);
		http.onload = function () {
			// icon.outerHTML = '123456789';
			icon.innerHTML = http.responseText;
		}
		http.send();
	});
});
// GMne0eKs0e0B
// 909PyEz0PX0x