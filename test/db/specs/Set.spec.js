/* globals MODELOPTIONS, describe, it, expect, assert */
import DB from '../../../src/renderer/store/db/db'
import Set from '../../../src/renderer/store/db/model/set'
import Border from '../../../src/renderer/store/db/model/setBorder'
import Type from '../../../src/renderer/store/db/model/setType'

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

    let dataset = await DB.Set.get()
    expect(dataset.length).to.equal(0)
  })

  it('Get fail', async () => {
    await DB.Open(MODELOPTIONS)

    await DB.Set.get({
      name: 'unglued'
    }).should.be.rejectedWith(Error)
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
    await DB.Set.add(set)

    let dbSet = await DB.Set.get()

    expect(dbSet.length).to.equal(1)
    expect(dbSet[0]).to.deep.equal(set)

    DB.Save()
  })

  it('Add fail', async () => {
    await DB.Open(MODELOPTIONS)

    await DB.Set.add({
      name: 'Testset',
      code: 'Testi',
      releaseDate: '10-22-2017',
      border: 'black',
      type: 'expansion'
    }).should.be.rejectedWith(Error)
  })

  // it('Set', () => {
  //   assert.isTrue(false, 'TODO')
  // })
})
