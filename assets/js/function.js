


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
            top: '53vh'
        }, {
            duration: 1500,
            progress: function() {
                collision(egg, floor)
            },
        });
    });
        hen.click(function() {
        chickenSound();
    });
    
}

function reloadEgg() {
    egg.css('top', '40px');
}


function updateScore() {
    eggCount--;
    eggCounter.text(eggCount);    
}

function showCrackedEgg(){
    sunnySideup.show();
}

function hideCrackEgg() {
    setTimeOut(function() {
        sunnySideup.hide();
    }, 800); 
}

function checkMissedEgg(egg) {
    if (collision(egg,floor)) {
            showCrackEgg();
            loseLife();
            return true;
        } else {    
            return false;
        }
}

function checkCatchedEgg(egg) {
    if (collision(egg, basket)) {
        
        if (y1 < y2) {
            updateScore();
        } 
    } else {
        return false;
    }
}


//makes new coordinates and does callback for basket
function animateDiv(myclass){
    collision(egg, myclass);
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

    let x1 = parseInt(div1.offset().left);
    let y1 = parseInt(div1.offset().top);
    console.log(x1,y1);
    

    let b1 = parseInt(y1 + div1.outerHeight(true));
    let r1 = parseInt(x1 + div1.outerWidth(true));
    console.log(b1,r1);
    

    let x2 = parseInt(div2.offset().left);
    let y2 = parseInt(div2.offset().top);
    console.log(x2,y2);

    let b2 = parseInt(y2 + div2.outerHeight(true));
    let r2 = parseInt(x2 + div2.outerWidth(true));
    console.log(b2,r2);

    //if one of the conditions is true, there is no collision
    if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2 && b1 <= 922){

        return false;

    } else {

        
            console.log('collision');
        
}}


// function stopGAme() {
//     restart.show();
//     startGame();
// }

// function restart() {

//     $(this).click(function() {
//     location.reload();
// })








