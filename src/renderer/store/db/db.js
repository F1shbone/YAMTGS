/* globals __static */

import fs from 'fs'
import path from 'path'

import SQL from 'sql.js'

class DB {
  constructor (databaseFileName) {
    this.schemaPath = path.join(__static, 'schema')
    this.databaseHandle = null
    this.databaseFileName = databaseFileName
  }

  Create (databaseFileName) {
    let self = this

    let sqlstr = ''
    let files = fs.readdirSync(self.schemaPath)
    self.databaseHandle = new SQL.Database()

    files.forEach((filename) => {
      sqlstr += '\n' + fs.readFileSync(path.join(self.schemaPath, filename), 'utf-8')
    })

    self.databaseHandle.run(sqlstr)
    self.Close()
  }

  Open () {
    let self = this

    fs.stat(self.databaseFileName, (err, stats) => {
      if (err) {
        self.Create(self.databaseFileName)
      }
      try {
        self.databaseHandle = new SQL.Database(fs.readFileSync(self.databaseFileName))
      } catch (error) {
        throw new Error(`Can't open database (${self.databaseFileName}) file`, error)
      }
    })
  }

  Save () {
    let self = this
    try {
      let data = self.databaseHandle.export()
      let buffer = Buffer.from(data)
      fs.writeFileSync(self.databaseFileName, buffer)
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
}

export default DB
