import axios from 'axios';

//De ingevoerde naam moet worden meegegeven aan een variabele.
//Deze variabele moet getriggerd worden als op de button wordt geklikt.

const searchCountryButton = document.getElementById("searchButton");
searchCountryButton.addEventListener('click', getCountryByName);
const countryInput = document.getElementById("country-input");

//Eerst maak ik de asynchrone functie om de gegevens uit de API te halen.

async function getCountryByName() {
//console.log("hallo")
//Een variabele maken die de waarde van het invoerveld meegeeft aan de API.
const countryName = countryInput.value
//console.log(countryInput.value)
    try{
//Omdat de naam van het gevraagde land nog niet gegeven is, maak ik de naam in de API dynamisch.
        const result = await axios.get(`https://restcountries.com/v2/name/${countryName}`);
//console.log(countryInput.value);
        const nameOfCountry = result.data
//console.log(nameOfCountry)
//De data array wordt meegegeven aan een functie die de elementen op de HTML pagina injecteert.
        createNameOfCountry(nameOfCountry);
    }
    catch (e) {
        console.error(e);
    }
}

//getCountryByName()
//De functie maken die de elementen op de HTML pagina injecteert.

function createNameOfCountry(nameOfCountry) {
//De referentie moet worden opgeslagen naar het 'container' element.
    const countryName = document.getElementById("country-name");

    nameOfCountry.map((country) => {
        const countryElement = document.createElement("li")
//De blok met gegevens maken die straks zichtbaar wordt op de HTML pagina
        countryElement.innerHTML =
`<div>
    <img id="flag-name" src="${country.flag}" alt="Vlag van ${country.name}"/>
    <h2 class="name-of-country">${country.name}</h2>
    <p class="subregion-name">${country.name} ligt in ${country.subregion}. ${country.name} heeft ${country.population} inwoners</p>
    <p class="capital-name">De hoofdstad van ${country.name} is ${country.capital}</p>
    <p class="currency-name">In ${country.name} kun je betalen met ${getCurrencies(country.currencies)}</p>
</div>
`;
        countryName.appendChild(countryElement);

    });
}
//De functie maken die de valuta straks weergeeft op de HTML pagina.
function getCurrencies(currency) {
    let output = ' ';
    for (let i = 0; i <`${currency.length}`; i++) {
        const currentCurrency = currency[i];
        output = output + `${currentCurrency}`;
    }
    return output
}



