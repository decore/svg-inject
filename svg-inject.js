document.addEventListener("DOMContentLoaded", function(event) {
	var elements = document.querySelectorAll('.isvg');
	for (var i = 0, max = elements.length; i < max; i++) {
		var request = new XMLHttpRequest();
		request.open('GET', 'http://prestapro-test.verstalishe.ru/img/svg/' + elements[i].getAttribute('data-icon') + '.svg', true);
		request.onload = function() {
			if (request.status >= 200 && request.status < 400) {
				var data = JSON.parse(request.responseText);
				 console.log(data);
			} else {
			}
		};
	};
});