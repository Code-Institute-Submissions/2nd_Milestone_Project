Second Milestone project:

# Egg Drop Game

This is a simple shoot and catch game. Click the hen to shoot an egg then try to hit the baskets with the egg. 
Children of all ages can play this game either on desktop or on mobile phones.

-----
 
## UX
-----

USER STORIES 


As a player, I want a simple short game that gives a score result at the end of every run.

As a player, I want retro background music.

As a content creator, I want to show clearly show the different parts of the game. 

----------------
My project has 30-seconds game time and gives out the score every end of the game run. 

My project has 8bit music which I managed to find from https://freesound.org/.

My project has different sequences where in the player should press a button in order to get to the next part of the game. 


**Desktop wireframes**

<a ref="/wireframes/desktop_landingpage.png" alt="desktop">Landing page</a><br>
<a ref="/wireframes/desktop_main_game.png" alt="desktop">Main game</a><br>
<a ref="/wireframes/desktop_end_game.png" alt="desktop">End game</a>

**Mobile wireframes**

<a ref="/wireframes/mobile_landing_page.png" alt="mobile">Landing page</a><br>
<a ref="/wireframes/mobile_main_game.png" alt="mobile">Main game</a><br>
<a ref="/wireframes/mobile_end_game.png" alt="mobile">End game</a><br>

-----

FEATURES
---------------

**EXISTING FEATURES**

* Allows user to play or play again the game by clicking start or play again button.
    The game does not automatically start or run. 

* The player scores when the egg hits the basket that moves horizontally to and fro across the screen.

* Animations by Jquery .animate().

**FEATURES LEFT TO IMPLEMENT**

* I did not also see a point in making a player login because I only have one level for the game,
but I can do so if I design other levels for the game.

## Technologies Used

- [JQuery](https://jquery.com)
    - The project uses **JQuery** to simplify DOM manipulation.

- [Bootstrap](https://getbootstrap.com/)
    -The project uses **Bootstrap** to styling.

---------------------------------------------
## Testing

*Please be advised that am a beginner and am I still beginning to understand Git and GitHub. I shared my project to a friend to get some feedback and accidentally merged her comments. I already informed my course tutor about this and she said it would not be considered as a contribution and that I should mention it here in README file.

1. Js file was checked with JShint. CSS file was checked by Jigsaw validator. HTML was checked with HTML checker. All error detected were fixed.

2. The entire game's layout looks almost exactly the same across different screen sizes except for the landing page which can alter depending on screen size.

3. The "loading..." (window.onload) part may take sometime to load depending on browsers. Loads fast on Chrome.


-------------
## Deployment
-------------
This site is hosted using GitHub pages, deployed directly from the master branch. The deployed site will update automatically upon new commits to the master branch. 
In order for the site to deploy correctly on GitHub pages, the landing page must be named index.html.

To run locally, you can clone this repository directly into the editor of your choice by pasting `git clone`
 (link) into your terminal. To cut ties with this GitHub repository,
 type git remote rm origin into the terminal.

The deployment version may have some alteration from the development version. Errors that I encountered were fixed:

* top: 600 was changed to top: 1000 to accomodate larger screens

                hen.click(function(){
                        (egg).show().animate({
                            top: 600
                        }, {
                            duration: 1500,
                            complete: function() {
                                reloadEgg();
                            }
                        });
                    });

### Version Control

* The featureA branch contains all the development version which was merged to the master branch before deployment.


-----
## Credits
### Content

* Collision detection function https://github.com/arshadasgar/arshadasgar.github.io/blob/master/eggs/collision_detection.js


### Media
- The photos used in this site were created by the me.

### Acknowledgements

- I received inspiration for this project from this another egg game from google play

https://play.google.com/store/apps/details?id=air.com.fruitylabs.eastereggtoss&hl=en
