const inputNum = document.getElementById('inputNum');
const btnSubmit = document.getElementById('btnSubmit');
const btnCopy = document.getElementById('btnCopy');
const textContainer = document.getElementById('textContainer');
const ipsumText = document.getElementById('ipsumText');

let loremText = "";

inputNum.focus();

/*FUNCTION GENERATE RANDOM LOREM*/

function hpIpsum(length) {

    let max = hpArray.length - length;
    let randomNum = Math.floor(Math.random() * Math.floor(max));

    var i = 0;

    while (i < length) {

        loremText += hpArray[randomNum];
        randomNum++;
        i++;

    }

    return loremText;

}

/*FUNCTION TO GET AND SHOW THE LOREM*/

function getText(event) {

    event.preventDefault();

    loremText = "";

    if(inputNum.value == '' || inputNum.value == 0) {

        modalMessage.classList.add('modal-message--error');
        alertM.textContent = 'Please, enter a valid number!';
        timeMessage();

        inputNum.value = '';
        inputNum.focus();

    } else {

        hpIpsum(inputNum.value);
        ipsumText.textContent = loremText;
        textContainer.style.display = 'block';

    }

}

btnSubmit.addEventListener('click', getText);

/*FUNCTION COPY TEXT*/

const modalMessage = document.getElementById('modalMessage');
const alertM = document.getElementById('alert');

function copyText() {

    navigator.clipboard.writeText(ipsumText.textContent);

    modalMessage.classList.add('modal-message--copy');
    alertM.textContent = 'Copied to the clipboard!';
    timeMessage();

}

function timeMessage() {

    setTimeout(function() {

        modalMessage.classList.remove('modal-message--copy');
        modalMessage.classList.remove('modal-message--error');

    }, 3000)

}

btnCopy.addEventListener('click', copyText);

/*VALIDADE THE INPUT*/

$(document).ready(function() {

    $("#inputNum").keyup(function() {

        $("#inputNum").val(this.value.match(/[0-9]*/));

    });

});