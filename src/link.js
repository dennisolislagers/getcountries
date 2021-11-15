import axios from 'axios';

async function getCountryByName() {
    try{
        const result = await axios.get (`${"https://restcountries.com/v2/name/{name}"}` )
        // console.log(result.data);
        const nameOfCountry = result.data
        // console.log(nameOfCountry)
        createNameOfCountry(nameOfCountry);
    }
    catch (e) {
        console.error(e);
    }
}

getCountryByName()


function getSpecifiedCountry (specifiedCountry) {

}
function createNameOfCountry(nameOfCountry) {
    const countryName = document.getElementById("country-name");

    nameOfCountry.map((country) => {
        const countryElement = document.createElement("li")

        countryElement.innerHTML =
`<div>
    <img id="flag-name" src="${country.flag}" alt="Vlag van ${country.name}"/>
    <p class="name-of-country">${country.name}</p>
    <p class="subregion-name">${country.name} ligt in ${country.subregion}. ${country.name} heeft ${country.population} inwoners</p>
    <p class="capital-name">De hoofdstad van ${country.name} is ${country.capital}</p>
    <p class="currency-name">In ${country.name} kun je betalen met ${getCurrencies}</p>
</div>
`;
        countryName.appendChild(countryElement);

    });
}

function getCurrencies (currency) {
    let output = " ";
    for (let i = 0; i < `${country.currencies.length}`; i++) {
        const currentCurrency = currency[i];
        output = output + currentCurrency;
    }
    return output
}


function getNameOfCountry (e) {
    e.preventDefault()
    const searchCountryButton = document.getElementById("searchButton");
    console.log(searchCountryButton.value)
}
const searchCountryForm = document.getElementById("searchForm");
searchCountryForm.addEventListener('submit', getNameOfCountry);

