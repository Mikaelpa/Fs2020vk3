const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')

app.use(cors())
app.use(bodyParser.json())
morgan.token('body', function (req, res) { return JSON.stringify(req.body) });
app.use(morgan(':method :url :status :response-time ms - :res[content-length] :body'));

//app.use(morgan('tiny'))


let people = [
          { 
            "name": "Arto Hellas", 
            "number": "040-123456",
            "id": 1
          },
          { 
            "name": "Ada Lovelace", 
            "number": "39-44-5323523",
            "id": 2
          },
          { 
            "name": "Dan Abramov", 
            "number": "12-43-234345",
            "id": 3
          },
          { 
            "name": "Mary Poppendieck", 
            "number": "39-23-6423122",
            "id": 4
          }
]

app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = people.find(person => person.id === id)

    if (person) {
        response.json(person)
    } else {
        response.status(404).end()
    }
})

app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    people = people.filter(person => person.id !== id)

    response.status(204).end()
});

app.post('/api/persons', (request, response) => {
    
    const body = request.body
    console.log(body)

    if (body.name === undefined) {
        return response.status(400).json({
            error: 'name missing'
        })
    } else if (body.number === undefined) {
        return response.status(400).json({
            error: 'number missing'
        })
    }
    const per = people.find(pe => pe.name === body.name)
    if (per) {
        return response.status(400).json({
            error: 'name must be unique'
        })

    }


    const person = {
        id: Math.floor(Math.random() * Math.floor(999999)),
        name: body.name,
        number: body.number
    }
    people = people.concat(person)
    response.json(person)
})

app.get('/info', (req, res) => {
    res.send('Phonebook has info for ' + people.length + ' people</br></br>' + Date(Date.now()).toString())
})

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

app.get('/api/persons', (req, res) => {
  res.json(people)
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

