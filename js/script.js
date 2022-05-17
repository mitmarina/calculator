let operators = ['+', '-', '/', 'x'];
let keys = document.querySelectorAll('#calculator td');
var decimalAdded = false;

for(let i = 0; i < keys.length; i++) {
    keys[i].onclick = function(e) {
        var mainInput = document.querySelector('.main-button');
		var inputVal = mainInput.innerHTML;
		var btnVal = this.innerHTML;
		

        

        if(btnVal == 'C') {
			mainInput.innerHTML = '';
			decimalAdded = false;
		} else if(btnVal == '=') {
			let equation = inputVal;
			var lastChar = equation[equation.length - 1];
			
			
			equation = equation.replace(/x/g, '*').replace(/÷/g, '/');
			
			
			if(operators.indexOf(lastChar) > -1 || lastChar == '.')
				equation = equation.replace(/.$/, '');
			
			if(equation)
				mainInput.innerHTML = eval(equation);
				
			decimalAdded = false;
		} else if(operators.indexOf(btnVal) > -1) {
			
			var lastChar = inputVal[inputVal.length - 1];
			
			
			if(inputVal != '' && operators.indexOf(lastChar) == -1) 
				mainInput.innerHTML += btnVal;
			
			else if(inputVal == '' && btnVal == '-') 
				mainInput.innerHTML += btnVal;
			
			
			if(operators.indexOf(lastChar) > -1 && inputVal.length > 1) {
				
				mainInput.innerHTML = inputVal.replace(/.$/, btnVal);
			}
			
			decimalAdded =false;
		} else if(btnVal == '.') {
			if(!decimalAdded) {
				mainInput.innerHTML += btnVal;
				decimalAdded = true;
			}
		} else {
			mainInput.innerHTML += btnVal;
		}
		
		e.preventDefault();
	} 
}


