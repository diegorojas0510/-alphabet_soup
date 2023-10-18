// función para buscar un letra
function searchLetter(){
    let lettres = document.querySelectorAll('.selected');
    lettres.forEach(function(letter){
        letter.style.backgroundColor = "#6c99dc";
        letter.classList.remove('selected');
        // puedo validar si la letra se esta seleccionando bien
        console.log('Clic en una letra');
    })

    phrase = [];
}

function phrases(secret_word) {
    const response = document.querySelector("#ABSTRACCION");
    const response1 = document.querySelector("#INSTANCIA");
    const response2 = document.querySelector("#VARIABLES");
    const response3 = document.querySelector("#ENCAPSULAMIENTO");
    const response4 = document.querySelector("#VISIBILIDAD");
    const response5 = document.querySelector("#OBJETO");

    if (secret_word === 'ABSTRACCION') {
        response.innerHTML = response.innerText.replace("________________", secret_word);
    }
    if (secret_word === 'INSTANCIA') {
        response1.innerHTML = response1.innerText.replace("_______________", secret_word);
    }
    if (secret_word === 'VARIABLES') {
        response2.innerHTML = response2.innerText.replace("_____________", secret_word);
    }
    if (secret_word === 'ENCAPSULAMIENTO') {
        response3.innerHTML = response3.innerText.replace("______________________", secret_word);
    }
    if (secret_word === 'VISIBILIDAD') {
        response4.innerHTML = response4.innerText.replace("_______________", secret_word);
    }
    if (secret_word === 'OBJETO') {
        response5.innerHTML = response5.innerText.replace("___________", secret_word);
    }
}


// Declara un arreglo para almacenar las palabras completadas.
let completedWords = [];

function alphabetSoup() {
    document.querySelectorAll('.letter').forEach(function (letter) {
        letter.addEventListener('click', function () {
            if (completedWords.includes(letter.innerText)) {
                // La palabra ya ha sido completada, no hagas nada.
                return;
            }

            letter.classList.toggle('selected');
            letter.style.backgroundColor = "#D7BDE2";

            let selectedLetters = document.querySelectorAll('.selected');
            let selectedWord = "";

            // Construye la palabra seleccionada a partir de las letras seleccionadas.
            selectedLetters.forEach(function (selectedLetter) {
                selectedWord += selectedLetter.innerText;
            });

            console.log('Secret Word:', selectedWord);

            if (selectedWord === 'VARIABLES' ||
                selectedWord === 'OBJETO' ||
                selectedWord === 'ENCAPSULAMIENTO' ||
                selectedWord === 'VISIBILIDAD' ||
                selectedWord === 'ABSTRACCION' ||
                selectedWord === 'INSTANCIA') {
                searchLetter(selectedWord);
                phrases(selectedWord);

                // Si la palabra se completa, agrégala al arreglo de palabras completadas y cámbiale el color.
                if (!completedWords.includes(selectedWord)) {
                    completedWords.push(selectedWord);
                    document.querySelectorAll('.selected').forEach(function (selectedLetter) {
                        selectedLetter.style.backgroundColor = "lightgreen";
                    });
                }
            }
        });
    });
}




