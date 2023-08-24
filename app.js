let gamesq = [];
let userseq = [];
let started = false;
let level = 0;
let max=0;
let btns = ["y", "g", "b", "p"];
let b = document.querySelectorAll(".btn");
document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("game started");
        started = true;
        levelup();
    }
});
function levelup() {
    userseq=[];
    level++;
    document.querySelector("h3").innerHTML = "your level is" + " " + level;
    let rd = document.querySelectorAll('.btn');
    let randidx = rd[Math.floor(Math.random() * 3)];
    let b = randidx.getAttribute("id");
    gamesq.push(b);
    console.log(gamesq);
    btnflash(randidx);
}
function btnflash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 100);
}

//pressbutton
function userflash(t) {
    t.classList.add("userflash");
    setTimeout(function () {
        t.classList.remove("userflash");
    }, 100);

}

function btnpress() {
    //userseq=[];


    let a = this;
    console.log(this);
    let usercolor = a.getAttribute("id");
    userseq.push(usercolor);
    userflash(a);
    checkans(userseq.length-1);
}
function checkans(id) {
    //let idx = level - 1;
    if (gamesq[id] == userseq[id]) {
        if(gamesq.length==userseq.length){
            setTimeout(levelup(),1000);
        }
        //levelup();
    }
    else {
       // let max=0;
        if(max<level){
            max=level;
        }
        
        document.querySelector("h3").innerHTML = " game over! your score is" + " " + level+" "+ " "+"your max score is"+" "+max+" "+"press any key to start";
        let z=document.querySelector("body");
        z.classList.add("r");
        setTimeout(function(){
            z.classList.remove("r");
        },500);
        resetting();

    }

}
//resetting
function resetting(){
    started=false;
    gamesq=[];
    userseq=[];
    level=0;
}



for (btns of b) {
    btns.addEventListener("click", btnpress);
}
