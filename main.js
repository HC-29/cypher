const inputArea = document.getElementById('inputArea');
        const outputArea = document.getElementById('outputArea');
        const logText = document.getElementById('logText');
        const statusIcon = document.getElementById('statusIcon');

        // Basic "Educational" Decryption: Caesar Cipher (Shift -1)
        inputArea.addEventListener('input', (e) => {
            const val = e.target.value;
            
            if(val.length > 0) {
                // Change mascot to "focused"
                if (val == "¯\\_(ツ)_/¯") {
                    statusIcon.innerText = 'ò_ó';
                } else {
                    statusIcon.innerText = '(._.)';
                }
                logText.innerText = "Applying a -1 character shift...";

                const decoded = val.split('').map(char => {
                    const code = char.charCodeAt(0);
                    // Just a simple shift for educational purposes
                    return String.fromCharCode(code - 1);
                }).join('');

                outputArea.innerText = decoded;
            } else {
                statusIcon.innerText = 'ツ';
                outputArea.innerText = '¯\\_(ツ)_/¯';
                logText.innerText = "Cyphe is standing by. Try shifting characters.";
            }
        });