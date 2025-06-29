 let gameSeq = [];
 let userSeq = [];

 let btns = ["red", "yellow", "purple", "green"];

 let started = false;
 let level = 0 ;
 let h2 = document.querySelector("h2");

 document.addEventListener("keypress", function(){
     if(started == false){
      console.log("Game Started");
      started = true;
 
      levelUp();
     }
 });

 function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    },150);
 }
 function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash")
    },150);
 }

 function levelUp(){
    userSeq =[];
  level++;
  h2.innerText = `Level ${level}`;

  let randIdx = Math.floor(Math.random()*3);
  let randColor = btns[randIdx];
  let randBtn = document.querySelector(`.${randColor}`);
  gameSeq.push(randColor);
  console.log(gameSeq);
  gameFlash(randBtn);
 }

function checkAns(idx){
    // console.log("current level : ", level);
    // let idx = level -1 ;
    if (userSeq[idx] == gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp, 1000);
        }
    }else{
        h2.innerHTML = `"GAME OVER!! Your Score was <b>${level}</b> <br> Press any key to start.`;
        document.querySelector("h1").style.color="red";
        reset();
    }
}

 function btnPress(){
    // console.log(this);
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
 }

 let allBtns = document.querySelectorAll(".btn");
 for(btn of allBtns){
    btn.addEventListener("click", btnPress);
 }

 function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
    document.querySelector("h1").style.color="black";
 }