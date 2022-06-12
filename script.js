//document.querySelector(".timestamp i").addEventListener("click",function(){
let audioElement = new Audio('songs/1.mp3');
let songIndex=0;
let masterPlay=document.getElementById("masterPlay");
let myProgressBar=document.getElementById("progessBar");
let gif=document.getElementById("gif");
let songItems=Array.from(document.getElementsByClassName("songItem"));
let masterSongName=document.getElementById("masterSongName");
let songs = [
  {songName:"Warriyo - Mortals", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
  {songName:"Cielo - Huma-Huma", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
  {songName:"DEAF KEY - Invincible", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
  {songName:"Different Heaven", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
  {songName:"Janji-Heros-Tonight", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
  {songName:"Salame-e-Ishq", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
  {songName:"Rabba - Salame-e-Ishq", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
  {songName:"Haaywww Salame-e-Ishq", filePath: "songs/8.mp3", coverPath: "covers/8.jpg"},
  {songName:"Ohh Mere Salame-e-Ishq", filePath: "songs/9.mp3", coverPath: "covers/9.jpg"},
];

songItems.forEach(function(e,i){
  e.getElementsByTagName("img")[0].src=songs[i].coverPath;
  e.getElementsByClassName("songName")[0].innerText=songs[i].songName;
});



masterPlay.addEventListener("click",function(){
  if(audioElement.paused || audioElement.currentTime<=0){
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    gif.style.opacity=1;
  }
  else{
    audioElement.pause();
    masterPlay.classList.remove("fa-circle-pause");
    masterPlay.classList.add("fa-circle-play");
    gif.style.opacity=0;
  }
});

//Listen to addEventListener
audioElement.addEventListener("timeupdate",function(){
  progress=parseInt(((audioElement.currentTime)/(audioElement.duration))*100);
  myProgressBar.value=progress;
});

myProgressBar.addEventListener("change",function(){
  audioElement.currentTime=(myProgressBar.value*audioElement.duration)/100;
});

function makeAllPlays(){
  Array.from(document.getElementsByClassName("songItemPlay")).forEach(function(element){
    element.classList.add("fa-circle-play");
    element.classList.remove("fa-circle-pause");
  });
}

Array.from(document.getElementsByClassName("songItemPlay")).forEach(function(element){
    element.addEventListener("click",function(e){
    makeAllPlays();
    songIndex=parseInt(e.target.id);
    e.target.classList.remove("fa-circle-play");
    e.target.classList.add("fa-circle-pause");
    audioElement.src="songs/"+(songIndex+1)+".mp3";
    gif.style.opacity=1;
    audioElement.currentTime=0;
    audioElement.play();
    masterSongName.innerText=songs[songIndex].songName;
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
  });
});

document.getElementById("next").addEventListener('click',function(){
  if(songIndex>=4){
    songIndex=0;
  }
  else{
    songIndex++;
  }
  audioElement.src="songs/"+(songIndex+1)+".mp3";
  audioElement.currentTime=0;
  audioElement.play();
  gif.style.opacity=1;
  masterSongName.innerText=songs[songIndex].songName;
  masterPlay.classList.remove("fa-circle-play");
  masterPlay.classList.add("fa-circle-pause");
});

document.getElementById("previous").addEventListener('click',function(){
  if(songIndex<1){
    songIndex=4;
  }
  else{
    songIndex--;
  }
  audioElement.src="songs/"+(songIndex+1)+".mp3";
  audioElement.currentTime=0;
  audioElement.play();
  gif.style.opacity=1;
  masterSongName.innerText=songs[songIndex].songName;
  masterPlay.classList.remove("fa-circle-play");
  masterPlay.classList.add("fa-circle-pause");
});
