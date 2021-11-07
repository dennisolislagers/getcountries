import axios from 'axios';

// Stap 1: Maak de asynchrone functie.

async function getCountries() {
    try {
        const result = await axios.get('https://restcountries.com/v2/all');
        const countries = result.data;

// Stap 2 (tip van Sam): Sorteer de array op de populatie m.b.v. sort Methode
        countries.sort((a, b) => {
            return a.population - b.population;
        });

        //probeersel om de aangegeven landen uit de array te halen.

        // const country1 = countries.find((country) => {
        //     return country.name === "Belgium";
        // })
        // const country2 = countries.find((country) => {
        //     return country.name === "Benin";
        // })
        // const country3 = countries.find((country) => {
        //     return country.name === "France";
        // })
        // const country4 = countries.find((country) => {
        //     return country.name === "Italy";
        // })
        // const allCountries = country1 + country2 + country3 + country4

// Stap 3: Geef de gesorteerde data array mee aan de functie die
//         de elementen later in de container op de HTML pagina gaat injecteren.

        createListOfCountries(countries);

    } catch (e) {
        console.error(e);
    }
}

getCountries();

// Stap 4: Sla de array op naar het container-element (de <ul> met id "country-list") op de HTML pagina.

function createListOfCountries(countries) {
    const countryList = document.getElementById('country-list');

// Dit is mijn eigen oplossing met de kennis die ik op dit moment heb:
//  * Maak een li element aan waar de array uiteindelijk in komt:
    countries.map((country) => {
        const countryElement = document.createElement('li');
//  * Maak ruimte om er een afbeelding(IMG) , een span en een p element in te zetten, de img en span samen in een div zodat ze mooi naast elkaar komen.
//  * Neem ook de region mee als functie, deze hebben we later nodig om de tekst een kleur te geven.
    countryElement.innerHTML = `
        <div>
        <img src="${country.flag}" width= 25px alt="Vlag van ${country.name}" class="flag" />
        <span class="${getRegionClass(country.region)}">${country.name}</span>
        </div>
        <p class="population">Has a population of ${country.population} people</p>
      `;
//  * Voeg het list-element toe aan het ul-element zodat elk countryElement een mooie lijst wordt:
        countryList.appendChild(countryElement)
    });
}
//     // De optie van Sam, uiteraard is de code een stuk kleiner:
//     countryList.innerHTML = countries.map((country) => {
//         return `
//       <li>
//         <img src="${country.flag}" width = 25px alt="Vlag van ${country.name}" class="flag" />
//         <span class="${getRegionClass(country.region)}">${country.name}</span>
//         <p class="population">Has a population of ${country.population} people</p>
//       </li>
//     `;
//     }).join('');
// }







// deze functie wordt voor elk land opnieuw aangeroepen en krijgt dan de region mee. Op basis daarvan
// voert de switch zijn vergelijking uit, en geeft dan de naam van de class mee die wij op het element zetten.
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
            return 'default';
    }
}