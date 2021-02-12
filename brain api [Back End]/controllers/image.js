const Clarifai  = require ('clarifai')

//You must add your own API key here from Clarifai.
const app = new Clarifai.App({
 apiKey: '6d0a133a98e747279fd3652f1c5e702a'
});

const handleApiCall = (req, res) => {
  app.models
    .predict(Clarifai.FACE_DETECT_MODEL,req.body.input)
    .then(data => {
    	res.json(data);
    })
    .catch(err => res.status(400).json('unable to connect with the API'))
}


const handleImage =  (req,res,db)=>{    					//fot the time being we are using 'image' in place of a url
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
}

module.exports ={
	handleImage,
	handleApiCall
};