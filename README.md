# Site: ![Screen Shot 2021-07-12 at 8 33 19 PM](https://user-images.githubusercontent.com/28114579/125310795-87ca4100-e350-11eb-9791-6fbfe3558bf1.png)

Deployment instructions 

1. git init
2. Git status (to check all the files)
3. Git add .
4. Agin step 2
5. Git commit -m “msg”
6. git remote add origin https://github.com/Dipak-Gogoi/movie-app.git
7. git push -u origin master


For react projects

Open your package.json and add a homepage field for your project:
1. "homepage": "https://myusername.github.io/my-app",

To publish it at https://myusername.github.io/my-app, run:
2. npm install --save gh-pages

Add the following scripts in your package.json:
3. "predeploy": "npm run build",
   "deploy": "gh-pages -d build",
   
4. npm run deploy
