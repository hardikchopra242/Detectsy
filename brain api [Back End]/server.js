// Backend for the App

const express = require("express");
const bcrypt = require("bcrypt-nodejs");   //For password hashing 
const cors = require("cors");  // This will be used set request mode to no-cors
const knex = require("knex");

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
app.post('/signin', (req,res) => {
	db.select('email', 'hash').from('login')
	 .where('email', '=', req.body.email)
	  .then(data => {
	  	const isValid = bcrypt.compareSync(req.body.password , data[0].hash);

	  	if(isValid){
	  		return db.select('*').from('users')
	  		 .where('email', '=', req.body.email)
	  		  .then(user => {
	  		  	res.json(user[0])
	  		  })
	  		  .catch(err => { res.status(400).json('unable to get the users')})
	  	}else{
	  		
	  		res.status(400).json('wrong credentials')

	  	}
	  })
   // .catch(res.status(420).json('wrong credentials'))
   .catch((err) => res.status(400).json('wrong credentials'))    //this error was resolved because earlier I was not calling a call back funciton rather the error was called every single time.

})


//Register ==================================================================================================================
app.post('/register', (req,res) =>{

    const {name, email, password} = req.body;   
    const hash = bcrypt.hashSync(password);

    //transaction is used to check if all the things dont work correctly then error will occur
    db.transaction(trx =>{
    	trx.insert({
    		hash: hash,
    		email: email
    	})
    	.into('login')
    	.returning('email')
    	.then(loginEmail => {
    		return trx('users')
			.returning('*')
			.insert({
				email : loginEmail[0],
				name : name,
				joined : new Date()
		    })

		   .then(user => {
			res.json(user[0]);
		   })
    	})
    	.then(trx.commit)
    	.catch(trx.rollback)
    }) 
	      .catch(err => res.status(400).json("unable to register"))

})

//User ==================================================================================================================
app.get('/profile/:id',(req,res) => {
	const { id } = req.params;          //params property
	db.select('*').from('users').where({id})
	    .then(user =>{
	    	if(user.length){
	    		res.json(user[0]);
	    	}else{
	    		res.status(400).json('Not Found');
	    	}
	    })
	    .catch(err => res.status(400).json('error getting user'))
})

//Image ==================================================================================================================
app.put('/image', (req,res)=>{    					//fot the time being we are using 'image' in place of a url
	const { id } = req.body;
	db('users').where('id','=', id)
	.increment('entries', 1)
	.returning('entries')
	.then(entries => {
		res.json(entries[0]);
	})
	.catch(err => {
		res.status(400).json('unable to get entries');
	})
})	

// ==================================================================================================================

app.listen(3001, () =>{
	console.log("App is Working!!");
})



