var canvas, backgroundImage;
var gameState = 0;
var playerCount;
var qid =1
var form;
var answer;
var playerExists
var form2;
var title,guru;
var hero, heroin, song, movie;
var points = 30;
var db
var id

var userId 

var answerFlag = 0;

function preload(){
  gameback = loadImage("img/4.png")
  heroI = loadImage("img/hero2.png")
  heroinI = loadImage("img/heroin2.png")
  movieI = loadImage("img/movie2.png")
  songI = loadImage("img/song2.png")
  titleI = loadImage("img/title.png")
  guruI = loadImage("img/guru.png")
  ticketI = loadImage("img/ticket.png")
}

function setup(){
  canvas = createCanvas(windowWidth, windowHeight);
  db = firebase.firestore()
  form = new Form()

  title = createSprite(windowWidth/2 + 20 , windowHeight/2 - 230)
  title.addImage(titleI)
  title.scale = 1.8;
  
  guru = createSprite(windowWidth/2 - 350 , windowHeight/2 - 80)
  guru.addImage(guruI)
  guru.scale = 1.6;
  
  hero = createSprite(windowWidth/2 - 115 , windowHeight/2 - 160)
  hero.addImage(heroI)
  hero.scale = 0.5;

  heroin = createSprite(windowWidth/2 + 156 , windowHeight/2 - 170)
  heroin.addImage(heroinI)
  heroin.scale = 0.46;

  song = createSprite(windowWidth/2 - 120 , windowHeight/2 - 70)
  song.addImage(songI)
  song.scale = 0.35;

  movie = createSprite(windowWidth/2 + 135 , windowHeight/2 - 90)
  movie.addImage(movieI)
  movie.scale = 0.45;

  if (gameState === 0){
    form.display()    
   }  
}


function draw(){
  background(gameback)

  textSize(15)
  stroke(204, 36, 117)
  strokeWeight(1)
  fill(204, 36, 117)
  text("Bolly coins : " + points,windowWidth/2 + 300, windowHeight/2 - 200)
  
   if (gameState === 0){
    line(windowWidth/2, windowHeight/2 - 200, windowWidth/2, windowHeight/2 - 30)
    line(windowWidth/2 - 250, windowHeight/2 - 120, windowWidth/2 + 290, windowHeight/2 - 120)
   }  
  
  if(gameState === 1 ){
    form.hide()
    form2.display()
    form2.getDataHints()
    form2.displayQuestions()
  }

  if (answerFlag === 4){
    answerFlag = 0;
    reset();
  }
  if(playerExists === false){
    db.collection("Players").add({email:form.input.value(),q_id:qid})
    playerExists = true
  }
  drawSprites();
}
function reset(){
  form2.show();
  points += 20;
  qid += 1;
  form2.clickFlag = 0
}
function keyPressed(){
  if(keyCode === 13 && gameState === 0){
    userId = form.input.value()
    if(userId!==''){
      console.log(userId)
      if(form.validation(userId)){
 
        checkPlayer(userId)
        if(playerExists!== undefined){
          addPlayer()
        }
      }  
    }
    else{
      alert('enter email to continue')
    }
  }

}
async  function checkPlayer(id){ 
  
  //Reading players from database to check if a player already exists
  await db.collection('Players')
          .onSnapshot((snapshot) => {
            var players = snapshot.docs.map((document) => document.data());
    this.localPlayer = players
  
    if(this.localPlayer.length!== 0){     
      for (var q_id in this.localPlayer){
      
        if(id === this.localPlayer[q_id].email ){
          resultPlayers[0] = this.localPlayer[q_id]
          qid = resultPlayers[0].q_id 
          playerExists= true            
        }
        //if email id are not equal , creating a new players
        if(id !== this.localPlayer[q_id].email ){
          playerExists = false
        }
      }  
    }
    //First player
    if(this.localPlayer.length=== 0){   
      playerExists = false
    }
  })
}
async function addPlayer(){
    //Adding a player
    if(playerExists === false){
      await db.collection("Players").add({email:emailID,q_id:qid})
      //playerExists = true
    }      
}
