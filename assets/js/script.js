 $(startBtn).on('click', function(){
    $(this).hide();
    startGame = function(){

        if (missedEgg(egg)) {
            if (collision(egg, floor)) {
                $('#sunny_sideup').show();
                loseLife();
                return true;
            }
                return false;
        }

        if (catchedEgg(egg)) {
            if (collision($('.egg'), $('.basket'))) {
                updateScore();
            }
        }
       
        if (life == 0) {
            stopGAme();
        }
    
        anim_id = requestAnimationFrame (startGame);   
    }

    //  anim_id = requestAnimationFrame (startGame);
    animateDiv(basket1);
    animateDiv(basket2);
    animateDiv(basket3);
    playAudio();

    layEgg();

   
    // collision(basket1, egg);
    // collision(basket2, egg);
    // collision(basket3, egg);
    // collision(floor, egg);




});