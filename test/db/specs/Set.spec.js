/* globals MODELOPTIONS, describe, it, expect, assert */
import DB from '../../../src/renderer/model.js'
import Set from '../../../src/renderer/store/db/set.js'

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
    DB.Open(MODELOPTIONS).then(() => {
      let dataset = DB.Set.get()

      expect(dataset.length).to.equal(0)
    })
  })

  it('Add', () => {
    DB.Open(MODELOPTIONS).then(() => {
      let set = new Set({
        name: 'Testset',
        code: 'Testi',
        releaseDate: '10-22-2017',
        border: 'black',
        type: 'expansion'
      })

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

  it('Set', () => {
    assert.isTrue(false, 'TODO')
  })
})
