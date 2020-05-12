<<<<<<< HEAD
second Milestone project:
=======
Second Milestone project:
>>>>>>> featureA

# Egg Drop Game

This is a simple shoot and catch game. Click the hen to shoot an egg then try to hit the baskets with the egg. 
Children of all ages can play this game either on desktop or on mobile phones.
<<<<<<< HEAD
 
## UX

As a player, I want a simple short game that gives a score result at the end of every run.

As a player, I want retro background music.

As a content creator, I want to show clearly show the different parts of the game. 


Desktop wireframes
<a ref="/wireframes/desktop_main_game.png"></a>
<a ref="/wireframes/desktop_landingpage.png"></a>
<a ref="/wireframes/desktop_end_game.png"></a>
<a ref="/wireframes/mobile_landing_page.png"></a>
<a ref="/wireframes/mobile_main_game.png"></a>
<a ref="/wireframes/mobile_end_game.png"></a>

 
Use this section to provide insight into your UX process, focusing on who this website is for, what it is that they want to achieve and how your project is the best way to help them achieve these things.

In particular, as part of this section we recommend that you provide a list of User Stories, with the following general structure:
- As a user type, I want to perform an action, so that I can achieve a goal.

This section is also where you would share links to any wireframes, mockups, diagrams etc. that you created as part of the design process. These files should themselves either be included as a pdf file in the project itself (in an separate directory), or just hosted elsewhere online and can be in any format that is viewable inside the browser.

## Features

In this section, you should go over the different parts of your project, and describe each in a sentence or so.
 
### Existing Features
- Feature 1 - allows users X to achieve Y, by having them fill out Z
- ...

For some/all of your features, you may choose to reference the specific project files that implement them, although this is entirely optional.

In addition, you may also use this section to discuss plans for additional features to be implemented in the future:

### Features Left to Implement
- Another feature idea

## Technologies Used

In this section, you should mention all of the languages, frameworks, libraries, and any other tools that you have used to construct this project. For each, provide its name, a link to its official site and a short sentence of why it was used.
=======

-----
 
## UX
-----

USER STORIES 


As a player, I want a simple short game that gives a score result at the end of every run.

As a player, I want retro background music.

As a content creator, I want to show clearly show the different parts of the game. 

----------------
My project has 60 seconds game time and gives out the score every end of the game run. 

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

* For now, the scores are generated while .animate() runs and collects all the collision until the animation is completed.
* In the future, maybe I can find a way to stop the animation on the first collision detected by collision().

                function animateDiv(myclass){
                    collision(egg, myclass);
                    var newPosition = makeNewPosition();
                    $(myclass).animate({ 
                        top: newPosition[0], 
                        left: newPosition[1] 
                        }, {
                        duration: 1000, 
                        progress: function(){
                            collision(egg, $(this));
                        },
                        complete: function(){
                            animateDiv(myclass);
                        },
                    });
                }
* I did not also see a point in making a player login because I only have one level for the game,
but I can do so if I design other levels for the game.

## Technologies Used
>>>>>>> featureA

- [JQuery](https://jquery.com)
    - The project uses **JQuery** to simplify DOM manipulation.

<<<<<<< HEAD

## Testing

=======
- [Bootstrap](https://getbootstrap.com/)
    -The project uses **Bootstrap** to styling.

---------------------------------------------
## Testing

*Please be advised that am a beginner and am I still beginning to understand Git and GitHub. I shared my project to a friend to get some feedback and accidentally merged her comments. I already informed my course tutor about this and she said it would not be considered as a contribution and that I should mention it here in README.md.

>>>>>>> featureA
In this section, you need to convince the assessor that you have conducted enough testing to legitimately believe that the site works well. Essentially, in this part you will want to go over all of your user stories from the UX section and ensure that they all work as intended, with the project providing an easy and straightforward way for the users to achieve their goals.

Whenever it is feasible, prefer to automate your tests, and if you've done so, provide a brief explanation of your approach, link to the test file(s) and explain how to run them.

For any scenarios that have not been automated, test the user stories manually and provide as much detail as is relevant. A particularly useful form for describing your testing process is via scenarios, such as:

1. Contact form:
    1. Go to the "Contact Us" page
    2. Try to submit the empty form and verify that an error message about the required fields appears
    3. Try to submit the form with an invalid email address and verify that a relevant error message appears
    4. Try to submit the form with all inputs valid and verify that a success message appears.

In addition, you should mention in this section how your project looks and works on different browsers and screen sizes.

You should also mention in this section any interesting bugs or problems you discovered during your testing, even if you haven't addressed them yet.

If this section grows too long, you may want to split it off into a separate file and link to it from here.

<<<<<<< HEAD
## Deployment
=======
-------------
## Deployment
-------------
This site is hosted using GitHub pages, deployed directly from the master branch. The deployed site will update automatically upon new commits to the master branch. 
In order for the site to deploy correctly on GitHub pages, the landing page must be named index.html.

To run locally, you can clone this repository directly into the editor of your choice by pasting `git clone`
 (link) into your terminal. To cut ties with this GitHub repository,
 type git remote rm origin into the terminal.

 ----

>>>>>>> featureA

This section should describe the process you went through to deploy the project to a hosting platform (e.g. GitHub Pages or Heroku).

In particular, you should provide all details of the differences between the deployed version and the development version, if any, including:
- Different values for environment variables (Heroku Config Vars)?
- Different configuration files?
- Separate git branch?

In addition, if it is not obvious, you should also describe how to run your code locally.

<<<<<<< HEAD

## Credits

### Content
- The text for section Y was copied from the [Wikipedia article Z](https://en.wikipedia.org/wiki/Z)

### Media
- The photos used in this site were obtained from ...

### Acknowledgements

- I received inspiration for this project from X
=======
-----
## Credits
### Content

* Collsion detection function https://github.com/arshadasgar/arshadasgar.github.io/blob/master/eggs/collision_detection.js


### Media
- The photos used in this site were created by the me.

### Acknowledgements

- I received inspiration for this project from this another egg game from google play

https://play.google.com/store/apps/details?id=air.com.fruitylabs.eastereggtoss&hl=en
>>>>>>> featureA
