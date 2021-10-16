import swal from 'sweetalert'
export function showWarning() {
  swal({
    title: "Hmmm 🤔",
    text: "Too many matches found. Please enter a more specific query",
    button: false,
    timer: 4000
  })
}

export function showError() {
  swal({
    title: "Oops 😟",
    text: "Nothing is found",
    button: false,
    className: "error",
    timer: 3000
  })
}
