let dice1 = document.querySelector('.dice1');
let dice2 = document.querySelector('.dice2');
const numbers = [1, 2, 3, 4, 5, 6];
let coin1 = document.querySelector('.coin1');
let coin2 = document.querySelector('.coin2');
let boxes = document.getElementsByClassName('box');
let boxnum1 = 0;
let boxnum2 = 0;

dice1.addEventListener('click',player1)
function player1() {
    dice1.innerText = Math.floor(Math.random() * numbers.length + 1);
    boxnum1 += Number(dice1.innerText);
    switch (boxnum1) {
        case 4:
            document.getElementsByClassName('box25')[0].appendChild(coin1);
            break;
        case 13:
            document.getElementsByClassName('box46')[0].appendChild(coin1);
            break;
        case 27:
            document.getElementsByClassName('box5')[0].appendChild(coin1);
            break;
        case 33:
            document.getElementsByClassName('box49')[0].appendChild(coin1);
            break;
        case 40:
            document.getElementsByClassName('box3')[0].appendChild(coin1);
            break;
        case 42:
            document.getElementsByClassName('box63')[0].appendChild(coin1);
            break;
        case 43:
            document.getElementsByClassName('box18')[0].appendChild(coin1);
            break;
        case 50:
            document.getElementsByClassName('box69')[0].appendChild(coin1);
            break;
        case 54:
            document.getElementsByClassName('box31')[0].appendChild(coin1);
            break;
        case 62:
            document.getElementsByClassName('box81')[0].appendChild(coin1);
            break;
        case 66:
            document.getElementsByClassName('box45')[0].appendChild(coin1);
            break;
        case 74:
            document.getElementsByClassName('box92')[0].appendChild(coin1);
            break;
        case 76:
            document.getElementsByClassName('box58')[0].appendChild(coin1);
            break;
        case 89:
            document.getElementsByClassName('box53')[0].appendChild(coin1);
            break;
        case 99:
            document.getElementsByClassName('box41')[0].appendChild(coin1);
            break;
        case 100:
             document.getElementsByClassName('box100')[0].appendChild(coin1);
             alert("Player1 is winner");
             break;
        default:
            document.getElementsByClassName(`box${boxnum1}`)[0].appendChild(coin1);
            break;

    } 
    dice1.removeEventListener('click', player1);
    dice2.addEventListener('click', player2);
    dice1.style.backgroundColor = 'white';
    dice2.style.backgroundColor = 'yellow';
}

dice2.addEventListener('click', player2);
function player2(){
    dice2.innerText = Math.floor(Math.random() * numbers.length + 1);
    boxnum2 += Number(dice2.innerText);
    switch (boxnum2) {
        case 4:
            document.getElementsByClassName('box25')[0].appendChild(coin2);
            break;
        case 13:
            document.getElementsByClassName('box46')[0].appendChild(coin2);
            break;
        case 27:
            document.getElementsByClassName('box5')[0].appendChild(coin2);
            break;
        case 33:
            document.getElementsByClassName('box49')[0].appendChild(coin2);
            break;
        case 40:
            document.getElementsByClassName('box3')[0].appendChild(coin2);
            break;
        case 42:
            document.getElementsByClassName('box63')[0].appendChild(coin2);
            break;
        case 43:
            document.getElementsByClassName('box18')[0].appendChild(coin2);
            break;
        case 50:
            document.getElementsByClassName('box69')[0].appendChild(coin2);
            break;
        case 54:
            document.getElementsByClassName('box31')[0].appendChild(coin2);
            break;
        case 62:
            document.getElementsByClassName('box81')[0].appendChild(coin2);
            break;
        case 66:
            document.getElementsByClassName('box45')[0].appendChild(coin2);
            break;
        case 74:
            document.getElementsByClassName('box92')[0].appendChild(coin2);
            break;
        case 76:
            document.getElementsByClassName('box58')[0].appendChild(coin2);
            break;
        case 89:
            document.getElementsByClassName('box53')[0].appendChild(coin2);
            break;
        case 99:
            document.getElementsByClassName('box41')[0].appendChild(coin2);
            break;
        case 100:
             document.getElementsByClassName('box100')[0].appendChild(coin2);
             alert("Player2 is winner");
             break;
        default:
            document.getElementsByClassName(`box${boxnum2}`)[0].appendChild(coin2);
            break;

    }
    dice2.removeEventListener('click', player2);
    dice1.addEventListener('click', player1);
    dice1.style.backgroundColor = 'white';
    dice2.style.backgroundColor = 'white';
    dice1.style.backgroundColor = 'yellow';
}

