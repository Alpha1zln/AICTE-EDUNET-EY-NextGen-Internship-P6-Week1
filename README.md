# TRAVEL APP PROJECT - 
# PART OF EY EDUNET AICTE INTERNSHIP

## WEEK 1 UPDATE

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).



## STEP 1 

A- FORK REPO INTO YOUR GITHUB FROM MAIN.
B- Copy the http link for cloning data to PC.

    Detail here - 
    https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository?tool=webui

**********************************************************


## STEP 2

A- MAKE ITS CLONE INTO PC.
  - Open Git Bash.
  - Change the current working directory [cwd] to the location where you want the cloned directory.
  - Type git clone, and then paste the URL you copied earlier.
  - 
  #CODE FOR CLONE - 
    git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY

B- It is good approach, to create BRANCH of your main, so that both are saved separately and 
    later changes can be matched or if branch code fails, at least main code is remain unaltered.

    Cmd for creating branch in git bash ->
        git checkout -b branch-name

**********************************************************


## STEP 3 
  Adding files and updating the code to add more features and functionality and styling.
  A- Go to the cwd and open vscode.

  # How to work with React project : 
    - npm start [as basic setup is already there, else different steps for react project]
    - if any files is not matching, install it.
    - here scripts file has to be installed [in this project]  

  B- Once all changes are made. Follow below steps to push code from local pc to github.

**********************************************************


## STEP 4 --- 
  STEPS TO BE FOLLOWED IN GIT BASH SO THAT LOCAL CODE IS TRANSFERED TO GITHUB

  Here's a step-by-step guide to creating a branch, making changes, and committing and pushing or pulling changes:

          1. Create a New Branch
          To create a new branch from the cloned repository:
          
          Open a terminal or command prompt in your project directory.
          Use the following command to create and switch to a new branch:
          bash
          Copy code
          git checkout -b branch-name
          Replace branch-name with your desired branch name (e.g., feature-update).
          2. Make Changes
          Edit the files as required using your editor (e.g., VS Code).
          3. Stage the Changes
          To stage all modified files:
          
          bash
          Copy code
          git add .
          If you want to stage specific files, use:
          bash
          Copy code
          git add file-name
          4. Commit the Changes
          Commit your changes with a meaningful message:
          
          bash
          Copy code
          git commit -m "Your commit message here"
          Example:
          
          bash
          Copy code
          git commit -m "Added new features to the login page"
          5. Push the Branch to Remote
          To push your branch to the remote repository:
          
          bash
          Copy code
          git push origin branch-name
          6. Pull Changes from the Remote Branch (if needed)
          To update your branch with the latest changes from the remote:
          
          bash
          Copy code
          git pull origin branch-name
          7. Switch Between Branches (Optional)
          To switch back to the main branch or any other branch:
          
          bash
          Copy code
          git checkout branch-name
          Example:
          
          bash
          Copy code
          git checkout main
          8. Create a Pull Request (Optional)
          Once you’ve pushed your branch, you can:
          
          Go to the repository on GitHub.
          Click Compare & pull request for your branch.
          Review the changes and create a pull request to merge into the target branch (e.g., main).
          Summary of Commands
          bash
          Copy code
          # Create and switch to a new branch
          git checkout -b branch-name
          
          # Stage changes
          git add .
          
          # Commit changes
          git commit -m "Your commit message"
          
          # Push changes to the remote repository
          git push origin branch-name
          
          # Pull changes from the remote branch
          git pull origin branch-name
          Let me know if you need further clarification!
          
          
          

*******************************************************









*********************************************
## Miscellaneous 

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


