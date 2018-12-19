# BROUNIE TEST - ALDO RIVERA

## Installation

To install the project you will need this technologies.

- Node JS
```bash
 Download and install node: https://nodejs.org/es/
```
- Express JS
```bash
 npm install express --save
```
When you have both technologies you need to install all the dependencies (Inside of the project folder).
```bash
 npm install
```
## Running the project
Inside of the project folder you need to run this command and open your browser and set localhost:3000.
```bash
 npm start
```
If you have nodemon installed you can run it with this command and then have to set localhost:3000 in your browser.
```bash
 modemon apps.js
```
## Architecture
I decided to use a MVC architecture because allows me to improve my devolpe time and if the customer wants to change something, will be easier and i will not spend a lot of time mapping the code to fix or change an specific feature.

With this architecture every route file is smaller and cleaner.

The model folder has all the data-base/api backend so we the code separate  between front-end and back-end.

## Desing
I implemented a minimalist design because will be cleaner and easy to identify all the features and main areas.

## Dependencies
Inside  package.json file  we are going to find this:
```json
{
  "name": "brounietest",
  "version": "0.0.0",
  "private": true,
  "scripts": {
    "start": "node ./bin/www"
  },
  "dependencies": {
    "cookie-parser": "~1.4.3",
    "debug": "~2.6.9",
    "express": "~4.16.0",
    "express-session": "^1.15.6",
    "firebase": "^5.5.4",
    "http-errors": "~1.6.2",
    "morgan": "~1.9.0",
    "newsapi": "^2.4.0",
    "pug": "2.0.0-beta11"
  }
}

```
I added  firebase and newsapi to make the connection between this technologies.


## Extra Functionality
- Login with Google: I decided to use google because FIREBASE makes easier this integration, and with this type of login we can combine login and sing in in a button improving UI/UX 

- Middleware: This is an structure to verify if the current user has or not an account logged, with this structure we can define easier different user types.

- Delete (News and Source): You can delete your favorites news or sources.

- Vue JS implementation: This technology improve UX because does not require to reload o refresh the current page to update some datas. Vue has been implemented in home view.


## License
[Brounie](https://brounie.com/) | We Make Apps.