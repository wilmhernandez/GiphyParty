console.log("Let's get this party started!");

console.log("Let's get this party started!");

const form = document.querySelector('#form')

const input = document.querySelector("input[type='text']")

form.addEventListener('submit', (e) => {

  e.preventDefault();
  
  searchGIF();
})

const removeBtn = document.querySelector("#remove");

removeBtn.addEventListener("click", (e) => {

  e.preventDefault();

  const imgs = document.querySelectorAll('img');

  imgs.forEach((img) => {

    img.remove();
  })
})

async function searchGIF(e, q, api_key) {

  const res = await axios.get('http://api.giphy.com/v1/gifs/search',
  
  {params: 

  {q: input.value,

   api_key: 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym'}});
  
  const randomNumber = Math.floor(Math.random() * 10);

  const gif = res.data.data[randomNumber].images.original.url;

  const section = document.querySelector('#gifs');

  const img = document.createElement("img");

  img.src = gif;

  img.classList.add("gif");
  
  section.append(img);

  input.value = "";
}
