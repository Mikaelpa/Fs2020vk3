
const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const url = process.env.MONGODB_URI


mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(result => {
		console.log('connected to MongoDB')
	})
	.catch((error) => {
		console.log('error connecting to MongoDB:', error.message)
	})

const personSchema = new mongoose.Schema({
	name: {type: String, unique: true, minlength: 3},
	number: {type: String, minlength: 8},
})

personSchema.set('toJSON', {
	transform: (document, returned) => {
		returned.id = returned._id.toString()
		delete returned._id
		delete returned.__v
	}
})

personSchema.plugin(uniqueValidator)

module.exports = mongoose.model('Person', personSchema)