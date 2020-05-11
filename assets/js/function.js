/**
 * shows a cover with loading... text while page is rendering
 */
$(window).on('load', function() {
    $('#cover').fadeOut(200);
});

/**
 * global variables
 */

let basket1 = $('#basket1'),
basket2 = $('#basket2'),
basket3 = $('#basket3'),
hen = $('.hen'),
egg = $('.egg');
gameboard = $("#gameboard"), 
floor = $('.floor'),
floorHeight = parseInt(floor.css('bottom')),
seconds = $('#seconds'),
eggCounter = $(".eggCount"),
yourScore = $('#your-score'),
sec = 10,
seconds.text(sec),
eggCount = 0,
eggCounter.text(eggCount);

/**
 * event-handlers
 */
$('#playBtn').click(function() {
    $('#titlepage').hide();
});

$('#startBtn').click(function(){
    $(this).hide();
    startGame();
    gameAudio();
});

$('#play-againBtn').click(function(){
    location.reload();
})

/**
 * Start the Game
 */
function startGame(){

        animateDiv(basket1);
        animateDiv(basket2);
        animateDiv(basket3);
        gameAudio();
        layEgg();
        chickenMouseOver();
        
        let timerId =setInterval(countdown, 1000);
        setTimeout(() => { clearInterval(timerId);
            return false; },
            10000);
}

/**
 * countdown for the timer
 * when time is zero, the game sound pauses
 * game ending song plays
 * game reloads 
 */
function countdown(){
    
    sec--;
    seconds.text(sec); 

    if (sec == '0'){
        endGame();
        $('#gameLoop')[0].pause();
        gameEnd();
        return false;
    }
}



/**
 * game sounds
 */
function gameIntro(){
    $('#gameIntro')[0].play();
}

function gameEnd(){
    $('#gameEnd')[0].play();
}

function hitSound(){
    $('#hitSound')[0].play();
}

function gameAudio() {
   $('#gameLoop')[0].play();
}

function chickenSound() {
    $('#chickenCluck')[0].play();
}


/**
 * hover chicken to change size
 * might not work in some browsers
 */
function chickenMouseOver(){
$('.hen').hover(function(){
    $(this).animate({
        height: '13vh',
        width: '15vh',
    }, 100);
}, function(){
    $(this).animate({
        width: '10vh',
        height: '12vh',
    }, 100);
});
}

/**
 * releases an egg once clicked
 * drops the egg 
 * plays cluck sound
 */
function layEgg(){
    hen.click(function(){
        (egg).show().animate({
            top: 600
        }, {
            duration: 1500,
            complete: function() {
                reloadEgg();
            }
        });
    });
        hen.click(function() {
        chickenSound();

    });    
}

/**
 * reloads the eggs to starting position
 */
function reloadEgg() {
     (egg).css('top', '40px');
}

/**
 * 
 * parameter myclass points to the baskets
 * animates the baskets to and fro across the screen
 * checks for collision as the animation progresses
 * reanimates in loop
 * 
 * collision() does not stop the animation
 * so the scores tally all the collision until the animation is complete
 * can be fixed in the future
 */
function animateDiv(myclass){
    collision(egg, myclass);
    var newPosition = makeNewPosition();
    $(myclass).animate({ 
        top: newPosition[0], 
        left: newPosition[1] 
        }, {
        duration: 1000, 
        progress: function(){
            collision(egg, $(this));
        },
        complete: function(){
            animateDiv(myclass);
        },
    });
}


/**
 * get viewport dimensions
 * make random coordinates for the basket animation
 */
function makeNewPosition(){ 
    var h = floorHeight - 40;
    var w = gameboard.width() -7;
    var newW = Math.floor(Math.random() * w);
    return [h,newW];      
}

/**
 * 
 * @param {*} div1 first div to be compared
 * @param {*} div2 second div to be compared
 * 
 * if all the conditions are met, then there is collision
 * score is updated
 * hit sound is played when basket hits the egg
 */
function collision(div1,div2) {
    var x1 = parseInt(div1.offset().left);
    var y1 = parseInt(div1.offset().top);
    console.log(x1,y1);
    
    var b1 = parseInt(y1 + div1.outerHeight(true));
    var r1 = parseInt(x1 + div1.outerWidth(true));
    console.log(b1,r1);
    
    var x2 = parseInt(div2.offset().left);
    var y2 = parseInt(div2.offset().top);
    console.log(x2,y2);

    var b2 = parseInt(y2 + div2.outerHeight(true));
    var r2 = parseInt(x2 + div2.outerWidth(true));
    console.log(b2,r2);

    //if all of the conditions are true, there is collision
    if (b1 > y2 && y1 < b2 && r1 > x2 && x1 < r2 && b1 <= 922){
        
        updateScore();
        hitSound();
        return true;     
    } else {
    
        return false;     
}
}

/**
 * updates score on both the egg and on the endgame page
 */
function updateScore() {
    eggCount++;
    eggCounter.text(eggCount);
    yourScore.text(eggCount);    
};

/**
 * shows the score and play again button 
 * once the timer runs out
 */
function endGame(){
    $('.score').show();    
}
