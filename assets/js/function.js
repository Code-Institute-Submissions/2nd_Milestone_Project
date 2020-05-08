


function startGame(){
    animateDiv(basket1);
    animateDiv(basket2);
    animateDiv(basket3);
    playAudio();
    layEgg(egg);
    
    
   
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
            top: 600,
        }, {
            duration: 1500,
            progress: function() {
                collision(egg, floor)
            },
            complete: function() {
                 reloadEgg()
            },
    
        });
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

// function checkMissedEgg(egg) {
//     if (collision(egg,floor)) {
//             showCrackEgg();
//             loseLife();
//             return true;
//         } else {    
//             return false;
//         }
// }

// function checkCatchedEgg(egg) {
//     if (collision(egg,basket1)) {
//         eggTop = parseInt(henContainer.offsetTop);
//         basketTop = parseInt(basket1.offsetTop)
        
//         if (eggTop <basketTop) {
//             updateScore();
//         } 
//     } else {
//         return false;
//     }
// }






// collision detection from Ryan Connolly JSfiddle
// https://jsfiddle.net/ryanoc/TG2M7/
// function getPositions(box){
//     let $box = $(box);
//     // let coor = $box.();
//     let coor = $box[0].getBoundingClientRect();
//     let window = $box[0].ownerDocument.defaultView;
//     let width = $box.width();
//     let height = $box.height();
//     console.log(coor.left, coor.left + window.pageYOffset + width, coor.top, coor.top + window.pageXOffset + height);
//     return [[coor.left, coor.left + width], [coor.top, coor.top + height]];
// }

// function comparePositions(p1, p2){
//     let x1 = p1[0] < p2[0] ? p1 : p2;
//     let x2 = p1[0] > p2[0] ? p2 : p1;
//     return x1[1] > x2[0] || x1[0] === x2[0] ? true : false;
// }


// function checkCollision(){
//   let box = $('.egg')[0];
//   let pos = getPositions(box);
//   console.log(pos);
//   let pos2 = getPositions(this);
//   console.log(pos2);
//   let xMatch = comparePositions(pos[0], pos2[0]);
//   let yMatch = comparePositions(pos[1], pos2[1]);            
//   let match = xMatch && yMatch;
//   if (match == true) {console.log("collision!");
//       updateScore();
//       return true;
//    } else {
//        loseLife();
//        return false;
//    }
// }

//makes new coordinates and does callback for basket
function animateDiv(myclass){
    collision (egg, myclass);
    var newPosition = makeNewPosition();
    $(myclass).animate({ 
        top: newPosition[0], 
        left: newPosition[1] 
        }, {
        duration: 1000, 
        complete:function(){
            animateDiv(myclass)
    },
});
    
}

// Get viewport dimensions (remove the dimension of the div)
function makeNewPosition(){
    
    let h = floorHeight - 40;
    let w = gameboard.width() -7;
    
    
    let newW = Math.floor(Math.random() * w);
    
    return [h,newW];    
    
    
}




function collision(div1,div2) {
    // var x1 = a.offset().left;
    // var y1 = b.offset().top;
    
    // //coordinates of first div
    // var h1 = a.outerHeight(true);
    // var w1 = b.outerWidth(true);
   
    // //dimensions of div1 including padding, margin, border
    // var b1 = y1 + h1;
    // var r1 = x1 + w1;

    let x1 = parseInt(div1.offset().left);
    let y1 = parseInt(div1.offset().top);
    console.log(x1,y1);
    

    let b1 = parseInt(y1 + div1.outerHeight(true));
    let r1 = parseInt(x1 + div1.outerWidth(true));
    console.log(b1,r1);
    

    
    //distance from top vs. coordinate
    // var x2 = a.offset().left;
    // var y2 = b.offset().top;
   

    // var h2 = a.outerHeight(true);
    // var w2 = b.outerWidth(true);
    
    // var b2 = y2 + h2;
    // var r2 = x2 + w2;
    let x2 = parseInt(div2.offset().left);
    let y2 = parseInt(div2.offset().top);
    console.log(x2,y2);

    let b2 = parseInt(y2 + div2.outerHeight(true));
    let r2 = parseInt(x2 + div2.outerWidth(true));
    console.log(b2,r2);

    //if one of the conditions is true, there is no collision
    if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2){
        
        showCrackEgg();
        loseLife();
        return false;

    }
    console.log('collision');
    updateScore();  
    return true; 
}


// function stopGAme() {
//     restart.show();
//     startGame();
// }

// function restart() {

//     $(this).click(function() {
//     location.reload();
// })








