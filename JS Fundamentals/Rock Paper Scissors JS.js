
const resetButton = document.querySelector('.js-reset-button');
let outcome = document.querySelector('#outcome');
let historyRecord = document.querySelector('#js-historyRecord')
let record = JSON.parse(localStorage.getItem('record')) || {wins: 0, losses: 0, ties: 0 };
const myMove = document.querySelector('#myMove');
const comMove = document.querySelector('#comMove');

resetButton.onclick = () => {
    localStorage.removeItem('record')
    
    resetButton.innerText = `Record Reset, Refresh to finalise!`    
}

historyRecord.innerHTML = `History: Wins: ${record.wins} | Losses: ${record.losses} | Ties: ${record.ties}`;


    function pickComMove() {
        let compMove = '';
        const randomNumber = Math.random();

        if (randomNumber >= 0 && randomNumber < 1 / 3) {
            compMove = `Rock`;
                }
                else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
            compMove = `Paper`;
                }
        else {
            compMove = `Scissors`
                    ;
                }
        return compMove;
    }

    function playGame (playerMove){
        let compMove = pickComMove();

        if (playerMove === 'Rock')
        {
            myMove.innerHTML = `✊`
                if (compMove === 'Rock') {
            comMove.innerHTML = `✊`;
            result = 'It is a Tie!';
            } else if (compMove === 'Paper') {
        comMove.innerHTML = `🤚`
                result = 'I Win!';
            } else {
        comMove.innerHTML = `✌️`
                result = 'You Win!';
            }
        }

        else if (playerMove === 'Paper')
        {
            myMove.innerHTML = `🤚`
                if (compMove === 'Rock') {
            result = 'You Win!';
        comMove.innerHTML = `✊`;
                } else if (compMove === 'Paper') {
            result = 'It is a Tie!';
        comMove.innerHTML = `🤚`
                } else {
            result = 'I Win!';
        comMove.innerHTML = `✌️`
                }     
            } 
        else {
            myMove.innerHTML = `✌️`
                if (compMove === 'Rock') {
            result = 'I Win!';
        comMove.innerHTML = `✊`;
                } else if (compMove === 'Paper') {
            result = 'You Win!';
        comMove.innerHTML = `🤚`
                } else {
            result = 'It is a Tie!';
        comMove.innerHTML = `✌️`
                }   
            }

        if (result === 'You Win!') {
            record.wins += 1;
            } else if (result === 'I Win!') {
            record.losses += 1;
            } else {
            record.ties += 1;
            };

        localStorage.setItem('record', JSON.stringify(record))

        outcome.innerText = `${result}
        \n
        Wins: ${record.wins} Losses: ${record.losses} Ties: ${record.ties}`;
    }


