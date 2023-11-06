const display = document.querySelector('.display')
const input = document.querySelector('#input-el')
const result_view = document.querySelector('.result')

const inputButtons = document.querySelectorAll('.input-button');


const equals = document.getElementById('equals')

const history = document.querySelector('#history')
const clear = document.querySelector('#clear')

const modal_body = document.querySelector('.modal-body')
const clear_history = document.querySelector('#clear-history')


inputButtons.forEach(button => {
    button.addEventListener('click', function () {
        display.value += button.textContent;
    });
});


input.addEventListener('keyup', function (event) {
    if (event.key === "Enter" || event.keyCode === 13) {
        equals.click();
    }
})

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
