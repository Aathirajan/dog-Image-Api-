// https://dog.ceo/api/breeds/image/random

let doggy = document.getElementById('doggy')
let newdoggy = document.getElementById('newdoggy')

let newdog=()=>{
fetch(' https://dog.ceo/api/breeds/image/random')
  .then(response => response.json())
  .then(json => {
    // console.log(json.message)
    doggy.innerHTML = `<img src="${json.message}" height=300 width=300/>`
  })
  
}
newdoggy.onclick=()=>newdog()


