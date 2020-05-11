$(window).on('load', function() {
    $('#cover').delay(800).fadeOut(200);
});


$('#playBtn').click(function() {
    $('#titlepage').hide();
});

$('#startBtn').click(function(){
    $(this).hide();
    startGame();
    gameAudio();
});

let basket1 = $('#basket1'),
basket2 = $('#basket2'),
basket3 = $('#basket3');

function startGame(){
    animateDiv(basket1);
    animateDiv(basket2);
    animateDiv(basket3);
    gameAudio();
    layEgg(egg);
    chickenMouseOver();  
    timer();
}

//------------------timer---------------------//
function timer() {
let startingMinutes = 3;
time = startingMinutes * 60,
countdown = $('.timer');

setInterval(updateCountdown, 1000);
}

function updateCountdown(){
    
    let minutes = Math.floor(time / 60),
    seconds = time % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    
    
    countdown.innerHTML = `${minutes}:${seconds}`;
    time--;
}


//-------------------audio--------------------//
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


//-----------------------chicken------------//
$('.hen').hover(function(){
    $(this).animate({
        height: '13vh',
        width: '15vh',
    }, 100)
}, function(){
    $(this).animate({
        width: '10vh',
        height: '12vh',
    }, 100)
});

let hen = $('.hen'),
egg = $('.egg');

function layEgg(){
    hen.click(function(){
        basketTop = parseInt($('#basket1').offset().top);
        (egg).show().animate({
            top: basketTop
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

function reloadEgg() {
     (egg).css('top', '40px');
}

let eggCounter = $(".egg-counter");
function updateScore() {
    eggCount = 10
    eggCount--;
    eggCounter.text(eggCount);    
}



//makes new coordinates and does callback for basket
function animateDiv(myclass){
    let egg = $('.egg');
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

let gameboard = $("#gameboard"), 
floor = $('.floor'),
floorHeight = parseInt(floor.css('bottom'));

// Get viewport dimensions (remove the dimension of the div)
function makeNewPosition(){ 
    var h = floorHeight - 40;
    var w = gameboard.width() -7;
    var newW = Math.floor(Math.random() * w);
    return [h,newW];      
}

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

    //if one of the conditions is true, there is no collision
    if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2 && b1 <= 921){
        return false;
    } else {
        console.log('collision');
        updateScore();
        hitSound();
        return true;     
}}


// function stopGAme() {
//     restart.show();
//     startGame();
// }

// function restart() {

//     $(this).click(function() {
//     location.reload();
// })