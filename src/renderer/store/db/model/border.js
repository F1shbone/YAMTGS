import {
  default as squel,
  expr
} from '../squel'
import utils from '../utils'

import DB from '../db'

const TABLENAME = 'Border'

class Border {
  constructor (border) {
    // required
    this.id = border.id
    this.name = border.name
    this.display = border.display
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

  static add (border) {
    if (border instanceof this) {
      let sql = squel
        .insert()
        .into(TABLENAME)
        .setFields({
          'name': border.name,
          'display': border.display
        })
        .toParam()

      let stmt = DB.databaseHandle.prepare(sql.text)
      stmt.getAsObject(sql.values)
      stmt.free()
    } else {
      throw new Error(`Parameter must be of type 'Border'`)
    }
  }
}

export default Border
