import * as _ from 'lodash'

import DB from '../db'
import {
  default as squel,
  expr
} from '../squel'

const SetBorder = {
  BLACK: 1,
  WHITE: 2,
  SILVER: 3
}

const SetType = {
  CORE: 1,
  EXPANSION: 2,
  REPRINT: 3,
  BOX: 4,
  UN: 5,
  FROM_THE_VAULT: 6,
  PREMIUM_DECK: 7,
  DUEL_DECK: 8,
  STARTER: 9,
  COMMANDER: 10,
  PLANECHASE: 11,
  ARCHENEMY: 12,
  PROMO: 13,
  VANGUARD: 14,
  MASTERS: 15,
  CONSPIRACY: 16,
  MASTERPIECE: 17
}

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
    this.border = this.setBorder(set.border_id || set.border)
    this.type = this.setType(set.type_id || set.type)
    // optional
    this.gathererCode = set.gathererCode
    this.magicCardsInfoCode = set.magicCardsInfoCode
    this.block = set.block
    this.onlineOnly = set.onlineOnly
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
          return new Set({
            [result.columns[0]]: item[0],
            [result.columns[1]]: item[1],
            [result.columns[2]]: item[2],
            [result.columns[3]]: item[3],
            [result.columns[4]]: item[4],
            [result.columns[5]]: item[5],
            [result.columns[6]]: item[6],
            [result.columns[7]]: item[7],
            [result.columns[8]]: item[8],
            [result.columns[9]]: (Boolean)(item[9])
          })
        })
      } else {
        return []
      }
    } else {
      throw new Error(`Parameter must be of type 'squel.expr()'`)
    }
  }

  static add (set) {
    if (set instanceof Set) {
      let sql = squel
        .insert()
        .into(TABLENAME)
        .set('name', set.name)
        .set('code', set.code)
        .set('releaseDate', set.releaseDate)
        .set('gathererCode', set.gathererCode)
        .set('magicCardsInfoCode', set.magicCardsInfoCode)
        .set('border_id', set.border)
        .set('type_id', set.type)
        .set('block', set.block)
        .set('onlineOnly', set.onlineOnly ? 1 : 0)
        .toParam()

      let stmt = DB.databaseHandle.prepare(sql.text)
      stmt.getAsObject(sql.values)
      stmt.free()
    } else {
      throw new Error(`Data must be of Type 'Set'`)
    }
  }

  static set (sets) {

  }

  setBorder (border) {
    if (!isNaN(parseInt(border))) {
      return parseInt(border)
    } else {
      return SetBorder[border.toUpperCase()]
    }
  }
  setType (type) {
    if (!isNaN(parseInt(type))) {
      return parseInt(type)
    } else {
      return SetType[type.toUpperCase()]
    }
  }
}

export default Set

export { SetBorder, SetType }
