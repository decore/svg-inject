// document.addEventListener("DOMContentLoaded", function(event) {
// 	var elements = document.querySelectorAll('.isvg');
// 	for (var i = 0, max = elements.length; i < max; i++) {
// 		var request = new XMLHttpRequest();
// 		request.open('GET', '/img/svg/sketch-front.svg', true);
// 		request.onload = function() {
// 			if (request.status >= 200 && request.status < 400) {
// 				var data = JSON.parse(request.responseText);
// 				console.log('test');
// 				console.log(data);
// 			} else {
// 			}
// 		};
// 		request.send();
// 	};
// });
document.addEventListener("DOMContentLoaded", function(event) {
	// var icons = document.getElementsByClassName('icon');
	// for (var i=0; i<=icons.length; i++) {
		// var icon = icons[i];
		// console.log(icon);
		var http = new XMLHttpRequest();
		http.open('GET', '/img/svg/sketch-front.svg', true);
		http.onload = function () {
			// icon.insertAdjacentHTML('afterbegin', http.responseText);
			console.log(http.responseText);
		}
		http.send();
	// };
});