/* globals MODELOPTIONS, describe, it, expect, assert */
import DB from '../../../src/renderer/store/db/db'
import Border from '../../../src/renderer/store/db/model/setBorder'

describe('SetBorder', () => {
  it('Constructor', () => {
    let expected = {
      id: 123,
      name: 'testi',
      display: 'test'
    }
    let border = new Border(expected)

    expect(border).to.deep.equal(expected)
  })

  it('Get', async () => {
    await DB.Open(MODELOPTIONS)
    let result = await DB.Set.Border.get()

    expect(result.length).to.equal(3)
  })

  it('Get fail', async () => {
    await DB.Open(MODELOPTIONS)

    await DB.Set.Border.get({
      name: 'black'
    }).should.be.rejectedWith(Error)
  })

  it('Add', async () => {
    await DB.Open(MODELOPTIONS)

    await DB.Set.Border.add(new Border({
      name: 'orange',
      display: 'Orange'
    }))
    let result = await DB.Set.Border.get()

    expect(result.length).to.equal(4)
    expect(result[3]).to.deep.equal({
      id: 4,
      name: 'orange',
      display: 'Orange'
    })
  })

  it('Add fail', async () => {
    await DB.Open(MODELOPTIONS)

    await DB.Set.Border.add({
      name: 'orange',
      display: 'Orange'
    }).should.be.rejectedWith(Error)
  })
})
