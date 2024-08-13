const { size } = require("lodash");

//Cria e exibe os elementos visuais
function createassets(scene){
    //Cenário
    scene.add.image( 500, 210,"fundo")
    plataforma = scene.physics.add.staticGroup();
    plataforma.create(500, 479, 'plataforma');

    //Player
    player = scene.physics.add.sprite(500,250,"player"); 
    player.setCollideWorldBounds(true);
    player.setBounce(0.2)
    criaranima(scene);
    player.anims.play("right", true)
    player.anims.play("left", true)

    //Coletavel
    var pos = Phaser.Math.FloatBetween(100,1000);
    star = scene.physics.add.sprite(pos, 0, "star");
    star.setCollideWorldBounds(true);
    star.setBounce(0.5)

    //bomb
    bombs = scene.physics.add.group();

    //Collider
    scene.physics.add.collider(player,plataforma)
    scene.physics.add.collider(plataforma,star)
    scene.physics.add.overlap(star,player,coletastar)
    scene.physics.add.overlap(bombs,player,gameover)
    scene.physics.add.collider(plataforma,bombs)


    //Entradas do teclado
    teclado = scene.input.keyboard.createCursorKeys();

    //Hub head ups display
    var configtext = {
        fontSize:"30px",
    }
    pontostxt = scene.add.text(0, 0, "Pontuação:0",configtext);


}
function gameover(){
    player.setVisible(false);
    isgameover = true;  
    player.scene.add.image(500,250,"gameover")


}
function coletastar(star,player){
    let pos = Phaser.Math.FloatBetween(100,1000);
    star.x = pos;
    star.y = 0;
    star.setVelocityY(0)

    pontos++;
    pontostxt.setText("Pontuação:"+pontos);

    //Criar bombas
var pos2 = Phaser.Math.FloatBetween(100,1000);
    let bomb = bombs.create(pos2,0,"bombs")
    bomb.setVelocity(50)
    bomb.setBounce(1)
    bomb.setCollideWorldBounds();
}


function criaranima(scene){
 var parado = {
    key: 'parado',
    frames: [{key: "player",frame: 4}],
 }
 var left = {
    key: 'left',
    frames: scene.anims.generateFrameNumbers("player", { start: 0 , end:3}),
    frameRate: 10,
    repeat: -1
 }
 var right = {
    key: 'right',
    frames: scene.anims.generateFrameNumbers("player", { start: 7 , end:8}),
    frameRate: 10,
    repeat: -1
 }
 scene.anims.create(left)
 scene.anims.create(right)
 scene.anims.create(parado)

 
}