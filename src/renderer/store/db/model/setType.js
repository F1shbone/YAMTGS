import {
  default as squel,
  expr
} from '../squel'
import utils from '../utils'

import DB from '../db'

const TABLENAME = 'SetType'

class SetType {
  constructor (type) {
    // required
    this.id = type.id
    this.name = type.name
    this.display = type.display
  }

  static get (param) {
    param = param || expr

    return new Promise((resolve, reject) => {
      if (param instanceof expr.constructor) {
        let stmt = squel
          .select()
          .from(TABLENAME)
          .where(param)
          .toString()
        let result = DB.Exec(stmt)[0]

        // return result
        if (result) {
          resolve(utils.toObject(result).map(item => new this(item)))
        } else {
          resolve([])
        }
      } else {
        reject(new Error(`Parameter must be of type 'squel.expr()'`))
      }
    })
  }

  static add (type) {
    return new Promise((resolve, reject) => {
      if (type instanceof this) {
        let sql = squel
          .insert()
          .into(TABLENAME)
          .setFields({
            'name': type.name,
            'display': type.display
          })
          .toParam()

        let stmt = DB.databaseHandle.prepare(sql.text)
        stmt.getAsObject(sql.values)
        stmt.free()
        resolve('success')
      } else {
        reject(new Error(`Parameter must be of type '${TABLENAME}'`))
      }
    })
  }
}

export default SetType
