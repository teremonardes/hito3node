import { Router } from 'express'
import { getPosts, agregarPost } from '../src/controllers/postsControllers.js'

const router = Router()

router.get('/posts', getPosts)
router.post('/posts', agregarPost)

export default router
