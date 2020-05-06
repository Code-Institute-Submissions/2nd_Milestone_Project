

let startBtn = $('#startBtn');
scoreboard = $("#scoreboard"),
life = $(".life"),
target = $(".target"),
eggCounter = $(".egg-counter"),
gameboard = $("#gameboard"),
hen = $(".hen"),
egg = $(".egg"),
henContainer = $('.hen-container'),
eggTop = parseInt(henContainer.css('top'));
sunnySideup =$('#sunny_sideup'),
floor = $(".floor"),
basket1 = $('#basket1'),
basket2 = $('#basket2'),
basket3 = $('#basket3'),
eggX = egg.offset().top;
eggY = egg.offset().left;
floorHeight = parseInt(floor.css('bottom'));


//initial values
lifescore = 5;
life.text(lifescore);



eggCount = 10;
eggCounter.text(eggCount);

