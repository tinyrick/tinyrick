var expect = require('chai').expect;
var tinyrick = require('../index');

describe('tiny rick', function() {
  
  it('should come back with text', function() {
    var quote = tinyrick.getSchwifty();
    expect(quote).to.be.a('string');
  });
  
});