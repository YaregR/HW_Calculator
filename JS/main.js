let form = document.forms.calculator;
let resEl = document.querySelector('.result');
let multiplyBtn = document.querySelector('.multiplyBtn');
let divideBtn = document.querySelector('.divideBtn');
let powBtn = document.querySelector('.powBtn');
let rootBtn = document.querySelector('.rootBtn');
    
multiplyBtn.addEventListener('click', (ev) => {
    ev.preventDefault();

    let formData = new FormData(form);

    let number1 = formData.get('number1');
    let number2 = formData.get('number2');
    let digits = formData.get('digits');

    let res = number1 * number2;
    let resDigit = Number (res.toFixed(digits));
    // resEl.insertAdjacentHTML('beforeend', resDigit);
    resEl.innerHTML = resDigit;
});

divideBtn.addEventListener('click', (ev) => {
    ev.preventDefault();

    let formData = new FormData(form);

    let number1 = formData.get('number1');
    let number2 = formData.get('number2');
    let digits = formData.get('digits');

    let res = number1 / number2;
    let resDigit = Number (res.toFixed(digits));
    resEl.innerHTML = resDigit;
});

powBtn.addEventListener('click', (ev) => {
    ev.preventDefault();

    let formData = new FormData(form);

    let number1 = formData.get('number1');
    let number2 = formData.get('number2');
    let digits = formData.get('digits');

    let res = Math.pow (number1, number2);
    let resDigit = Number (res.toFixed(digits));
    resEl.innerHTML = resDigit;
});

rootBtn.addEventListener('click', (ev) => {
    ev.preventDefault();

    let formData = new FormData(form);

    let number1 = formData.get('number1');
    let number2 = formData.get('number2');
    let digits = formData.get('digits');

    let res = Math.pow (number1, 1/number2);
    let resDigit = Number (res.toFixed(digits));
    resEl.innerHTML = resDigit;
});