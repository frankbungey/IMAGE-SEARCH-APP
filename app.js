const accessKey = '0cC7HA6uXhu0ik4hdFhf5If5R-Vf0PrQlADvQLjL0Kk';

const form = document.querySelector('form');
const input = document.querySelector('.input');
const searchResults = document.querySelector('.search-results');
const showMore = document.querySelector('#show-more');

let inputData = '';
let page = 1;

async function searchImages(){
inputData = input.value
const url = `https://api.unsplash.com/search/photos?page=${page}&query=${input}&client_id=${accessKey}`

const res = await fetch(url)
const data = await res.json();
console.log(data)

const results = data.results

if(page === 1){
    searchResults.innerHTML='';
}

results.map((result)=>{
    const imageWrapper = document.createElement('div');
    imageWrapper.classList.add("search-result")
    const image = document.createElement('img')
    image.src = result.urls.small
    image.alt = result.alt.description
    const imageLink = document.createElement('a')
    imageLink.href = result.links.innerHTML
    imageLink.target = "_blank"
    imageLink.textContent = result.alt_description

    imageWrapper.appendChild(image)
    imageWrapper.appendChild(imageLink)
    searchResults.appendChild(imageWrapper)
    console.log(searchResults)
});

page++

if(page > 1){
    showMore.Style.display="block";
}
}

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    page = 1;
    searchImages();
})

showMore.addEventListener("click",()=>{
    page = 1;
    searchImages();
})

