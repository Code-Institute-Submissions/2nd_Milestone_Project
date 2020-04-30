

var scoreboard = $("#scoreboard"),
life = $(".life"),
targetScore = $(".target"),
eggCounter = $(".egg-counter"),

gameboard = $("#gameboard"),
hen = $(".hen"),
henContainer = parseInt($(".hen-container").css("top")),
            //=parseInt($('.hen-container').offset().top;
egg = $(".egg"),
floor = $(".floor"),
startBtn = $('#startBtn');

const gameLoop = document.getElementById('gameLoop');


//initial values
life = 5;
targetScore = 30;
eggcounter = 0;
anim_id = 0;
egg_current_position = 0;
speed = 2;