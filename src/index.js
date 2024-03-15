const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv').config()

const {
  handleCreateData,
  handleReadData,
  handleReadDataById,
  handleUpdateData,
  handleDeleteData
} = require('./controller')

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())

app.get('/healthcheck', (_, res) => {
  res.status(200).send('OK')
})

app.post('/products', handleCreateData)

app.get('/products', handleReadData)

app.get('/products/:id', handleReadDataById)

app.put('/products/:id', handleUpdateData)

app.delete('/products/:id', handleDeleteData)

app.listen(PORT, () => {
  console.log(`Successfully running at http://localhost:${PORT}`)
})