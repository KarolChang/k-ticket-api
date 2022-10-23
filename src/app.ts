import express from 'express'
import { createConnection } from 'typeorm'
import { User } from './entity/User'
import * as dotenv from 'dotenv'
dotenv.config()

async function startApp() {
  const app = express()
  await createConnection()

  console.log('Step1: DB Success Connection......')

  app.get('/', (req: any, res: any) => {
    res.send('This is Index of K-Ticket')
  })

  const PORT = process.env.PORT
  app.listen(PORT, () => {
    console.log(`App is listening on http://localhost:${PORT}`)
  })
}

startApp()
