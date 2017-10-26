import * as _ from 'lodash'

function toObject (input) {
  let columns = input.columns
  let rows = input.values
  let output = []

  rows.forEach(row => {
    output.push(_.zipObjectDeep(columns, row))
  })

  return output
}

export default {
  toObject
}
