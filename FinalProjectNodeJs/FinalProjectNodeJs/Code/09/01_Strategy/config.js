import { promises as fs } from 'fs'
import objectPath from 'object-path'

export class Config {
  constructor (formatStrategy) {
    this.data = {}
    this.formatStrategy = formatStrategy
  }

  get (configPath) {
    return objectPath.get(this.data, configPath)
  }

  set (configPath, value) {
    return objectPath.set(this.data, configPath, value)
  }

  addFormat (format) {
    return objectPath.set(format.extension, format)
  }

  async load (filePath) {
    console.log(`Dang load file tu ${filePath}`)
    this.data = this.formatStrategy.deserialize(
      await fs.readFile(filePath, 'utf-8')
    )
    // eslint-disable-next-line quotes
    console.log(`Load File ${filePath} Thanh Cong\n`)
  }

  async save (filePath) {
    console.log(`Dang tai file ve tu ${filePath}`)
    await fs.writeFile(filePath,
      this.formatStrategy.serialize(this.data))
    // eslint-disable-next-line quotes
    console.log(`Load File ${filePath} Thanh Cong\n`)
  }
}
// async readFromMySQL (config) {
//   const { host, user, password, database, table } = config
//   // create MySQL connection
//   // eslint-disable-next-line no-undef
//   const connection = await mysql.createConnection({ host, user, password, database })//   try {
//     // eslint-disable-next-line no-unused-vars
//     const [rows, fields] = await connection.execute(`SELECT * FROM ${table}`)
//     const format = this.formats.get('.json')
//     const data = format.deserialize(rows[0].data)
//     return data
//   } catch (err) {
//     console.error('Error reading config from MySQL:', err)
//   } finally {
//     // close MySQL connection
//     await connection.end()
//   }
// }
// async writeToMySQL (config, data) {
//   const { host, user, password, database, table } = config
//   // create MySQL connection
//   // eslint-disable-next-line no-undef
//   const connection = await mysql.createConnection({ host, user, password, database })
//   try {
//     // serialize config data to JSON
//     const format = this.formats.get('.json')
//     const serializedData = format.serialize(data)
//     // execute SQL query to write config to table
//     // eslint-disable-next-line no-unused-vars
//     const [result, fields] = await connection.execute(`INSERT INTO ${table} (data) VALUES (?)`, [serializedData])
//     console.log(`Config written to MySQL with id ${result.insertId}`)
//   } catch (error) {
//     console.error(error)
//   } finally {
//     // close MySQL connection
//     await connection.end()
//   }
// }
