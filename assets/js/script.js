 $(startBtn).on('click', function(){
    $(this).hide();
    startGame = function(){
    
        anim_id = requestAnimationFrame (startGame);   
    }

     anim_id = requestAnimationFrame (startGame);
    animateDiv(basket1);
    animateDiv(basket2);
    animateDiv(basket3);
    layEgg();
    playAudio();
    collision(basket1, egg);
    collision(basket2, egg);
    collision(basket3, egg);
    collision(floor, egg);
});