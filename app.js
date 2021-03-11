// Create a list of songs and it's details like image, name
const songs = [
    {
        name:"Culture Code",
        image:"Images/culture_code.jpg",
        song:"Songs/culture_code.mp3"
    },
    {
        name:"Elektronomia",
        image:"Images/Elektronomia.jpg",
        song:"Songs/Elektronomia.mp3"
    },
    {
        name:"Dizaro X",
        image:"Images/dizaro_X.png",
        song:"Songs/Dizaro.mp3"
    },
];

const bg = document.querySelector('.container');
const prevBtn = document.getElementById('prev');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');
const name = document.getElementById('title');
const img = document.getElementById('img');

let player = false;
let index = 0;

let audio = new Audio(songs[index].song);

function songPlay(){
    if (player == false) {
        playBtn.querySelector('i').setAttribute('class', 'fa fa-pause');
        audio.play();
        playBtn.setAttribute('title', 'Pause');
        img.style.animation = 'animate 5s linear infinite';
        player = true;
    }else{
        playBtn.querySelector('i').setAttribute('class', 'fa fa-play');
        audio.pause();
        img.style.animation = null;
        playBtn.setAttribute('title', 'Play');
        player = false;
    }
}


function previous(){
    
    // check indexing of song 
    if (index == 0) {
        index = songs.length - 1;
    }else{
        index--;
    }

    bg.style.background = `url(${songs[index].image})`;
    name.innerText = songs[index].name;
    img.src = songs[index].image;

    audio.src = songs[index].song;
    if (player == true) {
        player = false;
    }else{
        player = true;
    }
    songPlay();
}

function next(){
    // check indexing of song 
    if (index == songs.length - 1) {
        index = 0;
    }else{
        index++;
    }

    bg.style.background = `url(${songs[index].image})`;
    name.innerText = songs[index].name;
    img.src = songs[index].image;

    
    audio.src = songs[index].song;
    
    if (player == true) {
        player = false;
    }else{
        player = true;
    }
    songPlay();
}

playBtn.addEventListener('click', songPlay); // invoke songPlay function
prevBtn.addEventListener('click', previous); // invoke previous function
nextBtn.addEventListener('click', next); // invoke next function