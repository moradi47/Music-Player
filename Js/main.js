const musics = [
    {
        name: 'Approaching Dusk',
        src:'../audio/approaching-dusk.mp3',
        poster:'../image/image1.jpg',
        artist:'',
    },
    {
        name: 'Beau',
        src:'../audio/beau.mp3',
        poster:'../image/image2.jpg',
        artist:'',
    },
    {
        name: 'Emerald and Stone',
        src:'../audio/emerald-and-stone.mp3',
        poster:'../image/image3.jpg',
        artist:'',
    },
    {
        name:'Remembering',
        src:'../audio/remembering.mp3',
        poster:'../image/image4.jpg',
        artist:'',
    },
    {
        name:'The World Is Turning',
        src: '../audio/the-world-is-turning.mp3',
        poster:'../image/image5.jpg',
        artist:'',
    }
]
// data music
let liElem = document.querySelectorAll('.music');
let imageElem = document.querySelector('.poster-image');
let audioElem = document.querySelector('.audio');
let artistName = document.querySelector('.artist');
let nameMusic = document.querySelector('.name-music');

//button
let playBtn = document.querySelector('.play-btn');
let playIcon = document.querySelector('.play');
let pauseIcon = document.querySelector('.pause');
let previousBtn = document.querySelector('.previous-btn');
let nextBtn = document.querySelector('.next-btn');
let isPlaying = false;
let audioIndex = 0;

//progressBar
let progressBar = document.querySelector('.progressbar');
let durationElem = document.querySelector('.time-total');
let currentTimeElem = document.querySelector('.time-current');

console.log(progressBar);

liElem.forEach((li)=>{
    li.addEventListener('click', function(event){

        musics.forEach((music)=>{
            
            if(event.target.innerHTML === music.name){
                imageElem.src = music.poster;
                audioElem.src = music.src;
                nameMusic.innerHTML = music.name;
                artistName.innerHTML = music.artist;
            }
        })
    })
})

playBtn.addEventListener('click', function(){
    if(isPlaying){
        isPlaying = false;
        audioElem.pause();
        playBtn.firstChild.nextSibling.className = "fa fa-play";

    }else{
        isPlaying = true;
        audioElem.play();
        playBtn.firstChild.nextSibling.className = "fa fa-pause";
    }
})

previousBtn.addEventListener('click', function(){
    audioIndex --;

    if(audioIndex < 0){
        audioIndex = musics.length -1;
    }

    audioElem.src = musics[audioIndex].src;
    audioElem.play();
})

nextBtn.addEventListener('click', function(){
    audioIndex ++;

    if(audioIndex > musics.length -1){
        audioIndex = 0;
    }

    audioElem.src = musics[audioIndex].src;
    audioElem.play();
})

progressBar.addEventListener("click", function(event){
    const width = this.clientWidth;
    const clickX = event.offsetX;
    const duration = audioElem.duration;
    audioElem.currentTime = (clickX/width) * duration;
})

audioElem.addEventListener('timeupdate', function(event){

    if(isPlaying){
        const duration = event.srcElement.duration;
        const currentTime = event.srcElement.currentTime;

        const progressPercent = (currentTime/duration) * 100;
        progressBar.style.width = progressPercent + "%";

        width = progressPercent;

        const durationMinutes = Math.floor(duration/60);
        let durationSeconds = Math.floor(duration % 60);
        if(durationSeconds < 10){
            durationSeconds = "0" + durationSeconds; 
        }
        if(durationSeconds){
            durationElem.textContent = durationMinutes + ":" + durationSeconds;
        }

        const currentMinutes = Math.floor(currentTime / 60);
        let currentSeconds = Math.floor(currentTime % 60);

        if(currentSeconds < 10){
            currentSeconds = "0" + currentSeconds;
        }

        currentTimeElem.textContent = currentMinutes + ":" + currentSeconds;
    }
})

