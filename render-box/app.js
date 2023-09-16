let render = document.getElementById("render");
let icon = document.getElementById("icon")
var audio = new Audio();


const songs = [
  // TODO music base
  {
    by: "Konsta",
    musicname: "Diplom", // Diplom
    source: "music/diplom.mp3",
    img: "music/img/main2.jpg",
  },
  {
    by: "Konsta",
    musicname: "Havotir Olmang", // Havotir Olmang
    source: "music/havotir-olmang.mp3",
    img: "music/img/main.jpg",
  },
  {
    by: "Konsta",
    musicname: "Jonga tegdi", // Jonga tegdi
    source: "music/jonga-tegdi.mp3",
    img: "music/img/main.jpg",
  },
  {
    by: "Konsta",
    musicname: "Kulrang", // Kulrang
    source: "music/kulrang.mp3",
    img: "music/img/kulrang.jpg",
  },
  {
    by: "Konsta",
    musicname: "Mayli de", // Mayli de
    source: "music/diplom.mp3",
    img: "music/img/main.jpg",
  },
  {
    by: "Konsta",
    musicname: "No shukur", // No shukur
    source: "music/no-shukur.mp3",
    img: "music/img/main.jpg",
  },
  {
    by: "Konsta",
    musicname: "Oq (Skit)", // Oq (Skit)
    source: "music/oq.mp3",
    img: "music/img/main.jpg",
  },
  {
    by: "Konsta",
    musicname: "O'tkinchi", // O'tkinchi
    source: "music/otkinchi.mp3",
    img: "music/img/main.jpg",
  },
  {
    by: "Konsta",
    musicname: "Qora (Skit)", // Qora (Skit)
    source: "music/qora.mp3",
    img: "music/img/main.jpg",
  },
  {
    by: "Konsta x Alinur",
    musicname: "Samoga qaragin", // Samoga qaragin
    source: "music/samoga-qaragin.mp3",
    img: "music/img/main.jpg",

  },
  {
    by: "Konsta x Alinur",
    musicname: "Saxiy", // Saxiy
    source: "music/saxiy.mp3",
    img: "music/img/main.jpg",

  },
  {
    by: "Konsta",
    musicname: "Sevgini izlang", // Sevgini izlang
    source: "music/sevgini-izlang.mp3",
    img: "music/img/main.jpg",

  },
  {
    by: "Konsta",
    musicname: "Xaloyiq", // Xaloyiq
    source: "music/xaloyiq.mp3",
    img: "music/img/main.jpg",

  },
  {
    by: "Konsta",
    musicname: "Sengacha", // Sengacha
    source: "music/sengacha.mp3",
    img: "music/img/main.jpg",

  },
  {
    by: "Konsta",
    musicname: "Havo",
    source: "music/havo.mp3",
    img: "music/img/havo.jpg",

  },
];

// Musiqa ijrosini boshqarish uchun audio elementini global o'zgaruvchisi sifatida yaratamiz

// Musiqa ijrosini boshqarish va to'xtatish funktsiyasi
function btnclick(params) {
  var source = songs[params]['source'];
  if (audio.src !== source) {
    audio.src = source;
  }
  


  if (audio.paused) {
    audio.play();
    icon.className = 'bx bx-pause'; // Ijro qilganda tugma belgisini "Pause" qilamiz
  } else {
    audio.pause();
    icon.className = 'bx bx-play'; // To'xtatganda tugma belgisini "Play" qilamiz
  }
}

// Musiqa tugaganda tugmani "Play" qilish uchun
audio.addEventListener('ended', function() {
  icon.className = 'bx bx-play';
});

// Qo'shiqlarni sahifaga chiqarish qismi
for (let i = 0; i < songs.length; i++) {
  const pp = songs[i];  
  render.innerHTML += `
    <div class="card">
      <div class="card__img">
        <img src="${pp["img"]}" alt="${pp['musicname']}">
        <button class="hover-btn" onclick="btnclick(${i})">
          <i id="icon" class="bx bx-play"></i>
        </button>
      </div>

      <div class="card__content">
        <p class="card__content--title">
          ${pp["musicname"]}
        </p>
        <p class="card__content--by">
          ${pp["by"]}
        </p>
      </div>
    </div>
  `
}