

// function initialize() {
//     $startBtn.click(function(){
//         $(this).hide();
//     });
// }

function startGame(){

    animateDiv(basket1);
    animateDiv(basket2);
    animateDiv(basket3);
    playAudio();
    layEgg();

        // if (missedEgg()) {
        //     if (collision(egg, floor)) {
        //         alert('help!');
        //         // $('#sunny_sideup').show();
        //         // loseLife();
        //         return true;
        //     }
        //         return false;
        // }

        // if (catchedEgg(egg)) {
        //     if (collision($('.egg'), $('.basket'))) {
        //         updateScore();
        //     }
        // }
       
    }

function playAudio() {
   $('#gameLoop')[0].play();
}

function chickenSound() {
    $('#chickenCluck')[0].play();
}



function layEgg(){
    hen.click(function(){
        egg.show().animate({
            top: '620px'
        }, 1500, reloadEgg);
        chickenSound();
    });
        
}

function reloadEgg() {
    egg.hide().css('top', '40px');
}


function loseLife() {
    lifescore--;
    life.text(lifescore);
}


function updateScore() {
    eggCount--;
    eggCounter.text(eggCount);    
}

function showCrackEgg() {
    sunnySideup.show();
}



function makeNewPosition(){
    
    // Get viewport dimensions (remove the dimension of the div)
    let h = floorHeight - 40;
    let w = gameboard.width() -7;
    
    
    let newW = Math.floor(Math.random() * w);
    
    return [h,newW];    
    
    
}



//makes new coordinates and does callback for basket
function animateDiv(myclass){
    var newPosition = makeNewPosition();
    $(myclass).animate({ top: newPosition[0], left: newPosition[1] }, 1000, function(){
      animateDiv(myclass);
    $(myclass).animate({}, checkCollision)        
    });
    
}



// collision detection from Ryan Connolly JSfiddle
// https://jsfiddle.net/ryanoc/TG2M7/
function getPositions(box) {
  var $box = $(box);
  var pos = $box.offset();
  var width = $box.outerHeight(true);
  var height = $box.outerWidth(true);
  return [ [ pos.left, pos.left + width ], [ pos.top, pos.top + height ] ];
//   console.log([ [ pos.left + width ], [ pos.top + height ] ]);
}
        
function comparePositions(p1, p2) {
  var x1 = p1[0] < p2[0] ? p1 : p2;
  var x2 = p1[0] < p2[0] ? p2 : p1;
  return x1[1] > x2[0] || x1[0] === x2[0] ? true : false;
}

function checkCollision(){
  var box = $(egg)[0];
  var pos = getPositions(box);
  console.log(box);
  var pos2 = getPositions(this);
  console.log(this);
  var horizontalMatch = comparePositions(pos[0], pos2[0]);
  var verticalMatch = comparePositions(pos[1], pos2[1]);            
  var match = horizontalMatch && verticalMatch;
  if (match == true) { console.log("collision!");
      updateScore();
      return true;
   } else {
       loseLife();
       return false;
   }
}



// function collision(a, b){
// 		return !(
// 	    ((a.y + a.height) < (b.y)) ||
// 	    (a.y > (b.y + b.height)) ||
// 	    ((a.x + a.width) < b.x) ||
// 	    (a.x > (b.x + b.width))
// 		)
// 	}

// function checkCollision(a, b) {
//     var x1 = a.offset().left;
//     var y1 = b.offset().top;
    
//     //coordinates of first div
//     var h1 = a.outerHeight(true);
//     var w1 = b.outerWidth(true);
   
//     //dimensions of div1 including padding, margin, border
//     var b1 = y1 + h1;
//     var r1 = x1 + w1;
    
//     //distance from top vs. coordinate
//     var x2 = a.offset().left;
//     var y2 = b.offset().top;
   

//     var h2 = a.outerHeight(true);
//     var w2 = b.outerWidth(true);
    
//     var b2 = y2 + h2;
//     var r2 = x2 + w2;

//     //if one of the conditions is true, there is no collision
//     if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2){
//     return false;
//     }
//     return true;   
// }

// function checkCollision(a,b) {
//     var x1 = a.offset().left;
//     var y1 = b.offset().top;
    
//     //coordinates of first div
//     var h1 = a.outerHeight(true);
//     var w1 = b.outerWidth(true);
   
//     //dimensions of div1 including padding, margin, border
//     var b1 = y1 + h1;
//     var r1 = x1 + w1;
    
//     //distance from top vs. coordinate
//     var x2 = a.offset().left;
//     var y2 = b.offset().top;
   

//     var h2 = a.outerHeight(true);
//     var w2 = b.outerWidth(true);
    
//     var b2 = y2 + h2;
//     var r2 = x2 + w2;

//     //if one of the conditions is true, there is no collision
//     if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2){
//     return false;
//     }
//     return true;   
// }


// function stopGAme() {
//     restart.show();
//     startGame();
// }

// function restart() {

//     $(this).click(function() {
//     location.reload();
// })




