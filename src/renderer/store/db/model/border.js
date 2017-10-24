import * as _ from 'lodash'

import DB from '../db'
import {
  default as squel,
  expr
} from '../squel'

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
        return result.values.map(item => {
          return new Border({
            [result.columns[0]]: item[0],
            [result.columns[1]]: item[1],
            [result.columns[2]]: item[2]
          })
        })
      } else {
        return []
      }
    } else {
      throw new Error(`Parameter must be of type 'squel.expr()'`)
    }
  }

  static add (border) {
    if (border instanceof Border) {
      let sql = squel
        .insert()
        .into(TABLENAME)
        .set('name', border.name)
        .set('display', border.display)
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
