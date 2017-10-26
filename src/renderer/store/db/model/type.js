import {
  default as squel,
  expr
} from '../squel'
import utils from '../utils'

import DB from '../db'

const TABLENAME = 'Type'

class Type {
  constructor (type) {
    // required
    this.id = type.id
    this.name = type.name
    this.display = type.display
  }

  static get (param) {
    param = param || expr
    if (param instanceof expr.constructor) {
      let stmt = squel
        .select()
        .from(TABLENAME)
        .where(param)
        .toString()
      let result = DB.Exec(stmt)[0]

      // return result
      if (result) {
        return utils.toObject(result).map(item => new this(item))
      } else {
        return []
      }
    } else {
      throw new Error(`Parameter must be of type 'squel.expr()'`)
    }
  }

  static add (type) {
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
    } else {
      throw new Error(`Parameter must be of type 'Type'`)
    }
  }
}

export default Type