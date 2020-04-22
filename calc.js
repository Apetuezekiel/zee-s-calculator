
let btn = document.querySelectorAll('.btn');
let history = document.querySelector('#history-value');
let outputs = document.querySelector('#outputs-value'); 

for (let a=0; a<btn.length; a++) {
    btn[a].addEventListener("click", function () {
        let grabInput = btn[a].getAttribute("data-input");
        outputs.innerHTML += grabInput;
    })
}


equals.addEventListener('click', evaluate => {
    history.innerHTML = outputs.innerHTML
    let n = eval(outputs.innerHTML);
    let formattedNum = n.toLocaleString('en');
    outputs.innerHTML = formattedNum;
})

clear.addEventListener('click', clearInput => {
    outputs.innerHTML  = '';
    history.innerHTML = '';
})

backspace.addEventListener('click', clearInput => {
    let outputStr = outputs.innerHTML;
    let backspacedOutput = outputStr.slice(0, outputStr.length-1)
    outputs.innerHTML = backspacedOutput;
    if (outputs.innerHTML === '') {
        outputs.innerHTML = history.innerHTML;
        history.innerHTML = '';
    }
})
