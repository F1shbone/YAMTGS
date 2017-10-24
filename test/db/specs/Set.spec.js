/* globals MODELOPTIONS, describe, it, expect, assert */
import DB from '../../../src/renderer/store/db/db'
import Set from '../../../src/renderer/store/db/model/set'

describe('Set', () => {
  it('Constructor', () => {
    let set1 = new Set({
      name: 'Testset',
      code: 'Testi',
      releaseDate: '10-22-2017',
      border: 'black',
      type: 'expansion'
    })
    expect(set1).to.deep.equal({
      name: 'Testset',
      code: 'Testi',
      releaseDate: '10-22-2017',
      border: 1,
      type: 2,
      gathererCode: null,
      magicCardsInfoCode: null,
      block: null,
      onlineOnly: false
    })

    let set2 = new Set({
      name: 'Testset',
      code: 'Testi',
      releaseDate: '10-22-2017',
      border: 'black',
      type: 'expansion',
      gathererCode: 'Testi',
      magicCardsInfoCode: 'Test',
      block: 'Mocha',
      onlineOnly: true
    })
    expect(set2).to.deep.equal({
      name: 'Testset',
      code: 'Testi',
      releaseDate: '10-22-2017',
      border: 1,
      type: 2,
      gathererCode: 'Testi',
      magicCardsInfoCode: 'Test',
      block: 'Mocha',
      onlineOnly: true
    })
  })

  it('Get', () => {
    return DB.Open(MODELOPTIONS)
      .then(() => {
        let dataset = DB.Set.get()

        expect(dataset.length).to.equal(0)
      })
  })

  it('Get fail', () => {
    return DB.Open(MODELOPTIONS)
      .then(() => {
        assert.throws(() => {
          Set.get({
            name: 'unglued'
          })
        })
      })
  })

  it('Add', () => {
    let set = new Set({
      name: 'Testset',
      code: 'Testi',
      releaseDate: '10-22-2017',
      border: 'black',
      type: 'expansion'
    })

    return DB.Open(MODELOPTIONS)
      .then(() => {
        assert.doesNotThrow(() => {
          DB.Set.add(set)

          let dbSet = DB.Set.get()

          expect(dbSet.length).to.equal(1)
          expect(dbSet[0]).to.deep.equal({
            name: 'Testset',
            code: 'Testi',
            releaseDate: '10-22-2017',
            border: 1,
            type: 2,
            gathererCode: null,
            magicCardsInfoCode: null,
            block: null,
            onlineOnly: false
          })

          DB.Save()
        })
      })
  })

  it('Add fail', () => {
    return DB.Open(MODELOPTIONS)
      .then(() => {
        assert.throws(() => {
          DB.Border.add({
            name: 'Testset',
            code: 'Testi',
            releaseDate: '10-22-2017',
            border: 'black',
            type: 'expansion'
          })
        })
      })
  })

  // it('Set', () => {
  //   assert.isTrue(false, 'TODO')
  // })
})
