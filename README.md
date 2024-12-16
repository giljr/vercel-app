
# Vercel Nodejs App v0 - Installation Guide

Deploying a Node.js Backend to Vercel
What is Vercel’s Serverless Function?
Vercel’s serverless functions allow you to deploy code without managing servers. These functions automatically scale based on traffic, so you can focus on writing code while Vercel handles infrastructure.

Prerequisites
Before starting, ensure you have:

    GitHub account (free)
    Vercel account (free)
    Node.js project (or create one following the steps below)
Steps to Deploy
#### 1. Create a Node.js Project
If you don’t have a project, follow these steps:

    mkdir vercel-app && cd vercel-app
    npm init -y

#### 2. Install Express.js
    npm install express

#### 3. Create an `index.js` file


#### 4. Add a .gitignore file to exclude node_modules:

#### 5. Configure Vercel
Create a vercel.json file in the root of your project:

    {
    "version": 2,
    "builds": [
        {
        "src": "index.js",
        "use": "@vercel/node"
        }
    ],
    "routes": [
        {
        "src": "/(.*)",
        "dest": "index.js"
        }
    ]
    }
#### 6. Push to GitHub
Initialize a Git repository and push the code:

    git init
    git add .
    git commit -m "Initial commit"

Replace <your-github-repo-url> with your repository URL

    git remote add origin <your-github-repo-url>
    git branch -M main
    git push -u origin main

#### 7. Deploy to Vercel
Log in to your Vercel account and navigate to the dashboard.

    Click “New Project” and import your GitHub repository.
    Configure settings if necessary (default settings should work).
    Click “Deploy.”
Once the deployment is complete, you’ll get a live link to your application.

Conclusion
Congratulations! Your Node.js backend is now live on Vercel, leveraging serverless functions for scalability and ease of use.

Happy Coding!