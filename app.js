const regiones = [
  {
    id: 1,
    region: "Norte",
    lugar: "Salinas Grandes - Salta",
    img: "https://github.com/leombeck/imagenesturismo/blob/main/Norte/Salinas%20sin%20gente.jpg?raw=true",
  },
  {
    id: 2,
    region: "Cuyo",
    lugar: "Parque Provincial Ischigualasto - San Juan",
    img: "https://github.com/leombeck/imagenesturismo/blob/main/Cuyo/Ischigualasto%20de%20noche.jpg?raw=true",
  },
  {
    id: 3,
    region: "Patagonia",
    lugar: "Lago Nahuel Huapi - Río Negro",
    img: "https://saeoepturismo.com.ar/wp-content/uploads/2023/07/agencia-de-viajes-y-turismo-Visit-Patagonia-imagen.jpeg",
  },
  {
    id: 4,
    region: "Centro",
    lugar: "Obelisco - Ciudad de Buenos Aires",
    img: "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/ZGZG5QIWKNHHJI2VWDIMXZI3BA.jpg",
  },
  {
    id: 5,
    region: "Litoral",
    lugar: "Ruinas de San Ignacio - Misiones",
    img: "https://github.com/leombeck/imagenesturismo/blob/main/Litoral/Ruinas%20de%20noche.jpg?raw=true",
  },
  {
    id: 6,
    region: "Centro",
    lugar: "Mina Clavero - Córdoba",
    img: "https://github.com/leombeck/imagenesturismo/blob/main/Centro/Mina%20Clavero.jpg?raw=true",
  },
];


// Seleccionar articulos

let region = document.getElementById("region");
let lugar = document.getElementById("lugar");
let foto = document.getElementById("foto")

let prevBtn = document.querySelector(".prev-btn");
let nextBtn = document.querySelector(".next-btn");

//elemento inicial
let currentItem = 0;

//elegir las personas
function elegirInfo() {
  let item = regiones[currentItem];
  region.textContent = item.region;
  lugar.textContent = item.lugar;
  foto.src = item.img;
}

// pasar a la siguiente persona

nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > regiones.length - 1) {
    currentItem = 0;
  }
  elegirInfo();
});

// pasar al anterior

prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = regiones.length - 1;
  }
  elegirInfo();
});

// auto play
setInterval(() => {
  currentItem++;
  if (currentItem > regiones.length - 1) {
    currentItem = 0;
  }
  elegirInfo();
}, 4000);
