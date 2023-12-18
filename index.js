console.log("Welcome to Spotify");  

// Initialize the Variables 
let songIndex=0; 
let audioElement = new Audio('1.mp3'); 
let masterPlay = document.getElementById('masterPlay'); 
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName'); 
let songItems=Array.from(document.getElementsByClassName('songItem')); 


let songs=[ 
    {songName: "Mortals", filePath:"song/1.mp3",coverPath:"covers/1.jpg"},
    {songName: "Huma Huma", filePath:"song/2.mp3",coverPath:"covers/2.jpg"},
    {songName: "Invincible", filePath:"song/3.mp3",coverPath:"covers/3.jpg"},
    {songName: "My heart", filePath:"song/4.mp3",coverPath:"covers/4.jpg"},
    {songName: "Salem-e-Ishq", filePath:"song/5.mp3",coverPath:"covers/5.jpg"},
    {songName: "Salem-e-Ishq", filePath:"song/6.mp3",coverPath:"covers/6.jpg"},
    {songName: "sakhiyaan Salem-e-Ishq", filePath:"song/7.mp3",coverPath:"covers/7.jpg"},
    {songName: "Bhula Dena Salem-e-Ishq", filePath:"song/8.mp3",coverPath:"covers/8.jpg"},
    {songName: "Tumari Kasam Salem-e-Ishq", filePath:"song/9.mp3",coverPath:"covers/9.jpg"},
    {songName: "Rabba Salem-e-Ishq", filePath:"song/10.mp3",coverPath:"covers/10.jpg"},
]  

songItems.forEach((element,i)=>{ 
    element.getElementByTagName=("img")[0].src=songs[i].coverPath;  
    element.getElementByClassName=("songName")[0].innerText=songs[i].songName;  
})


// audioElement.play(); 

// Handle play/pause click 
masterPlay.addEventListener('click',()=>{  
    if(audioElement.paused || audioElement.currentTime<=0){ 
        audioElement.play(); 
        masterPlay.classList.remove('fa-play-circle'); 
        masterPlay.classList.add('fa-pause-circle');  
        gif.style.opacity=1;
    } 
    else{ 
        audioElement.pause(); 
        masterPlay.classList.remove('fa-pause-circle'); 
        masterPlay.classList.add('fa-play-circle'); 
        gif.style.opacity=0;
    } 
}) 

// Listen To Events  
audioElement.addEventListener('timeupdate',()=>{ 
    
    //Update Seekbar 
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100); 
    myProgressBar.value=progress;
})  

myProgressBar.addEventListener('change',()=>{ 
    audioElement.currentTime=myProgressBar.value* audioElement.duration/100;
}) 

const makeAllPlays=()=>{  
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{ 
    element.classList.remove('fa-pause-circle');   
    element.classList.add('fa-play-circle');      
    }) 
} 

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays(); 
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `${songIndex + 1}.mp3`;  
        masterSongName.innerText=songs[songIndex].songName;  
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    }) 
})  

document.getElementById('next').addEventListener('click',()=>{ 
    if(songIndex>=10){ 
        songIndex=0
    } 
    else{ 
        songIndex+=1;
}  
audioElement.src = `${songIndex + 1}.mp3`; 
masterSongName.innerText=songs[songIndex].songName; 
audioElement.currentTime = 0;
audioElement.play();
masterPlay.classList.remove('fa-play-circle');
masterPlay.classList.add('fa-pause-circle');
})   

document.getElementById('previous').addEventListener('click',()=>{  
    if(songIndex<=1){ 
        songIndex=0
    } 
    else{ 
        songIndex+=1;
}  
audioElement.src = `${songIndex + 1}.mp3`; 
masterSongName.innerText=songs[songIndex].songName; 
audioElement.currentTime = 0;
audioElement.play();
masterPlay.classList.remove('fa-play-circle');
masterPlay.classList.add('fa-pause-circle');
}) 


