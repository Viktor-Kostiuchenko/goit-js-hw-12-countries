import debounce from 'lodash.debounce';
import refs from './refs'
import { showError, showWarning }  from './notifications'
import countryTpl from '../templates/countryTemplate.hbs'
import countriesTpl from '../templates/countriesTemplate.hbs'
import fetchCountries from './fetchCountries';
import { createCountryList } from './createCountryList'

export function onSearch(evt) {
  if (evt.target.value === '') {
    return refs.countryListEl.innerHTML = ''
  }

  refs.countryListEl.innerHTML = ''
  
  fetchCountries(evt.target.value).then(result => {
    if (result.length > 10) {
      return showWarning()
    } else if (result.length > 2 && result.length < 10) {
      createCountryList(countriesTpl, result)
    } else if (result.length === 1) {
      createCountryList(countryTpl, result)
    } else if (result.status === 404) {
      showError()
    }
  })
}

refs.inputEl.addEventListener('input', debounce(onSearch, 500))
