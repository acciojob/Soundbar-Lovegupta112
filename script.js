//your JS code here. If required.
let arr=["applause.mp3","boo.mp3","gasp.mp3","tada.mp3","victory.mp3","wrong.mp3"];

let btns=document.getElementsByTagName('buttons');
let audio;
for(let i=0;i<btns.length-1;i++){
    btns[i].addEventListener('click',()=>{
    audio=new Audio(`sounds/${audioArr[i]}`);
    audio.play();
    })
}

btns[btns.length-1].addEventListener('click',()=>{
audio.pause();
})