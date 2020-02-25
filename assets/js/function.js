$( document ).ready(function(){
    animateDiv('#basket1');
    animateDiv('#basket2');
    animateDiv('#basket3');
    layegg();
    
});
   


function layegg(){
    $('#hen1').click(function(){
        $('#egg1').show().animate({
            top: '620px',
        }, 500).hide();
    });

      $('#hen2').click(function(){
        $('#egg2').show().animate({
            top: '620px',
        }, 500);
    });

     $('#hen3').click(function(){
        $('#egg3').show().animate({
            top: '620px',
        }, 500);
    });
}
    /*--------------------------- Randomized horizontal movement for basket
    --take the dimension of gameboard, remove dimensions of basket*/
    
    // function basketSwoosh(){
    //     var x= document.querySelector('div#basket1.basket').getBoundingClientRect().left;
    //     var y = document.querySelector('div#basket1.basket').getBoundingClientRect().top;
        
    //     var newX = Math.floor(Math.random() * x);

    //     return [newX,y];
    // }
    // const box = document.querySelector('div#basket1.basket');
    // const rect = box.getBoundingClientRect();
    // console.log(rect);
// function newPosition(){
//     var basketBoxX = document.querySelector('div#basket1.basket');
//     var x = basketBoxX.getBoundingClientRect();
//     console.log(x);

//     var basketBoxY = document.querySelector('div#basket1.basket');
//     var y = basketBoxY.getBoundingClientRect().left;
//     console.log(y);

//     var newX = Math.floor(Math.random() * x);
// }
//     newPosition();


// var basketBoxX = document.querySelector('div#basket1.basket');
//     var x = basketBoxX.getBoundingClientRect();
//     console.log(x);

//     var basketBoxY = document.querySelector('div#basket1.basket');
//     var y = basketBoxY.getBoundingClientRect().left;
//     console.log(y);

//      var newX = Math.floor(Math.random() * x);

//     function newP(){
//        console.log[newX,y];
//     }

// var basketBoxX = document.querySelector('div#basket1.basket');
//     var x = basketBoxX.getBoundingClientRect().top;
//     console.log(x);

 
//     var y = basketBoxX.getBoundingClientRect().left;
//     console.log(y);


//      var newX = Math.floor(Math.random() * x);
//     console.log(newX);
    
//     function animateDiv(){
//     var newPosition = [newX,y];

//     $('.basket').animate({ top: newPosition[0], left: newPosition[1] }, function(){             
//     animateDiv();
//     });
// }

// $(document).ready(function(){
//     $('#hen1').click(function(){
//         $('#basket1').animate({
//             right: '800px',
//         }, 500);
//     });   
// });

// $('#hen2').click(function(){
//         $('#egg2').animate({
//             top: '500px',
//         }, 500);
//     })

function makeNewPosition(){
    
    // Get viewport dimensions (remove the dimension of the div)
    var h = $('#gameboard').height() - 650;
    var w = $('#gameboard').width() -7;
    
    
    var nw = Math.floor(Math.random() * w);
    
    return [h,nw];    
    
}


//makes new coordinates and does callback
function animateDiv(myclass){
    var newq = makeNewPosition();
    $(myclass).animate({ top: newq[0], left: newq[1] }, 1000,   function(){
      animateDiv(myclass);        
    });
    
}

function missedEgg(egg){
    var egg = $('.egg');
    var floor = $('.floor');

        if (collision(egg, floor)){
            $('#sunnysideup1').show();
        }

        else alert();
}

function collision($div1, $div2) {
    var x1 = $div1.offset().left;
    var y1 = $div1.offset().top;
    
    //coordinates of first div
    var h1 =  $div1.outerHeight(true);
    var w1 =  $div1.outerWidth(true);
   
    //dimensions of div1 including padding, margin, border
    var b1 = y1 + h1;
    var r1 = x1 + w1;
    
    //distance from top vs. coordinate
    var x2 = $div2.offset().left;
    var y2 = $div2.offset().top;
   

    var h2 = $div2.outerHeight(true);
    var w2 = $div2.outerWidth(true);
    
    var b2 = y2 + h2;
    var r2 = x2 + w2;

    //if one of the conditions is true, there is no collision
    if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
    return true;
}
