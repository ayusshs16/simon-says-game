let gameseq=[];
let userseq=[];
let btns=["green", "red", "yellow", "blue"];


let started=false;
let level=0;
let highScore=0;
let h2=document.querySelector("h2");
let h3=document.querySelector("h3");
document.addEventListener("keydown",function(){
    if(started == false) {
        console.log("Game Started");
        started=true;

        levelup();
    }
});
function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 300);
}
function userflash(btn){
    btn.classList.add("iserflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    }, 300);
}


function levelup() {
    userseq=[];
    level++;
    h2.innerHTML=`Level ${level}`;
    let randomnum=Math.floor(Math.random()*4);
    let randombtn=btns[randomnum];
    let randombtn1=document.querySelector(`#${randombtn}`);
gameseq.push(randombtn);
// console.log(gameseq);
    setTimeout(() => {
        btnflash(randombtn1);
    }, 700);
    }
    

 function checkuserseq(idx){
    if(userseq[idx]===gameseq[idx]){
        if(userseq.length===gameseq.length){
           setTimeout(levelup(),1000);
        }
    }else{
        h2.innerHTML=`Game Over,your score was<b>  ${level}  </b><br> Press Any Key to Restart`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        if (level > highScore) {
            highScore = level;
            h3.innerHTML = `<b>Your High Score is:</b> ${highScore}`;
        }
        reset();
    }

 }
 function btnpress(){
let btn=this;
btnflash(btn);
usercolor=btn.getAttribute("id");
console.log(usercolor);
userseq.push(usercolor);
checkuserseq(userseq.length-1);
 }
 let allbtns=document.querySelectorAll(".btn")
 for(btn of allbtns){
    btn.addEventListener("click",btnpress);
 }
 function reset(){
started=false;
gameseq=[];
userseq=[];
level=0;
 }
 