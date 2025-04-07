import { Router } from 'express'
import { getPosts, agregarPost, updatePost, deletePost } from '../src/controllers/postsControllers.js'

const router = Router()

router.get('/posts', getPosts)
router.post('/posts', agregarPost)
router.put('/posts/like/:id', updatePost)
router.delete('/posts/:id', deletePost)

export default router
