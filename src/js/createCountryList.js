import refs from './refs'

export function createCountryList(template, data) {
  refs.countryListEl.insertAdjacentHTML('beforeend', template(data))
}