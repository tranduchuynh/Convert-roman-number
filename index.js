function palindrome(str) {
	const regex = /[\W_]/g;
	let newStr = str.toLowerCase().replace(regex, '');
	let result = newStr.split('').reverse().join('');
	if(newStr !== result) {
		return 'No, This is not palindrome.';
	}
	return 'Yes, This is palindrome.';
}

function main() {
	let input = document.getElementById('new-str');
	let newInput = input.value;
	let checkPalindrome = '';
	if(newInput === '') {
		alert('This string is not empty')
	}else {
		checkPalindrome = palindrome(newInput);
		input.value = '';
	}
	
	return document.getElementById('result').innerHTML = checkPalindrome;
}

let check = document.getElementById('check-btn');
if(check) {
	check.addEventListener('click', main);
}

/*-------------------------------------------------------------------------------------------------*/
function convertToRoman(num) {
	let roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  	let ara = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  	let result = '';
  	for(let i = 0; i < roman.length; i++) {
  		while(num >= ara[i]){
  			result += roman[i];
  			num -= ara[i]
  		}
  	}
  	return result;
}

function mainRoman() {
	let input = document.getElementById('roman');
	let newInput = input.value;
	let convertRoman = '';
	if(newInput === '') {
		alert('This string is not empty || not number');
		input.value = '';
	}else {
		convertRoman = convertToRoman(newInput);
		input.value = '';
	}
	
	 return document.getElementById('result-roman').innerHTML = convertRoman;
}

let convert = document.getElementById('convert-btn');
if(convert) {
	convert.addEventListener('click', mainRoman);
}

/*-------------------------------------------------------------------------------------------------*/

let rot = document.getElementById('convert-rot-btn');
if(rot) {
	rot.addEventListener('click', rot13);
}
function rot13() {
	let input = document.getElementById('rot');
	let newInput = input.value;
	if(newInput === '') {
		alert('This string is not empty')
	}else {
		let newArr = newInput.toUpperCase().split('');
		let newStr = '';
		let result = newArr.map(function(x) {
			if(x.charCodeAt(x) < 65) {
				newStr += x;
			}else if(x.charCodeAt(x) < 78) {
				x = x.charCodeAt(x) + 13;
				newStr += String.fromCharCode(x);
			}else {
				x = x.charCodeAt(x) - 13;
				newStr += String.fromCharCode(x);
			}
		});
		input.value = '';
		document.getElementById('result-rot').innerHTML = newStr;
	}
}

/*-------------------------------------------------------------------------------------------------*/

let binary = document.getElementById('convert-binary-btn');
binary.addEventListener('click', binaryAgents);

function binaryAgents() {
	let input = document.getElementById('binary');
	let newInput = input.value;
	let result = ''
	if(newInput === '' || newInput.length < 8) {
		alert('This string is not empty or great than 8');
		input.value = '';
	}else {
		let newArr = newInput.split(' ');
		let newStr = newArr.map(function(x) {
			result += String.fromCharCode(parseInt(x, 2));
		}).join('');
		input.value = '';
	}
	document.getElementById('result-binary').innerHTML = result;
}

/*-------------------------------------------------------------------------------------------------*/

let fah = document.getElementById('convert-celsius-btn');
fah.addEventListener('click', convertToF);

function convertToF() {
	let input = document.getElementById('celsius');
	let newInput = input.value;
	let fahrenheit = '';
	if(newInput === '') {
		alert('This string is not empty')
	}else {
		fahrenheit = parseInt(newInput) * 9 / 5 + 32;
		input.value = '';
	}
	document.getElementById('result-celsius').innerHTML = fahrenheit;
}