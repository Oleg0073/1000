const symbols = ['🍏', '🍇', '🍉', '🍎', '🍌', '🍒', '🍋'];
const reels = [];

for (let i = 1; i <= 16; i++) {
    reels.push(document.getElementById(`reel${i}`));
}


function spinReel() {
    return symbols[Math.floor(Math.random() * symbols.length)];
}


function checkWin() {
    
    const middleLine = [
        document.getElementById('reel5').textContent,
        document.getElementById('reel6').textContent,
        document.getElementById('reel7').textContent,
        document.getElementById('reel8').textContent
    ];

    
    const firstSymbol = middleLine[0];
    const allEqual = middleLine.every(symbol => symbol === firstSymbol);

    
    if (allEqual) {
        document.getElementById('result').textContent = 'ВИГРАШ!!!';
    } else {
        document.getElementById('result').textContent = 'СПРОБУЙТЕ ЗНОВУ!';
    }
}


function spin() {
    reels.forEach(reel => {
        
        reel.classList.add('spin');

        
        setTimeout(() => {
            reel.classList.remove('spin');
            
            reel.textContent = spinReel();
        }, 500);
    });

    
    setTimeout(() => {
        checkWin(); //
    }, 600);
}


document.getElementById('spinButton').addEventListener('click', spin);
