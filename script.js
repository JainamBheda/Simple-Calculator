let string = "";
let memory = 0; 
let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        try {
            const value = e.target.innerHTML;
            
            if (value === '=') {
                try {
                    string = eval(string);
                    document.querySelector('input').value = string;
                } catch (err) {
                    document.querySelector('input').value = "Error";
                    string = "";
                }
            } else if (value === 'C') {
                string = "";
                document.querySelector('input').value = string;
            } 
            else if (value === '←') {
                string = string.slice(0, -1);
                document.querySelector('input').value = string;
            }
            else if (value === '√') {
                try {
                    string = Math.sqrt(parseFloat(string)).toString();
                    document.querySelector('input').value = string;
                } catch (err) {
                    document.querySelector('input').value = "Error";
                    string = "";
                }
            }
             else {
                if (['+', '-', '*', '/'].includes(value) && 
                    ['+', '-', '*', '/'].includes(string.slice(-1))) {
                    return;
                }
                string += value;
                document.querySelector('input').value = string;
            }
        } catch (err) {
            console.error("An error occurred: ", err);
        }
    });
});
