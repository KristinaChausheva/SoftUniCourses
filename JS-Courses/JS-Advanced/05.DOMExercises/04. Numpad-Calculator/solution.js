function solve() {
   let pad = document.getElementsByClassName('keys')[0];
   let output = document.getElementById('expressionOutput');
   let result = document.getElementById('resultOutput');
   let clearBtn = document.getElementsByClassName('clear')[0];

   let operators = ['+','-', '/', '*'];

   let oprations = {
       '+': (num1, num2) => Number(num1) + Number(num2),
       '-': (num1, num2) => Number(num1) - Number(num2),
       '*': (num1, num2) => Number(num1) * Number(num2),
       '/': (num1, num2) => Number(num1) / Number(num2),
       
    } 

   clearBtn.addEventListener('clock', (e) => {
       output.innerHTML = "";
       result.innerHTML = "";
   })

   pad.addEventListener('click', ({ target: { value } }) => {

        if (!value) {
            return;
        }

        if (value === "=") {
            let params = output.innerHTML.split(' ');
            result.innerHTML = operations[params[1]](params[0], params[2])
            return;
        }

        if (operations.includes(value)) {
            output.innerHTML = output.innerHTML + `${value}`
            return;
        }
    output.innerHTML = output.innerHTML + value;
    console.log(value);
   }
   
}   

