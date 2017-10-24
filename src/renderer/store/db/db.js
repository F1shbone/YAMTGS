import fs from 'fs'
import path from 'path'

import SQL from 'sql.js'

import Border from './model/border'
import Set from './model/set'

class Model {
  constructor () {
    this.databaseHandle = null
    this.databaseFilePath = null

    this.Border = Border
    this.Set = Set
  }

  Create (config) {
    config.schemaPath = path.join(config.schemaPath, 'schema')

    let self = this
    let schemaString = ''
    let files = fs.readdirSync(config.schemaPath)

    self.databaseHandle = new SQL.Database()
    self.databaseFilePath = config.filePath

    files.forEach((filename) => {
      schemaString += '\n' + fs.readFileSync(path.join(config.schemaPath, filename), 'utf-8')
    })

    self.databaseHandle.run(schemaString)
    self.Close()
  }

  Open (config) {
    let self = this

    return new Promise((resolve, reject) => {
      fs.stat(config.filePath, (err, stats) => {
        if (err) {
          self.Create(config)
        }
        try {
          self.databaseFilePath = config.filePath
          self.databaseHandle = new SQL.Database(fs.readFileSync(self.databaseFilePath))
          resolve()
        } catch (error) {
          reject(new Error(`Can't open database (${self.databaseFileName}) file`, error))
        }
      })
    })
  }

  Save () {
    let self = this
    try {
      let data = self.databaseHandle.export()
      let buffer = Buffer.from(data)
      fs.writeFileSync(self.databaseFilePath, buffer)
    } catch (error) {
      throw new Error(`Can't save database file.`, error)
    }
  }

  Close () {
    let self = this
    try {
      self.Save()
      self.databaseHandle.close()
    } catch (error) {
      throw new Error(`Can't close database file.`, error)
    }
  }

  Exec (stmt) {
    return this.databaseHandle.exec(stmt)
  }

  Prepare (stmt) {
    return this.databaseHandle.prepare(stmt)
  }
}

export default new Model()
