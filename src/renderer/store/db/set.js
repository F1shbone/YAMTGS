import Vue from 'vue'
import * as _ from 'lodash'

import DB from '../../model'

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
    param = _.isArray(param) ? _.join(param, ',') : (param || '*')
    let stmt = `SELECT ${param} FROM ${TABLENAME}`
    let result = DB.Exec(stmt)[0]

    if (!result) {
      return []
    } else {
      if (param === '*') {
        return result.values.map((item) => {
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
        if (result.columns.length === 1) {
          return result.values.map((item) => {
            return item[0]
          })
        } else {
          return result.values
        }
      }
    }
  }
  static add (set) {
    if (set instanceof Set) {
      let stmt = DB.databaseHandle.prepare(`INSERT INTO ${TABLENAME} (name, code, releaseDate, gathererCode, magicCardsInfoCode, border_id, type_id, block, onlineOnly)
        VALUES (
          $name,
          $code,
          $releaseDate,
          $gathererCode,
          $magicCardsInfoCode,
          $border,
          $type,
          $block,
          $onlineOnly
        )`
      )
      stmt.getAsObject({
        '$name': set.name,
        '$code': set.code,
        '$releaseDate': set.releaseDate,
        '$gathererCode': set.gathererCode,
        '$magicCardsInfoCode': set.magicCardsInfoCode,
        '$border': set.border,
        '$type': set.type,
        '$block': set.block,
        '$onlineOnly': set.onlineOnly ? 1 : 0
      })
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
