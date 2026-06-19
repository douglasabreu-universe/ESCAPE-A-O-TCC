const PLAYER = {
    "POSITION": {X: 0, Y: 0},
    "SIZE": {X: 100, Y: 100},
    "PYCHIC": {GRAVITY: 0.5, FRICTION: 0.1, JUMPFORCE: 10, SPEEDFORCE: 5, MAXSPEED: 100},
    "ACELERATION": {X: 0, Y: 0},
    "MOVEMMENT": {A: false, D: false, SPACE: false, MOVING: true},
}
const teste = new Image();
teste.src = "../Edidio.jpg";

function RENDER() {
    CTX.clearRect(0, 0, MAIN_CANVA.width, MAIN_CANVA.height);

    CTX.drawImage(
        teste,
        PLAYER.POSITION.X,
        PLAYER.POSITION.Y,
        PLAYER.SIZE.X,
        PLAYER.SIZE.Y
    );
}
function PYCHIC(){

    PLAYER.POSITION.Y += PLAYER.ACELERATION.Y
    PLAYER.POSITION.X += PLAYER.ACELERATION.X
    if (PLAYER.POSITION.Y < MAIN_CANVA.clientHeight - PLAYER.SIZE.Y){
        PLAYER.ACELERATION.Y += PLAYER.PYCHIC.GRAVITY
    }else{
        PLAYER.ACELERATION.Y = 0
        PLAYER.POSITION.Y -= 1
    }  
    if (PLAYER.ACELERATION.X > 0){
        PLAYER.ACELERATION.X -= PLAYER.PYCHIC.FRICTION
    }
    if (PLAYER.ACELERATION.X < 0){
        PLAYER.ACELERATION.X += PLAYER.PYCHIC.FRICTION
    }
}

function MOVEMMENT(){
    PLAYER.MOVEMMENT.MOVING = PLAYER.MOVEMMENT.A || PLAYER.MOVEMMENT.D;
    if (PLAYER.MOVEMMENT.A == true){
        PLAYER.ACELERATION.X = -PLAYER.PYCHIC.SPEEDFORCE
    }
    if (PLAYER.MOVEMMENT.D == true){
        PLAYER.ACELERATION.X = PLAYER.PYCHIC.SPEEDFORCE
    }

    if (PLAYER.MOVEMMENT.MOVING == true){
        if (PLAYER.PYCHIC.SPEEDFORCE < PLAYER.PYCHIC.MAXSPEED){
            PLAYER.PYCHIC.SPEEDFORCE += 0.05 
        }
    }else{
        PLAYER.PYCHIC.SPEEDFORCE = 5
    }

}

window.addEventListener("keydown", event => {
    if (event.key == "d"){
        PLAYER.MOVEMMENT.D = true;
    }
    if (event.key == "a"){
        PLAYER.MOVEMMENT.A = true 
    }

    if (event.key == " ") PLAYER.ACELERATION.Y = -PLAYER.PYCHIC.JUMPFORCE;
});

window.addEventListener("keyup", event => {
   if (event.key == "d"){
        PLAYER.MOVEMMENT.D = false;
    }
    if (event.key == "a"){
        PLAYER.MOVEMMENT.A = false;
    }
});