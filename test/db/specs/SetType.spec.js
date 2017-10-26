/* globals MODELOPTIONS, describe, it, expect, assert */
import DB from '../../../src/renderer/store/db/db'
import Type from '../../../src/renderer/store/db/model/setType'

describe('SetType', () => {
  it('Constructor', () => {
    let expected = {
      id: 123,
      name: 'testi',
      display: 'test'
    }
    let type = new Type(expected)

    expect(type).to.deep.equal(expected)
  })

  it('Get', async () => {
    await DB.Open(MODELOPTIONS)
    let result = await DB.Set.Type.get()

    expect(result.length).to.equal(17)
  })

  it('Get fail', async () => {
    await DB.Open(MODELOPTIONS)

    await DB.Set.Type.get({
      name: 'core'
    }).should.be.rejectedWith(Error)
  })

  it('Add', async () => {
    await DB.Open(MODELOPTIONS)

    await DB.Set.Type.add(new Type({
      name: 'orange',
      display: 'Orange'
    }))
    let result = await DB.Set.Type.get()

    expect(result.length).to.equal(18)
    expect(result[17]).to.deep.equal({
      id: 18,
      name: 'orange',
      display: 'Orange'
    })
  })

  it('Add fail', async () => {
    await DB.Open(MODELOPTIONS)

    await DB.Set.Type.add({
      name: 'orange',
      display: 'Orange'
    }).should.be.rejectedWith(Error)
  })
})
