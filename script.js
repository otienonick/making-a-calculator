const buttons = document.querySelectorAll('#btn');
const input= document.querySelector('input');
const equalButton = document.querySelector('.equalButton');
const clearButton = document.querySelector('.clearButton');



for (let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click', function () {
        let number = buttons[i].getAttribute('data-num');
        input.value += number
    })
}

equalButton.addEventListener('click',function () {
    if(input.value === ''){
        alert('screen is empty')

    }else{
    let value = eval(input.value);
    input.value = value;



    }
})

clearButton.addEventListener('click',function(){
    input.value = '';
})