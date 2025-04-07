import pool from '../../db/config.js'

export const getPostModel = async () => {
  const sqlQuery = 'SELECT * FROM posts'
  const response = await pool.query(sqlQuery)
  return response.rows
}

export const createPostModel = async (titulo, img, descripcion) => {
  const consulta = 'INSERT INTO posts (titulo, img, descripcion) VALUES ($1, $2, $3) RETURNING *'
  const values = [titulo, img, descripcion]
  const result = await pool.query(consulta, values)
  return result.rows[0]
}
// PUT
export const updatePostModel = async ({ id }) => {
  const sqlQuery = {
    text: 'UPDATE posts SET likes = likes + 1 WHERE id = $1 RETURNING *',
    values: [(id)]
  }
  const response = await pool.query(sqlQuery)
  return response.rows[0]
}
// DELETE
export const deletePostModel = async (id) => {
  const consulta = 'DELETE FROM posts WHERE id = $1'

  const values = [id]
  const result = await pool.query(consulta, values)
  return result.rows[0]
}
