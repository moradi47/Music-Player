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

let liElem = document.querySelectorAll('.music');
let imageElem = document.querySelector('.poster-image');
let audioElem = document.querySelector('.audio');
let artistName = document.querySelector('.artist');
let nameMusic = document.querySelector('.name-music');

console.log(artistName);

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
