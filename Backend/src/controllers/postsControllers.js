import { getPostModel, createPostModel, updatePostModel, deletePostModel } from '../models/postsModels.js'

export const getPosts = async (req, res) => {
  try {
    const posts = await getPostModel()
    res.status(200).json(posts)
  } catch (error) {
    res.status(500).json({ error: 'Error al procesar la solicitud' })
    console.error('Error=>', error)
  }
}

export const agregarPost = async (req, res) => {
  try {
    const { titulo, url, descripcion } = req.body
    if (!titulo || !url || !descripcion) {
      return res.status(400).json({ error: 'Ingrese todos los datos' })
    }
    const img = url
    const newPost = await createPostModel(titulo, img, descripcion)
    res.status(201).json(newPost)
  } catch (error) {
    res.status(500).json({ error: 'Error al procesar la solicitud' })
    console.error('Error=>', error)
  }
}

export const updatePost = async (req, res) => {
  try {
    const { id } = req.params
    const updateLike = await updatePostModel({ id })

    if (!updateLike) {
      return res.status(404).json({ error: 'Post no encontrado' })
    }
    res.status(201).json(updateLike)
  } catch (error) {
    res.status(500).json({ error: 'Error al procesar la solicitud' })
    console.error('Error=>', error)
  }
}

export const deletePost = async (req, res) => {
  try {
    const { id } = req.params
    const deletePost = await deletePostModel(id)
    if (!deletePost) {
      return res.status(404).json({ error: 'Post no encontrado' })
    }
    res.status(200).json(deletePost)
  } catch (error) {
    res.status(500).json({ error: 'Error al procesar la solicitud' })
    console.error('Error=>', error)
  }
}
