$( document ).ready(function() {
    animateDiv();
});


    // $('#hen1').click(function(){
    //     $('#egg1').animate({
    //         top: '500px',
    //     }, 500);
    // });

    //   $('#hen2').click(function(){
    //     $('#egg2').animate({
    //         top: '500px',
    //     }, 500);
    // });

    //  $('#hen3').click(function(){
    //     $('#egg3').animate({
    //         top: '500px',
    //     }, 500);
    // });

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

function makeNewPosition(){
    
    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height();
    var w = $(window).width();
    
    var nh = Math.ceil(Math.random() * h);
    var nw = Math.ceil(Math.random() * w);
    
    return [nh,nw];    
    
}

function animateDiv(){
    var newq = makeNewPosition();
    $('.basket').animate({ top: newq[0], left: newq[1] }, function(){
      animateDiv();        
    });
    
};