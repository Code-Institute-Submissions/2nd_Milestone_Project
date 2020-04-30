 $('#startBtn').on('click', function(){
    $(this).hide();
    startGame = function() {
        // if (checkMissedEgg(egg)) {
        //     backToInitialPosition(egg);
        // }
            // layEgg(egg1);

            anim_id = requestAnimationFrame (startGame);
        
    }

     anim_id = requestAnimationFrame (startGame);
    animateDiv('#basket1');
    animateDiv('#basket2');
    animateDiv('#basket3');
    layEgg();
    playAudio();
    
    
});