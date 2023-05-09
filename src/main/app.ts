import express from 'express'
// import cors from 'cors'

// import { checkAuth } from "./middleware/authentication"

const app = express()
app.use(express.json())
// app.use(cors())

export default app