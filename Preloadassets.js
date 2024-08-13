//função responsavel pelo carregamento dos sprites
function preloadAssets(scene){
    console.log(scene)

//Cenário
    scene.load.image("fundo","./fundo.png")

//plataforma
scene.load.image("plataforma","./plataforma.png")

//star
scene.load.image("star","./star.png")

//Bomb
scene.load.image("bombs","./bomb.png")

//gameover
scene.load.image("gameover","./gameover.jpg")

//Player
scene.load.spritesheet("player","./player.png",{
    frameWidth: 32,
    frameHeight: 48
})
}
