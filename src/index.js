import './css/styles.css';
import debounce from 'lodash.debounce';

import { showError } from './js/notifications'
import countryTpl from './templates/countryTemplate.hbs'
import countriesTpl from './templates/countriesTemplate.hbs'
import fetchCountries from './js/fetchCountries';


const refs = {
  inputEl: document.getElementById('country__query'),
  countryListEl: document.querySelector('.country__list'),
  countryInfoWrEl: document.querySelector('.country__info-wrapper'),
}

refs.inputEl.addEventListener('input', debounce(onSearch, 500))

console.log(showError)

function onSearch(evt) {
  if (evt.target.value === '') {
    return refs.countryListEl.innerHTML = ''
  }

  refs.countryListEl.innerHTML = ''
  fetchCountries(evt.target.value).then(result => {
    console.log(result.length)
    if (result.length > 10) {
      return showError()
    } else if (result.length > 2 && result.length < 10) {
      createCountryList(countriesTpl, result)
    } else if (result.length === 1) {
      createCountryList(countryTpl, result)
    }
  }).catch(error => console.log(error))
}

function createCountryList(template, data) {
  refs.countryListEl.insertAdjacentHTML('beforeend', template(data))
}





