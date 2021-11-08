import axios from 'axios';

// Maak de asynchrone functie

async function fetchCountries() {
    try {
        const result = await axios.get('https://restcountries.com/v2/all');
        const countries = result.data;

// Geef de data array mee aan de functie die de elementen op de Html pagina injecteert
        createListOfCountries(countries);

    } catch (e) {
        console.error(e);
    }
}

fetchCountries();


function createListOfCountries(countries) {

// Sorteer de landen op basis van het aantal inwoners

    countries.sort((a, b) => {
        return a.population - b.population;
    });
// Sla de data array op naar de container op de HTML pagina: de <ul> met id list-of-countries
    const listOfCountries = document.getElementById("country-list");

    countries.map((country) => {
// Maak een li-element aan om een mooie lijst te maken
        const countryElement = document.createElement('li');
// Stop in de lijst een IMG, een span en een p element om een blokje te maken van de gevraagde gegevens weergegeven op de juiste manier
// Geef de naam van het land een class mee om later de naam een kleur te kunnen geven.
        countryElement.innerHTML = `
    <div>
    <img src="${country.flag}" width = 25px alt="Vlag van ${country.name}" class="flag" />
    <span class="${getRegionClass(country.region)}">${country.name}</span>
    <p>Has a population of ${country.population} people</p>
    </div>
  `;
// Vervolgens wordt het list-element in het ul-element geplaatst
        listOfCountries.appendChild(countryElement);
    });


// Nu de functie maken waarmee voor elk land opnieuw wordt aangeroepen en dan de region meekrijgt.
// Op basis daarvan voert de switch zijn vergelijking uit, en geeft dan de naam van de class mee die wij op het element zetten.
// In de CSS kunnen we dan de meegegeven kleur aan het land meegeven
    function getRegionClass(currentRegion) {
        switch (currentRegion) {
            case 'Africa':
                return 'blue';
            case 'Americas':
                return 'green';
            case 'Asia':
                return 'red';
            case 'Europe':
                return 'yellow';
            case 'Oceania':
                return 'purple';
            default:
                return 'white';
        }
    }
}







