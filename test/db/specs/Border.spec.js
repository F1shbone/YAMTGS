/* globals MODELOPTIONS, describe, it, expect, assert */
import DB from '../../../src/renderer/store/db/db'
import Border from '../../../src/renderer/store/db/model/border'

describe('Border', () => {
  it('Constructor', () => {
    let expected = {
      id: 123,
      name: 'testi',
      display: 'test'
    }
    let border = new Border(expected)

    expect(border).to.deep.equal(expected)
  })

  it('Get', () => {
    return DB.Open(MODELOPTIONS)
      .then(() => {
        let result = DB.Border.get()

        expect(result.length).to.equal(3)
      })
  })

  it('Get fail', () => {
    return DB.Open(MODELOPTIONS)
      .then(() => {
        assert.throws(() => {
          Border.get({
            name: 'black'
          })
        })
      })
  })

  it('Add', () => {
    return DB.Open(MODELOPTIONS)
      .then(() => {
        DB.Border.add(new Border({
          name: 'orange',
          display: 'Orange'
        }))
        let result = DB.Border.get()

        expect(result.length).to.equal(4)
        expect(result[3]).to.deep.equal({
          id: 4,
          name: 'orange',
          display: 'Orange'
        })
      })
  })

  it('Add fail', () => {
    return DB.Open(MODELOPTIONS)
      .then(() => {
        assert.throws(() => {
          DB.Border.add({
            name: 'orange',
            display: 'Orange'
          })
        })
      })
  })
})
