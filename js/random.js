const randomThings = [
  {
    "artist": "Monet",
    "title": `The Water-Liliy Pond (National Gallery, London)`,
    "img": "bg_01.jpg"
  },
  {
    "artist": "Monet",
    "title": `Pathway in Monet's Garden at Giverny`,
    "img": "bg_02.jpg"
  }, 
  {
    "artist": "Monet",
    "title": `le bassin aux nympheas - reflets verts`,
    "img": "bg_03.jpg"
  }
];

const randomArist = document.querySelector(".random p:first-child");
const randomTitle = document.querySelector(".random p:last-child");
const bg = document.querySelector(".wrap");
const img = document.createElement("img");

const radomNum = randomThings[Math.floor(Math.random()*randomThings.length)];
randomArist.innerText = radomNum.artist;
randomTitle.innerText = radomNum.title;

img.src = `./imgs/${radomNum.img}`;
bg.appendChild(img);
