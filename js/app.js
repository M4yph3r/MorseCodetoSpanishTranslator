const textToMorseDict = {
    'A': '.-',
    'B': '-...',
    'C': '-.-.',
    'D': '-..',
    'E': '.',
    'F': '..-.',
    'G': '--.',
    'H': '....',
    'I': '..',
    'J': '.---',
    'K': '-.-',
    'L': '.-..',
    'M': '--',
    'N': '-.',
    'O': '---',
    'P': '.--.',
    'Q': '--.-',
    'R': '.-.',
    'S': '...',
    'T': '-',
    'U': '..-',
    'V': '...-',
    'W': '.--',
    'X': '-..-',
    'Y': '-.--',
    'Z': '--..',

    '0': '-----',
    '1': '.----',
    '2': '..---',
    '3': '...--',
    '4': '....-',
    '5': '.....',
    '6': '-....',
    '7': '--...',
    '8': '---..',
    '9': '----.'
};

const morseToTextDict = {};

for (const key in textToMorseDict) {
    morseToTextDict[textToMorseDict[key]] = key;
}

function textToMorse(text) {

    let morse = '';

    text.toUpperCase().split('').forEach(char => {

        if (char === ' ') {

            morse += '   ';

        } else if (textToMorseDict[char]) {

            morse += textToMorseDict[char] + ' ';

        } else {

            morse += char;
        }
    });

    return morse.trim();
}

function morseToText(morseCode) {

    let text = '';

    const words = morseCode.trim().split('   ');

    words.forEach(word => {

        const chars = word.split(' ');

        chars.forEach(char => {

            if (morseToTextDict[char]) {

                text += morseToTextDict[char];

            } else {

                text += char;
            }
        });

        text += ' ';
    });

    return text.trim().toLowerCase();
}

function translateToMorse() {

    const input =
        document.getElementById('spanishInput').value;

    const result =
        textToMorse(input);

    document.getElementById('morseResult').textContent =
        result;
}

function translateToText() {

    const input =
        document.getElementById('morseInput').value;

    const result =
        morseToText(input);

    document.getElementById('textResult').textContent =
        result;
}
