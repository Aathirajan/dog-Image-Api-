// https://dog.ceo/api/breeds/image/random
let apiincoming = document.getElementById('imageapi')

fetch('https://dog.ceo/api/breeds/image/random')
  .then(response => response.json())
  .then(json => {
    console.log(json.message)

    apiincoming.innerHTML = `<img src="${json.message}"/>`
  })