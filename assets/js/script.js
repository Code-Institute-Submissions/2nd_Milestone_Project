 $( document ).ready(function(){

    startGame = function() {
        // if (checkMissedEgg(egg)) {
        //     backToInitialPosition(egg);
        // }
            layEgg(egg1);

            anim_id = requestAnimationFrame (startGame);
        
    }

     anim_id = requestAnimationFrame (startGame);
});