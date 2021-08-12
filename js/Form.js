class Form {

  constructor() {
    this.button = createButton("Name");
    this.play = createButton('PLAY');
    this.offline = createButton('2 Players');
    this.settings = createButton('settings');
    this.rules = createButton('rules');
  }
   reappear(){
     this.play.show();
     this.offline.show();
     this.button.show();     
     this.settings.show();
     this.rules.show();

     hero.visible = true;
     heroin.visible = true;
     song.visible = true;
     movie.visible = true;
   }

  display(){
    this.button.position(displayWidth/2 - 660 , displayHeight/2 - 360);
    this.button.size(80,30)
    this.button.mousePressed(()=>{
      //I want to create an input here where you will be able to change the name and also the avtaar
      this.button.hide()

      this.name = createInput();
      this.name.position(displayWidth/2 - 660 , displayHeight/2 - 360);
      this.name.size(120,30)

      
      this.ok = createButton("OK");
      this.ok.position(displayWidth/2 - 660 , displayHeight/2 - 320);
      this.ok.size(50,30)

      this.ok.mousePressed(()=>{
        this.ok.hide();
        this.name.hide();
        this.button.show()
      })
    })  

    this.play.position(displayWidth/2 - 90, displayHeight/2 + 70);
    this.play.size(210,70)
    this.play.style("fontSize","large")
   
    this.play.mousePressed(()=>{
      gameState = 1;
      this.button.hide();
      this.play.hide();
      this.offline.hide();
      this.settings.hide();
      this.rules.hide();

      hero.visible = false;
      heroin.visible = false;
      song.visible = false;
      movie.visible = false;

      form2.dikha()
    })

    this.offline.position(displayWidth/2 - 50, displayHeight/2 + 160);
    this.offline.size(135,45)
    this.offline.style("textSize",100)

    this.offline.mousePressed(()=>{
      gameState = 2;

      this.button.hide();
      this.play.hide();
      this.offline.hide();
      this.settings.hide();
      this.rules.hide();

      hero.visible = false;
      heroin.visible = false;
      song.visible = false;
      movie.visible = false;

      offline.dekh()

    })
    
    this.settings.position(displayWidth/2 - 100, displayHeight/2 + 330)
    this.settings.size(60,40)
    this.settings.style("textSize",20)

    this.settings.mousePressed(()=>{
      gameState = 3;

      this.button.hide();
      this.play.hide();
      this.offline.hide();
      this.settings.hide();
      this.rules.hide();

      hero.visible = false;
      heroin.visible = false;
      song.visible = false;
      movie.visible = false;

      settings.reappear()
    })

    this.rules.position(displayWidth/2 + 100, displayHeight/2 + 330);
    this.rules.size(60,40)
    this.rules.style("textSize",20)

    this.rules.mousePressed(()=>{
      gameState = 4;

      this.button.hide();
      this.play.hide();
      this.offline.hide();
      this.settings.hide();
      this.rules.hide();

      hero.visible = false;
      heroin.visible = false;
      song.visible = false;
      movie.visible = false;

      rules.reappear();
    })


    

  }
}
