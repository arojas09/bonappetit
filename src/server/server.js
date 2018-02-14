const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.json({ hello: 'World' })
})

app.get('/users/:id', (req, res) => {
  const users = {
    14: 'Francisco',
    15: 'Jose',
    16: 'Maria'
  }
  res.json({ name: users[req.params.id] })
})

/*
app.get('/anthony', (req, res) => {  
  res.json({ name: 'Anthony Rojas Alfaro'})
})*/

app.get('/companies', (req, res) => {
  // parametros query. Ejemplo /companies?hola=true
  res.json({ name: req.query.name })
})

app.get('/anthony/:apellido1/:apellido2', (req, res) => {
  // parametros query. Ejemplo /companies?hola=true
  res.json({ name: 'Anthony', apelido1: req.params.apellido1, apelido2: req.params.apellido2  })
})

app.listen(3005, () => {
  console.log('Server running on port 3005')
})