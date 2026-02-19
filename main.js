
const inputArea = document.getElementById('inputArea');
const outputArea = document.getElementById('outputArea');
const logText = document.getElementById('logText');
const statusIcon = document.getElementById('statusIcon');
const inputStatus = document.getElementById('inputStatus');
const shiftSlider = document.getElementById('shiftSlider');
const shiftValDisplay = document.getElementById('shiftValDisplay');
const byteOutput = document.getElementById('byteOutput');

function update() {
    const val = inputArea.value;
    const shift = parseInt(shiftSlider.value);

    // Update UI Labels
    shiftValDisplay.innerText = (shift >= 0 ? '+' : '') + shift;

    if (val.length > 0) {
        // Mascot Reactions
        if (val.includes('ツ')) {
            statusIcon.innerText = 'ò_ó';
            statusIcon.style.color = '#FF3E42';
            logText.innerText = "Hey! Don't encrypt me!";
        } else {
            statusIcon.innerText = '(._.)';
            logText.innerText = `Applying a ${shift} character shift...`;
        }

        inputStatus.innerText = 'Processing';

        // Caesar Logic
        const result = val.split('').map(char => {
            const code = char.charCodeAt(0);
            return String.fromCharCode(code + shift);
        }).join('');

        outputArea.innerText = result;

        // Byte Stream
        byteOutput.innerText = val.split('').map(c =>
            c.charCodeAt(0).toString(2).padStart(8, '0')
        ).join(' ');
        byteOutput.classList.replace('opacity-30', 'opacity-100');
    } else {
        statusIcon.innerText = 'ツ';
        statusIcon.style.color = 'white';
        outputArea.innerText = '¯\\_(ツ)_/¯';
        logText.innerText = "Cyphe is standing by. Adjust the shift.";
        inputStatus.innerText = 'Waiting';
        byteOutput.innerText = "00000000 00000000";
        byteOutput.classList.replace('opacity-100', 'opacity-30');
    }
}

inputArea.addEventListener('input', update);
shiftSlider.addEventListener('input', update);