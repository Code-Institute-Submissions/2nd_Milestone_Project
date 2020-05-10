$(window).on('load', function() {
    $('#cover').fadeOut(200);
});


function pageInteractive() {
    $(startBtn).click(function() {
        $(this).hide();
        startGame();
    });
}


function startGame(){
    animateDiv(basket1);
    // animateDiv(basket2);
    animateDiv(basket3);
    playAudio();
    layEgg(egg);
    chickenMouseOver();
   
}

function playAudio() {
   $('#gameLoop')[0].play();
}

function chickenSound() {
    $('#chickenCluck')[0].play();
}

function chickenMouseOver(){
    hen.hover(function(){
        $(this).animate({
            height: 80,
            width: 100,
        }, 100)
    }, function(){
        $(this).animate({
            width: 62,
            height: 89,
        }, 100)
    });
}

function layEgg(){
    hen.click(function(){
        egg.show().animate({
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
    if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2 && b1 <= 921){
        return false;
    } else {
        console.log('collision');
        updateScore();
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