const mongoose = require('mongoose')

if ( process.argv.length<3 ) {
	console.log('give password as argument')
	process.exit(1)
}

const password = process.argv[2]

const url =
  `mongodb+srv://fullstack:${password}@cluster0-zidni.mongodb.net/test?retryWrites=true`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })

const personSchema = new mongoose.Schema({
	name: String,
	number: String
})

const Person = mongoose.model('Person', personSchema)

if (process.argv.length === 3) {
	Person.find({}).then(res => {
		console.log('phonebook:')
		res.forEach(person => {
			console.log(person.name, person.number)
		})
		mongoose.connection.close()
	})
} else {
	const name = process.argv[3]
	const number = process.argv[4]

	const contact = new Person({
		name: name,
		number: number
	})

	contact.save().then(response => {
		console.log(`added ${process.argv[3]} number ${process.argv[4]} to phonebook`)
		mongoose.connection.close()
	})

}
