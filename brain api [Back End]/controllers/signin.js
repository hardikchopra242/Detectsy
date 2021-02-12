const handleSignin = (req,res,db,bcrypt) => {
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

}

module.exports = {
	handleSignin
};