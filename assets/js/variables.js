

let startBtn = $('#startBtn');
scoreboard = $("#scoreboard"),
life = $(".life"),
target = $(".target"),
eggCounter = $(".egg-counter"),
gameboard = $("#gameboard"),
hen = $(".hen"),
// henContainer = parseInt($(".hen-container").css("top")),
//             //=parseInt($('.hen-container').offset().top;
egg = $(".egg"),
floor = $(".floor"),
basket1 = $('#basket1'),
basket2 = $('#basket2'),
basket3 = $('#basket3');


//initial values
lifescore = 5;
life.text(lifescore);

targetScore = 30;
target.text(targetScore);

eggCount = 0;
eggCounter.text(eggCount);

// anim_id = 0;
// egg_current_position = 0;
// speed = 2;