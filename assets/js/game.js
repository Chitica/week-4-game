
  var min = 19;
  var max = 120; 
  var targetNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  var targetNumberHtml = $("#number-to-guess");
  var wins = $("#wins");
  var winCount = 0;
  var losses = $("#losses");
  var lossesCount = 0;
  var totalScore = $("#total-score");
  var message = $("#message");
  var pinkDiamond = Math.floor(Math.random() * 12) + 1;
  var blueDiamond = Math.floor(Math.random() * 12) + 1;
  var greenDiamond = Math.floor(Math.random() * 12) + 1;
  var yellowDiamond = Math.floor(Math.random() * 12) + 1;


  
  targetNumberHtml.text(targetNumber);

  wins.text(winCount);
  losses.text(lossesCount);


  var counter = 0;

  // Now for the hard part. Creating multiple crystals each with their own unique number value.

  // We begin by expanding our array to include four options.
  var numberOptions = [ pinkDiamond, blueDiamond, greenDiamond, yellowDiamond];
    
  var images = ["images/pink.png", "images/blue.png", "images/green.png", "images/yellow.png"]

 
  // Next we create a for loop to create crystals for every numberOption.
  for (var i = 0; i < numberOptions.length; i++) {

    // For each iteration, we will create an imageCrystal
    var imageCrystal = $("<img>");
    var imageTag = $("img");
 
    // First each crystal will be given the class ".crystal-image".
    // This will allow the CSS to take effect.
    imageCrystal.addClass("crystal-image");

    // Each imageCrystal will be given a src link to the crystal image
    imageCrystal.attr("src", images[i]);
   
    

    // Each imageCrystal will be given a data attribute called data-crystalValue.
    // This data attribute will be set equal to the array value.
    imageCrystal.attr("data-crystalvalue", numberOptions[i]);

    // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
    $("#crystals").append(imageCrystal);
  }

  // This time, our click event applies to every single crystal on the page. Not just one.
  $(".crystal-image").on("click", function() {

    // Determining the crystal's value requires us to extract the value from the data attribute.
    // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
    // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
    // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter
    
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    // We then add the crystalValue to the user's "counter" which is a global variable.
    // Every click, from every crystal adds to the global counter.
    counter += crystalValue;

    // All of the same game win-lose logic applies. So the rest remains unchanged.
    totalScore.text(counter);

    if (counter === targetNumber) {
      winCount += 1;
      message.text("You Won!");
      restart();

    }

    else if (counter >= targetNumber) {
      lossesCount +=1;
      message.text("You Lost!");
      restart();
    }

  });


  function restart(){
    totalScore.text("0");
    counter = 0;
    targetNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    targetNumberHtml.text(targetNumber);
    wins.text(winCount);
    losses.text(lossesCount);
    pinkDiamond = 1 + Math.floor(Math.random() * 12);
		blueDiamond = 1 + Math.floor(Math.random() * 12);
		greenDiamond = 1 + Math.floor(Math.random() * 12);
    yellowDiamond = 1 + Math.floor(Math.random() * 12);
    

  };
