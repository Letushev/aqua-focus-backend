import 'dotenv/config'

import express from 'express'
import { initDB } from '@/db/init.js'
import { env } from '@/env.js'

const app = express()
const port = env.PORT

await initDB()

app.get('/', (req, res) => {
  res.send('Hello World!')
  console.log('Response sent')
})

app.listen(port, () => {
  console.log(`Running on http://localhost:${port}`)
})
