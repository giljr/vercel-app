
# Vercel Nodejs App v1 - Installation Guide

We refactored the code to introduce a new entry point (server.js). The application is monitored using a watcher, and we use Postman to test and send requests to our API endpoints. Additionally, we created an array to simulate a database.

When testing on Vercel, the application did not work because the .env file was excluded from production. We have resolved this issue.

Dez, 2024