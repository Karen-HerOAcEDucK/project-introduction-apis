const url = 'https://dog.ceo/api/breeds/image/random'
const dogImg = document.querySelector('[data-js="dog-img"]')

const validate = dogData => {
      if (!dogData.ok){
            throw new Error ('HTTP error, status ${dogData.status}')
      }
      return dogData.json()
}

const setImg = ({ message: url }) => {
      dogImg.setAttribute('src', url)
}

const requestError = error => {
      console.log(error.message)
}

fetch(url)
      .then(validate)
      .then (setImg)
      .catch(requestError)