//função responsavel pelo carregamento dos sprites
function preloadAssets(scene){
    console.log(scene)

//Cenário
    scene.load.image("fundo","./assets/fundo.png")

//plataforma
scene.load.image("plataforma","./assets/plataforma.png")

//star
scene.load.image("star","./assets/star.png")

//Bomb
scene.load.image("bombs","./assets/bomb.png")

//gameover
scene.load.image("gameover","./assets/gameover.jpg")

//Player
scene.load.spritesheet("player","./assets/player.png",{
    frameWidth: 32,
    frameHeight: 48
})
}