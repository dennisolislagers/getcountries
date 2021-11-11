import axios from 'axios';

async function getCountryByName() {
    try{
        const result = await axios.get("https://restcountries.com/v2/name/{peru}")
        console.log(result)
    }
    catch (e) {
        console.error(e);
    }
}

getCountryByName


const buttonElement = document.getElementById("enter-button");

buttonElement.addEventListener('click', () => { enterButton( 'Holland' )});

function enterButton() {
    console.log(`${name} is het land dat je zoekt!!`);
}