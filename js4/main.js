 var arr = ['Lorem ipsum', 'Blanditiis, eaque', 'Iure, quis', 'Iure, voluptatum',
'Maxime, veniam', 'Inventore, a', 'Eius, qui', 'Accusantium, amet', 'Nemo, eos', 'Vero, quos'];

var newArr = arr.filter(function(str) {
	var letter = (str.indexOf('o'));
	if (letter !== -1) {
		return letter;
	}
});

console.log(arr);
console.log(newArr);

var d = new Date().toISOString();
console.log(d);


var date = new Date();
console.log(date.getFullYear()+'-'+date.getMonth()+'-'+date.getDate()+' , '+date.getHours()+':'+date.getMinutes());


var dl = new Date().toLocaleString();
console.log(dl);


