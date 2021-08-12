class Form2 {

    constructor() {
      this.hero = createInput();
      this.heroine = createInput();
      this.song = createInput();
      this.movie = createInput();

      this.back = createButton("BACK");

    }

    dikha(){
      this.back.show();
      this.hero.show();
      this.heroine.show();
      this.song.show();
      this.movie.show();
    }
    
  
    display(){
  
      push()
      textSize(60);
      fill(197, 57, 125);
      textFont("Georgia")
      text("Hero - ",displayWidth/2 - 300 , displayHeight/2 - 200)
      this.hero.position(displayWidth/2 - 300 , displayHeight/2 - 150);
      this.hero.size(250,25)

      text("Heroine - ",displayWidth/2 + 50 , displayHeight/2 - 200)
      this.heroine.position(displayWidth/2 + 50 , displayHeight/2 - 150);
      this.heroine.size(250,25)

      text("Song - ",displayWidth/2 - 300 , displayHeight/2 - 20)
      this.song.position(displayWidth/2 - 300 , displayHeight/2 + 40);
      this.song.size(250,25)

      text("Movie - ",displayWidth/2 + 50 , displayHeight/2 - 20)
      this.movie.position(displayWidth/2 + 50 , displayHeight/2 + 40);
      this.movie.size(250,25)
      pop()

      this.back.position(displayWidth/2 - 660, displayHeight/2 - 360);
      this.back.style("color","purple")

      this.back.mousePressed(()=>{
        gameState = 0;
        this.back.hide();
        this.hero.hide();
        this.heroine.hide();
        this.song.hide();
        this.movie.hide();

        form.reappear()
          
      })


      textSize(30)
      fill(204, 36, 117)
      text("Trivia about the movie : ",displayWidth/2 - 660, displayHeight/2 + 200)

    

    line(displayWidth/2, displayHeight/2 - 250, displayWidth/2, displayHeight/2 + 110)
    line(displayWidth/2 - 340, displayHeight/2 - 80, displayWidth/2 + 365, displayHeight/2 - 80)
      
    }
  }
  