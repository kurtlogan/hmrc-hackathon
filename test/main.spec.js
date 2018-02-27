var chai = require('chai');
var expect = chai.expect;
var root = require('window-or-global');

beforeEach(() => {
  root.webgazer = {};
});

describe('Main', () => {
  it('should throw error when webgazer is not installed', () => {
    root.webgazer = undefined;
    expect(() => require('../src/main')).to.throw(Error, "webgazer not found!")
  });

  it("should not throw an error when webgazer is installed", () => {
    require('../src/main');
  });
});
