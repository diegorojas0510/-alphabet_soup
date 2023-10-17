function searchLetter(){
    let lettres = document.querySelectorAll('.selected');
    lettres.forEach(function(letter){
        letter.style.backgroundColor = "#6c99dc";
        letter.classList.remove('selected');
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


function alphabetSoup(){
    let phrase = [];

    document.querySelectorAll('.letter').forEach(function(letter){
        letter.addEventListener('click', function(){
            console.log('Clic en una letra');

            letter.classList.toggle('selected');
            letter.style.backgroundColor = "#D7BDE2";
            let letra = letter.innerText.split('');
            phrase.push(letra);
            let secret_word = phrase.join('');

            console.log('Secret Word:', secret_word);


            if(secret_word === 'VARIABLES'){
                searchLetter(phrase);
                phrases(secret_word);
            }

            if(secret_word === 'OBJETO'){
                searchLetter(phrase);
                phrases(secret_word);
            }

            if(secret_word === 'ENCAPSULAMIENTO'){
                searchLetter(phrase);
                phrases(secret_word);
            }

            if(secret_word === 'VISIBILIDAD'){
                searchLetter(phrase);
                phrases(secret_word);
            }

            if(secret_word === 'ABSTRACCION'){
                searchLetter(phrase);
                phrases(secret_word);
            }

            if(secret_word === 'INSTANCIA'){
                searchLetter(phrase);
                phrases(secret_word);
            }

        })
    })
}





