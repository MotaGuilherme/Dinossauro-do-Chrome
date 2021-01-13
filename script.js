
const dino = document.querySelector('.dino');
const background = document.querySelector('.background')
let isJuping = false;
let position = 0;

function handleKeyUp(event){
    if(event.keyCode === 32){
        if (!isJuping){
        jump();
}   
}
}

function jump(){
    

    let upInterval = setInterval(() => {
        if(position >=150){
            clearInterval(upInterval);
        //descendo
        let downInterval = setInterval(() => {
            if( position <= 0){
                clearInterval(downInterval)
                isJuping = false;
            }else{
            position -= 20;
            dino.style.bottom = position + "px";
            }
        })
        }else{
        //subindo
        position += 18    ;
        dino.style.bottom = position + 'px';
        }
    }, 20);
}

function createCactus(){
    const cactus = document.createElement('div');
    let cactusPosition = 1500; 
    let ramdomTime = Math.random() * 6000;
    
    cactus.classList.add('cactus');
    cactus.style.left = 1000 + 'px'; 
    background.appendChild(cactus);

    let leftInterval = setInterval(() => {

        if(cactusPosition <- 60){
            clearInterval(leftInterval);
            background.removeChild(cactus);
        }else if(cactusPosition > 0 && cactusPosition < 60 && position < 60) {
            clearInterval(leftInterval);
            document.body.innerHTML = '<h1 class="game-over">Fim de jogo</h1>';
        }else{
        cactusPosition -= 10;
        cactus.style.left = cactusPosition + 'px';
        }
    },20 )

    setTimeout(createCactus, ramdomTime);
}
function createDino(){
    const dino2 = document.createElement('div');
    let dino2Position = 1000; 
    let ramdomTime = Math.random() * 6000;
    
    dino2.classList.add('dino2');
    dino2.style.left = 1000 + 'px'; 
    background.appendChild(dino2);

    let leftInterval = setInterval(() => {

        if(dino2Position <- 40){
            clearInterval(leftInterval);
            background.removeChild(dino2);
        }else if(dino2Position > 1 && dino2Position < 1 && position <1) {
            clearInterval(leftInterval);
            document.body.innerHTML = '<h1 class="game-over">Fim de jogo</h1>';
        }else{
        dino2Position -= 10;
        dino2.style.left = dino2Position + 'px';
        }
    },20 )
    setTimeout(createDino, ramdomTime);

}
createCactus();
document.addEventListener('keyup', handleKeyUp);
createDino();
document.addEventListener('keyup', handleKeyUp);