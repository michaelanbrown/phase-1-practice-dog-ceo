// console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const container = document.querySelector('#dog-image-container');
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
const breedContainer = document.querySelector('#dog-breeds')
const dropDown = document.querySelector('#breed-dropdown')
let breedsArray;

breedContainer.addEventListener('click', handleClick)
dropDown.addEventListener('change', handleChange)

function getImages() {
    fetch(imgUrl)
    .then(res => res.json())
    .then(images => {
        const imgs = images.message;
        let imgsArray = createImgElement(imgs);
        renderImgs(imgsArray);
        })
}

function createImgElement(imgs) {
    return imgs.map((img) => {
        let i =`<img src=${img}>`;
        return i;
    })
}

function renderImgs(imgsArray) {
    imgsArray.forEach(element => {
        renderImg(element)
    })
}

function renderImg(element) {
    container.innerHTML += element
}

function getBreeds() {
    fetch(breedUrl)
    .then(res => res.json())
    .then(breeds => {
        breedsArray = Object.keys(breeds.message);
        const breedLis = createBreedElement(breedsArray);
        renderBreeds(breedLis)
    })
}

function createBreedElement(breedsArray) {
    return breedsArray.map((breed) => {
        let li =`<li>${breed}</li>`;
        return li;
    })
}

function renderBreeds(breedLis) {
    breedLis.forEach(element => {
        renderBreed(element)
    })
}

function renderBreed(element) {
    breedContainer.innerHTML += element
}

function handleClick(event) {
    event.target.style.color = 'blue'
}

function handleChange(event) {
    const letter = event.target.value
    const filtered = breedsArray.filter(breed => breed.startsWith(letter))
    const filteredArray = createBreedElement(filtered)
    breedContainer.innerHTML = ''
    renderBreeds(filteredArray)
}

getImages()
getBreeds()