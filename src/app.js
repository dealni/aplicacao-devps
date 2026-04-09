const express = require('express')
const app = express()
const PORT = 3000

const data = {
  integrantes: [
    { nome: 'Kevin Kuznier' },
    { nome: 'Diogo Vieira' }
  ]
}

app.get('/', (req, res) => {
  res.sendFile('views/index.html', { root: __dirname })
})

app.get('/integrantes', (req, res) => {
  res.json(data)
})

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`)
})
