/* globals MODELOPTIONS, describe, it, expect, assert */
import DB from '../../../src/renderer/store/db/db'
import Set from '../../../src/renderer/store/db/model/set'
import Border from '../../../src/renderer/store/db/model/border'
import Type from '../../../src/renderer/store/db/model/type'

describe('Set', () => {
  it('Constructor', () => {
    let data = {
      name: 'Testset',
      code: 'Testi',
      releaseDate: '10-22-2017',
      border: {
        id: 1,
        name: 'black',
        display: 'Black'
      },
      type: {
        id: 1,
        name: 'core',
        display: 'Core'
      }
    }
    let expected = data
    expected.border = new Border({
      id: data.border.id,
      name: data.border.name,
      display: data.border.display
    })
    expected.type = new Type({
      id: data.type.id,
      name: data.type.name,
      display: data.type.display
    })

    let set1 = new Set(data)
    expect(set1).to.deep.equal(expected)

    expected.gathererCode = data.gathererCode = 'Testi'
    expected.magicCardsInfoCode = data.magicCardsInfoCode = 'Test'
    expected.block = data.block = 'Mocha'
    expected.onlineOnly = data.onlineOnly = true

    let set2 = new Set(data)
    expect(set2).to.deep.equal(expected)
  })

  it('Get', async () => {
    await DB.Open(MODELOPTIONS)

    let dataset = DB.Set.get()
    expect(dataset.length).to.equal(0)
  })

  it('Get fail', async () => {
    await DB.Open(MODELOPTIONS)

    assert.throws(() => {
      Set.get({
        name: 'unglued'
      })
    })
  })

  it('Add', async () => {
    let set = new Set({
      name: 'Testset',
      code: 'Testi',
      releaseDate: '10-22-2017',
      border: new Border({
        id: 1,
        name: 'white',
        display: 'White'
      }),
      type: new Type({
        id: 1,
        name: 'core',
        display: 'Core'
      }),
      gathererCode: null,
      magicCardsInfoCode: null,
      block: null,
      onlineOnly: false
    })

    await DB.Open(MODELOPTIONS)

    assert.doesNotThrow(() => {
      DB.Set.add(set)

      let dbSet = DB.Set.get()

      expect(dbSet.length).to.equal(1)
      expect(dbSet[0]).to.deep.equal(set)

      DB.Save()
    })
  })

  it('Add border/type name', async () => {
    let set = new Set({
      name: 'Testset 2',
      code: 'Testi2',
      releaseDate: '10-22-2017',
      gathererCode: null,
      magicCardsInfoCode: null,
      block: null,
      onlineOnly: false
    })

    await DB.Open(MODELOPTIONS)

    assert.doesNotThrow(() => {
      DB.Set.add(set, 'white', 'core')

      let dbSet = DB.Set.get()

      set.border = new Border({
        id: 1,
        name: 'white',
        display: 'White'
      })
      set.type = new Type({
        id: 1,
        name: 'core',
        display: 'Core'
      })

      expect(dbSet.length).to.equal(2)
      expect(dbSet[1]).to.deep.equal(set)

      DB.Save()
    })
  })

  it('Add fail', async () => {
    await DB.Open(MODELOPTIONS)

    assert.throws(() => {
      DB.Set.add({
        name: 'Testset',
        code: 'Testi',
        releaseDate: '10-22-2017',
        border: 'black',
        type: 'expansion'
      })
    })
  })

  // it('Set', () => {
  //   assert.isTrue(false, 'TODO')
  // })
})
