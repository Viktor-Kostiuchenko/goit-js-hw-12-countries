import swal from 'sweetalert'
export function showWarning() {
  swal({
    title: "Hmmm 🤔",
    text: "Too many matches found. Please enter a more specific query!",
    button: "Oh, ok!",
  })
}

export function showError() {
  swal({
    title: "Oops 😟",
    text: "Nothing is found(",
    button: false,
    className: "error",
  })
}
