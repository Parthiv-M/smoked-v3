# Smoked

The repository for the third version of the Smoked website for Manipal Information Security Team

## Prerequistes
- Install [NodeJS](https://nodejs.org/en/download/) on your system.
- Check if you have `npm` installed by running `npm -v` in the terminal. If it is present, you should see the version number.
- Install `yarn` with `npm install --global yarn`, since we will be using `yarn` to manage packages here. 

## Get it running

Follow the steps given below to get the website running on your system.
- Clone the repository from [here](https://github.com/Parthiv-M/smoked-v3) onto your local system
- Navigate to the folder and open up your terminal in the root of the project
- Install all the dependencies required, in the root folder, client folder, and the backend folder in the following way.
    - In the root of the project, run `yarn install`
    - Type `cd client` to navigate to the client directory and run `yarn install`
    - Type `cd ../backend` from the client directory to navigate to the backend directory and run `yarn install`.
- Navigate back to the root of the project and run the `dev-start` script by running `yarn dev-start`
The backend server and the frontend will start running on ports `3002` and `3000` respectively. Fire up your browser on `http://localhost:3000` to see the frontend. If you see the text "Connected to backend", you have successfully run the project!

## Contributing
**Do not make any changes to the `master` branch of the repo as it will host the production ready code**. Make your own branch with `git branch <branch-name>` and checkout to that branch with `git checkout <branch-name>`. (Preferably, put the branch name as your own name) Make your changes to that branch and push it to the repo whenever you are done.

It is a recommended practice to place useful comments, at the right places, indicating what your code does. It will also help in debugging in the future. 