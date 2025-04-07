import express from 'express'
import cors from 'cors'
import 'dotenv/config'

import postRoutes from './routes/postRoutes.js'

const PORT = process.env.PORT || 3000

const app = express()
app.use(express.json())
app.use(cors())

app.use(postRoutes)
// /api/posts por ejemplo

app.listen(PORT, console.log(`🔥 Server On http://localhost:${PORT}`))
