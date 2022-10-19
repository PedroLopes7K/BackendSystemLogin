import { Sequelize } from 'sequelize'

const db = new Sequelize('database-name', 'root', 'passowd (if exist)', {
  host: 'example: localhost',
  dialect: 'example: mysql'
})

export default db
