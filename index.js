let block = document.getElementById("block");
let hole = document.getElementById("hole");
let character = document.getElementById("character")

let jumping = 0;
let count = 0;

hole.addEventListener("animationiteration", () => {
    let random = -((Math.random()*300)+150);
    hole.style.top = random + "px";
    count++;
});

setInterval(function(){
    var characterTop = parseInt(window.getComputedStyle(character).
    getPropertyValue("top"));

    if(jumping == 0) {
        character.style.top = (characterTop+3)+"px";
    }
    var blockLeft = parseInt(window.getComputedStyle(block).
    getPropertyValue("left"));
    // console.log("blockLeft:" + blockLeft);

    var holeTop = parseInt(window.getComputedStyle(hole).
    getPropertyValue("top"));
    // console.log("holeTop: " + holeTop);

    var cTop = -(500-characterTop);
    // console.log("cTop" + cTop);

    if((characterTop > 480) || ((blockLeft < 20) && (blockLeft >- 50) 
    && ((cTop<holeTop) || (cTop>holeTop+130)))){
        alert("Game Over. Score: "+(count-1));
        character.style.top = 100 + "px";
        count = 0;
    }

}, 10);

function jump(){
    jumping = 1;
    let jumpCount = 0;
    var jumpInterval = setInterval(function(){
        var characterTop = parseInt(window.getComputedStyle
            (character).getPropertyValue("top"));
        console.log("jump function characterTop: "+characterTop);
        if((characterTop>6) && (jumpCount<15)){
            character.style.top= (characterTop-5) + "px";
        }
        if(jumpCount > 20){
            clearInterval(jumpInterval);
            jumping=0;
            jumpCount=0;
        }
        jumpCount++;
    }, 10);
}