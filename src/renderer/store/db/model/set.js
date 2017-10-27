import * as _ from 'lodash'
import {
  default as squel,
  expr
} from '../squel'
import utils from '../utils'

import DB from '../db'
import Border from './setBorder'
import Type from './setType'

const TABLENAME = 'Sets'

class Set {
  constructor (set) {
    _.defaults(set, {
      gathererCode: null,
      magicCardsInfoCode: null,
      block: null,
      onlineOnly: false
    })

    // required
    this.name = set.name
    this.code = set.code
    this.releaseDate = set.releaseDate
    this.border = new Border(set.border)
    this.type = new Type(set.type)
    // optional
    this.gathererCode = set.gathererCode
    this.magicCardsInfoCode = set.magicCardsInfoCode
    this.block = set.block
    this.onlineOnly = (Boolean)(set.onlineOnly)
  }

  static get Border () { return Border }
  static get Type () { return Type }

  static get (param) {
    param = param || expr

    return new Promise((resolve, reject) => {
      if (param instanceof expr.constructor) {
        let stmt = squel
          .select()
          .from(TABLENAME, 'S')
          .field('S.*')
          .fields({
            'B.id': 'border.id',
            'B.name': 'border.name',
            'B.display': 'border.display'
          })
          .fields({
            'T.id': 'type.id',
            'T.name': 'type.name',
            'T.display': 'type.display'
          })
          .join('Border', 'B', 'S.border_id = B.id')
          .join('SetType', 'T', 'S.type_id = T.id')
          .where(param)
          .toString()
        let result = DB.Exec(stmt)[0]

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

  static add (set) {
    return new Promise((resolve, reject) => {
      if (set instanceof this) {
        let sql = squel
          .insert()
          .into(TABLENAME)
          .setFields({
            'name': set.name,
            'code': set.code,
            'releaseDate': set.releaseDate,
            'gathererCode': set.gathererCode,
            'magicCardsInfoCode': set.magicCardsInfoCode,
            'border_id': set.border.id,
            'type_id': set.type.id,
            'block': set.block,
            'onlineOnly': set.onlineOnly ? 1 : 0
          })
          .toParam()

        let stmt = DB.databaseHandle.prepare(sql.text)
        stmt.getAsObject(sql.values)
        stmt.free()
        resolve('success')
      } else {
        reject(new Error(`Data must be of Type 'Set'`))
      }
    })
  }

  static set (sets) {

  }
}

export default Set
