const handleRegister = (req,res,db,bcrypt) =>{
    const {name, email, password} = req.body;
    if(!email || !name ||  !password){
        return res.status(400).json('incorrect form submission');
    }
       
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

}

module.exports = {
    handleRegister
};