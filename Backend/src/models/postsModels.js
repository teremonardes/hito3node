import pool from '../../db/config.js'

export const getPostModel = async () => {
  const sqlQuery = 'SELECT * FROM posts'
  const response = await pool.query(sqlQuery)
  return response.rows
}

export const createPostModel = async (titulo, img, descripcion) => {
  const consulta = 'INSERT INTO posts (titulo, img, descripcion) VALUES ($1, $2, $3) RETURNING *'
  try {
    const values = [titulo, img, descripcion]
    const result = await pool.query(consulta, values)
    return result.rows
  } catch (error) {
    console.error(error)
  }
}
