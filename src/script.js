const display = document.querySelector('.display')
const input = document.querySelector('#input-el')
const result_view = document.querySelector('.result')

const zero = document.querySelector('#zero')
const one = document.querySelector('#one')
const two = document.querySelector('#two')
const three = document.querySelector('#three')
const four = document.querySelector('#four')
const five = document.querySelector('#five')
const six = document.querySelector('#six')
const seven = document.querySelector('#seven')
const eight = document.querySelector('#eight')
const nine = document.querySelector('#nine')
const decimal = document.querySelector('#decimal')

const add = document.querySelector('#add')
const subtract = document.querySelector('#subtract')
const multiply = document.querySelector('#multiply')
const divide = document.querySelector('#divide')
const equals = document.getElementById('equals')

const history = document.querySelector('#history')
const clear = document.querySelector('#clear')

const modal_body = document.querySelector('.modal-body')
const clear_history = document.querySelector('#clear-history')

input.addEventListener('keyup', function (event) {
    if (event.key === "Enter" || event.keyCode === 13) {
        equals.click();
    }
})

zero.addEventListener('click', function () {
    display.value += 0;
});
one.addEventListener('click', function () {
    display.value += 1;
});
two.addEventListener('click', function () {
    display.value += 2;
});
three.addEventListener('click', function () {
    display.value += 3;
});
four.addEventListener('click', function () {
    display.value += 4;
});
five.addEventListener('click', function () {
    display.value += 5;
});
six.addEventListener('click', function () {
    display.value += 6;
});
seven.addEventListener('click', function () {
    display.value += 7;
});
eight.addEventListener('click', function () {
    display.value += 8;
});
nine.addEventListener('click', function () {
    display.value += 9;
});
decimal.addEventListener('click', function () {
    display.value += '.';
});



add.addEventListener('click', function () {
    display.value += '+';
});
subtract.addEventListener('click', function () {
    display.value += '-';
});
multiply.addEventListener('click', function () {
    display.value += '*';
});
divide.addEventListener('click', function () {
    display.value += '/';
});

equals.addEventListener('click', function () {
    let result = display.value;
    result_view.textContent = eval(result);
    convert(result, result_view.textContent);
});


clear.addEventListener('click', function () {
    display.value = '';
    result_view.textContent = '';
});

let save_storage = [];
const local_storage_data = JSON.parse(localStorage.getItem("calculations"));


if (local_storage_data) {
    save_storage = local_storage_data;
    let calc_data = local_storage_data;
    render(calc_data)
}


function convert(val, answer) {
    let storage =
    {
        'value': val,
        'solution': answer
    };
    save_storage.push(storage);
    localStorage.setItem("calculations", JSON.stringify(save_storage));
    render(local_storage_data);
};

history.addEventListener('click', function () {
    if (!local_storage_data) {
        modal_body.textContent = "Do a calculation first!"
    }
});

clear_history.addEventListener('click', function () {
    localStorage.clear();
    save_storage = [];
    location.reload();
});


function render(data) {
    let items = '';
    for (let i = 0; i < data.length; i++) {
        items += `
        <div>
            <li>
            Your Input: ${data[i].value}
            </li>
            <li>
            Solution = ${data[i].solution}
            </li>
        </div>
        <hr />`

    };
    modal_body.innerHTML = items
};
