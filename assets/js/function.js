$(window).on('load', function() {
    $('#cover').fadeOut(200);
});

let basket1 = $('#basket1'),
basket2 = $('#basket2'),
basket3 = $('#basket3'),
hen = $('.hen'),
egg = $('.egg');
gameboard = $("#gameboard"), 
floor = $('.floor'),
floorHeight = parseInt(floor.css('bottom')),
minutes = $('#minutes'),
min = 2;
minutes.text(min);
seconds = $('#seconds'),
sec = 59;
seconds.text(sec);
eggCounter = $(".eggCount"),
eggCount = 10;
eggCounter.text(eggCount);


//-----------------------game start-----------------//
$('#playBtn').click(function() {
    $('#titlepage').hide();
});

$('#startBtn').click(function(){
    $(this).hide();
    startGame();
    gameAudio();
});



function startGame(){
    animateDiv(basket1);
    animateDiv(basket2);
    animateDiv(basket3);
    gameAudio();
    layEgg(egg);
    chickenMouseOver();

}
//------------------timer---------------------//




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


function layEgg(){
    hen.click(function(){
        basketTop = parseInt($('#basket1').offset().top);
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

function reloadEgg() {
     (egg).css('top', '40px');
}


function updateScore() {
    eggCount--;
    eggCounter.text(eggCount);    
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
        progress: function(){
            collision(egg, $(this));
        },
        complete: function(){
            animateDiv(myclass);
        },
    });
}



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
    if (b1 > y2 && y1 < b2 && r1 > x2 && x1 < r2 && b1 <= 922){
        
        console.log('collision');
        updateScore();
        hitSound();
        return true;     
    } else {
    
        return false;     
}
}

// function stopGAme() {
//    
// }

function restart() {
    $('#titlepage').show();
};