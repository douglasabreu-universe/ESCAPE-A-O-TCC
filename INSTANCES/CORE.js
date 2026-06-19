let MAIN_CANVA = document.getElementById("MAIN")
let CTX = MAIN_CANVA.getContext("2d")

function Loop(){
    
    RENDER()
    PYCHIC()
    MOVEMMENT()
    window.requestAnimationFrame(Loop)

}


window.requestAnimationFrame(Loop)