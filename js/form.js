class Form{
    constructor(){
    }
    
  display(){
      var title = createElement('h2'); 
      title.html("Car Racing Game");
      title.position(130,10);
      var input = createInput("name");
      var button = createButton("Play");
      input.position(130,150);
        button.position(250,200);
        button.mousePressed(function(){
        input.hide();
        button.hide();
        var name = input.value();
        playerCount+=1;
        player.update(name);
        player.updateCount(playerCOunt);
        var greeting = createElement('h3');
        greeting.html("hello "+name);
        greeting.position(50,160);
        })
  }
    }