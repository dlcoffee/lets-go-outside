const path = require('path')
const fs = require('fs')

const getAvailable = require('./getAvailable')

const json = JSON.parse(fs.readFileSync(path.join(__dirname, 'data.json')))

describe('getAvailable', () => {
  it('just works', () => {
    const available = getAvailable(json.campsites)
    expect(available.length).toEqual(4)
  })
})
