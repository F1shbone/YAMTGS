'use strict'

// Set BABEL_ENV to use proper env config
process.env.BABEL_ENV = 'test'

// Enable use of ES6+ on required files
require('babel-register')({
  ignore: /node_modules/
})

// Attach Chai APIs to global scope
const path = require('path')
const chai = require('chai')

chai.use(require('chai-as-promised'))

global.expect = chai.expect
global.assert = chai.assert
global.should = chai.should()
global.MODELOPTIONS = {
  filePath: path.join(__dirname, '..', 'data.db'),
  schemaPath: 'static'
}

// Require all JS files in `./specs` for Mocha to consume
require('./specs/Model.spec.js')
require('./specs/SetBorder.spec.js')
require('./specs/SetType.spec.js')
require('./specs/Set.spec.js')
