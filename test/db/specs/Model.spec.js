/* globals MODELOPTIONS, describe, it, expect, assert, after */
import fs from 'fs'

import DB from '../../../src/renderer/model.js'

function cleanUp () {
  try {
    DB.Close()
    fs.unlinkSync(MODELOPTIONS.filePath)
  } catch (e) { }
}
after(cleanUp)

describe('Model', () => {
  it('Create', () => {
    DB.Create(MODELOPTIONS)

    assert.doesNotThrow(() => {
      fs.statSync(DB.databaseFilePath)
    })
  })

  it('Open', () => {
    DB.Open(MODELOPTIONS)
      .then(() => {
        assert.isTrue(true)
      })
      .catch(() => {
        assert.isTrue(false)
      })
  })

  it('Save', (done) => {
    let before = fs.statSync(MODELOPTIONS.filePath).birthtime
    before.setMilliseconds(0)

    DB.Open(MODELOPTIONS)
    .then(() => {
      setTimeout(() => {
        DB.Save()
        let after = fs.statSync(MODELOPTIONS.filePath).mtime
        after.setMilliseconds(0)

        assert.isTrue(before < after, 'Birthdate is not different from modification Date')
        done()
      }, 1000)
    })
  })

  it('Close', () => {
    DB.Open(MODELOPTIONS)
      .then(() => {
        assert.doesNotThrow(() => {
          DB.Close()
        })
      })
  })
})
