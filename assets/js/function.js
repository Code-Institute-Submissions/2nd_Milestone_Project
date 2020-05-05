

function initialize() {
    $('#startBtn').click(function(){
        $(this).hide();
    });
}

function playAudio() {
   $('#gameLoop')[0].play();
}

function chickenSound() {
    $('#chickenCluck')[0].play();
}



function layEgg(){
    $('.hen').click(function(){
        $('.egg').show().animate({
            top: '620px'
        }, 
        {
            duration: 1000,
            complete: function() {
                $(this).hide().animate({
                   top: '45px' 
                }, 20,);
            },
        });
        chickenSound();
    });
}



function makeNewPosition(){
    
    // Get viewport dimensions (remove the dimension of the div)
    let h = $('#gameboard').height() - 650;
    let w = $('#gameboard').width() -7;
    
    
    let newW = Math.floor(Math.random() * w);
    
    return [h,newW];    
    
}


//makes new coordinates and does callback for basket
function animateDiv(myclass){
    var newPosition = makeNewPosition();
    $(myclass).animate({ top: newPosition[0], left: newPosition[1] }, 1000, function(){
      animateDiv(myclass);        
    });
    
}



function collision(div1, div2) {
    var x1 = div1.offset().left;
    var y1 = div1.offset().top;
    
    //coordinates of first div
    var h1 = div1.outerHeight(true);
    var w1 = div1.outerWidth(true);
   
    //dimensions of div1 including padding, margin, border
    var b1 = y1 + h1;
    var r1 = x1 + w1;
    
    //distance from top vs. coordinate
    var x2 = div2.offset().left;
    var y2 = div2.offset().top;
   

    var h2 = div2.outerHeight(true);
    var w2 = div2.outerWidth(true);
    
    var b2 = y2 + h2;
    var r2 = x2 + w2;

    //if one of the conditions is true, there is no collision
    if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2){
    return false;
    }
    alert ("there is collision!");
    
};


function missedEgg(egg) {

        if (collision(egg, floor)){
            $('#sunny_sideup').show();
        };
}