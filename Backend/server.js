// Backend for the App

const express = require("express");
const bcrypt = require("bcrypt-nodejs");   //For password hashing 
const cors = require("cors");  // This will be used set request mode to no-cors
const knex = require("knex");

const register = require("./controllers/register");
const signin = require("./controllers/signin");
const image = require("./controllers/image");
const profile = require("./controllers/profile");
//Knex is a tool for sql building inside the backend
//make a knex onject
const db = knex({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'hardikchopra242',
    password : '123456',
    database : 'smart-brain'
  }
});


const app = express();

//Note: Very Important
app.use(express.json());
app.use(cors());

// Main Route ============================================================================================================
app.get('/', (req,res) => {
	
})

//Sign In Route ============================================================================================================
app.post('/signin', (req, res) => { signin.handleSignin(req, res, db, bcrypt)})


//Register ==================================================================================================================
app.post('/register', (req, res) => { register.handleRegister(req, res, db, bcrypt)})

//User ==================================================================================================================
app.get('/profile/:id',(req, res) => {profile.handleProfileGet(req, res, db)})

//Image ==================================================================================================================
app.put('/image', (req, res) => {image.handleImage(req, res, db)})	

// ==================================================================================================================
app.post('/imageUrl', (req, res) => {image.handleApiCall(req, res)})	

app.listen(process.env.PORT || 3001, () =>{
	console.log(`App is Working fine! on ${process.env.PORT}`);
})



