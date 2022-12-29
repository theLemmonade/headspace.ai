# headspace.ai  Team 3 Group Project #2
A website for users to generate AI images and save tham to a personal gallery.

# Project Status
Submitted for evaluation.

# Project Deployed

# Screenshots of Webpage
<img src="" alt="Website Screenshot1">
<img src="" alt="Website Screenshot2">
<img src="" alt="Website Screenshot3">

# Technologies Used
<ul>
<li>Used HTML, JavaScript, CSS, SQL, Node, Handlebars to build website.
<li>Used OpenAI API to capture and render ai generated images per user input. https://https://openai.com/api/ 
</ul>


# Installation
<ul>
<li>Run npm install
<li>create .env file with DB_NAME='user_db', 'DB_USER='root', DB_PASSWORD='(your SQL password)'
<li>Run SQL installation "mysql -u root -p", then enter SQL password from env file when prompted
<li>Run "source db/schema.sql", then "quit" for next command
<li>Run seed command "npm run seed"
<li>Run the start command "npm start"
<li>Open http://localhost:3001
</ul>

# Usage
Users can enter a prompt and the api will generate an AI image based on the users text input.
Users can choose to save the generated image to a personal gallery page.

# User Story
<ul>
<li>As a user I want to try an AI image generator and choose to save my created images to my personal gallery.
<li>WHEN I open the website I will be able to enter a text prompt to create an AI generated image.
<li>THEN I will be able to choose whether to save the image.
<li>WHEN I choose to save an image
<li>THEN I will be prompted to login to my account or creat a new account
<li>WHEN I create a user account or login to my existing account
<li>THEN I will be able to save my created images to my personal gallery
<li>WHEN I click into the Gallery tab 
<li>THEN I will see AI images from other users as examples of AI images
<li>WHEN I click the logout button 
<li>THEN I will be redirected to the homepage
</ul>

# Roadmap
This is a responsive, interactive website using many technologies to generate an AI image based on user input, including a save feature to store a user's created images. Future developments could include:
<ul>
<li>Add options for the image created, including size options, ....
<li>Add a share button for the user to easily share an image through social media or text, or copy a link to the image which would be shareable
<li>Add a download button for the user to save an image to thair local storage
<li>Add a social forum page for users to share their created images and comment on other users shared images.
</ul>

# Contributors
<ul>
<li>Kevin Bell
<li>Emily Bernard
<li>Alexander Frankhouser
<li>Chris Lemmon
</ul>

# Acknowledgements