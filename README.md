# RegexFixer
A web application for RegexFixer that can fix your wrongful regular expression to a correct one.

## Front End
See the deployed version [here](https://regexfixer.herokuapp.com/)
### **Development**
Use [React.js](https://reactjs.org/) and [Material UI](https://material-ui.com/) for the front end design.

**Main files:**

1. src/App.js
The main class that decides the basic layout of the application: a fixed top bar, a fixed side bar, and the main contents. The layout and its css are using the [Drawer](https://material-ui.com/components/drawers/) from material ui. This class has the state that holds the input examples, regex, and the fixed result, so that it controls the render of its child components. It defines functions to handle the input of users and change the state to update the webpage. It also defines the `handleFix` function to send post request to send inputs to the back end, and get result back using axios, which is a Ajax tool.
2. src/components/topBar.jsx
The components for top bar. Mainly use material ui for the design. It is fixed on the top, and has the button for submitting the input and fix the regex.
3. src/components/sideBar.jsx
The components for top bar. Mainly use material ui for the design. It is fixed on the left side, and has buttons for loading some demos. By clicking the button, it will trigger the function that update the state of app.js, and then the webpage get rerendered.
4. src/components/contents.jsx
The components that holds the input text boxes for examples and regex. Use [Grid](https://material-ui.com/components/grid/) in material ui for layout, so that the layout won't mess up while zooming.
5. src/components/exampleCard.jsx
The components for examples input, both positive and negative. Use [Card](https://material-ui.com/components/cards/) in material ui. The component receive name, examples and many other properties as parameters, so it can be reused for both positive and negative examples, and the style of it can be changed by its parent without changing the code itself.
6. src/components/regexCard.jsx
Almost same as the exampleCard.
7. src/components/regexCard.jsx
The components for showing the fixed regex. Similar to other cards, but it will show a loading symbol while fetching the result from backend. Once get the result, it will render the result.

**Running on local machine:**
- First install npm if you don't have it.
- In the root directory, run `npm install` first. It will install all the dependencies.
- Then run `npm start`. It will open the webpage on port 3000 by default. Then you can view the webpage on your browser.

### **Deployment**
Use [Heroku](www.heroku.com) for deployment. (Since it's free and light-weighted)

**Deploy from local machine to heroku:**
- First sign up for an account and install heroku CLI if you don't have it.
- Initiate a git repository in the front end directory.
- Add and commit all files (except /node_modules, it's excluded in the .gitignore)
- Create a heroku project by running `heroku create $APP_NAME --buildpack mars/create-react-app` This front end is currently deployed with my account. 
- Then push the local repo to heroku by `git push heroku master`
- If no error occurs, you should be able to see the webpage online by `heroku open`, or directly go to the url.


## Back End

### **Development**
This back end is mostly depended on the work of [rongpan's RFixer project](https://github.com/rongpan/RFixer/edit/master/README.md).

The main idea is to write a simple index.js file as an interface for receiving the post request from the front end. Once it receives the post request containing the user's inputs, it will simply call the terminal to evoke the command line application written by rongpan.

The index.js is mainly developed with [Node.js](https://nodejs.org/). It keeps listening on the port. Once it receives a request, it first convert the inputs in the request from a JSON object to a txt file with the format required by rongpan's command-line app. Then, it will call the terminal with `java -Djava.library.path=:./ -jar target/regfixer.jar -m 1 fix --file $FILE_NAME` to execute the app. Finally, it will grab the result in the terminal and return the result to the front end.

**Running on local machine:**
- First install Node.js if you don't have it. It is installed together with npm.
- In the root directory, run `npm install` first. It will install all the dependencies.
- Then run `node index.js`. It will listen on port 3001 by default. Then you can call it and test it with the front end.

So far, it works all good on the local machine.

### **Deployment**

It is currently deployed [here](https://regexfixer-backend.herokuapp.com/) with heroku. However, **_The back end is not successfully deployed yet. It is deployed with heroku to that url, but it's not performing correctly. It works all good on local machine, and the front end can send request and receive reply from it. But the problem is that heroku cannot run java command in the command-line. Since the implementation of the back end is simply calling the compiled jar file, the deployed version is not working. So the next thing to do is to either change heroku to other deployment tools like AWS, or completely change the implementation of the back end_**

**Deploy from local machine to heroku:**
- First sign up for an account and install heroku CLI if you don't have it.
- Initiate a git repository in the bavk end directory.
- Add and commit all files (except /node_modules, it's excluded in the .gitignore)
- Create a heroku project by running `heroku create $APP_NAME` This back end is currently deployed with my account. 
- Then push the local repo to heroku by `git push heroku master`
- If no error occurs, you should be able to see the webpage online by `heroku open`, or directly go to the url.
