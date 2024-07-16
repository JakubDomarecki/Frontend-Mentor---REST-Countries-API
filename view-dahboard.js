import {renderCountriesList} from './dom-utils.js'

export const renderDashboard = () => {
    const API_URL_ALL = 'https://restcountries.com/v3.1/all'
    
    let countries;
    let query = '';
    let region = '';
    
    fetch(API_URL_ALL)
    .then(resp => resp.json())
    .then(countriesRaw => {
        countries = countriesRaw.map(country => {
            return{
                capital: country.capital && country.capital[0],
                population: country.population.toLocaleString(),
                name: country.name.common,
                code: country.cioc,
                region: country.region,
                flagUrl: country.flags.png,
            };
        });
        console.log(countries);
        renderCountriesList(countries)
    });

    const filterDataAndRenderCountriesList = () => {
        const filteredCountries =  countries.filter(country => {
            return (
                country.name.toLowerCase().includes(query.toLowerCase()) && (!region.length || country.region === region)
            )
        })
        renderCountriesList(filteredCountries);
    }
    
    
    document.querySelector('#query').addEventListener("input", (e) => {
        query = e.target.value.toLowerCase().trim();
        filterDataAndRenderCountriesList()
        
    })
    
    
    document.querySelector('#region').addEventListener('change', (e) => {
        region = e.target.value;
        filterDataAndRenderCountriesList()
    });
}