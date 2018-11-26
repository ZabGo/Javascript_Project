# project_seven_wonders
The BBC are looking to improve their online offering of educational content by developing some interactive browser applications that display information in a fun and interesting way. Your task is to make an a Minimum Viable Product or prototype to put forward to them - this may only be for a small set of information, and may only showcase some of the features to be included in the final app.

The app we created lets users:

- View some educational content on a chosen topic
- Interact with the page to move through different sections of content

Extensions:

- We created a database using Mongo DB to store information about the seven wonders.
- We created a multiple choice game to help users retain information.
- We used charts and maps to display information to the page.

From the home page the user can go to the Info or Game section of the app. The Info section brings the user to a Map (leaflet) with markers of the positions of all the seven wonders. If the user clicks on a particular marker, the app will display information about the wonder and a photo of the selected wonder.
The Game section displays a question with 4 possible answers. The game starts with 3 lives. If the user answers a question correctly, they get 10 points. If they don't, they lose a life. If the user answers 10 questions correctly they get 10 extra points and an extra life. If the user quits the game or they lose all their lives, the chart will show the user the score they achieved, and a graph showing the scores they achieved from the last three games they played.
