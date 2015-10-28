var _        = require('lodash');
var expect   = require('chai').expect;
var tinyrick = require('../index');

describe('tiny rick', function () {
  this.timeout(10000);

  it('should come back with text', function () {
    var quote = tinyrick.getSchwifty();
    expect(quote).to.be.a('string');
  });

  it('should come back with 10 million quotes and check a delta to make sure things are random', function () {
    //call getSchwify 10 million times, countBy each quote, then pull off the values of those counts
    var countOfEachQuote = _.values(_.countBy(_.times(10000000, tinyrick.getSchwifty)));
    //find the most common quote, and the least common quote and calculate the diff between them
    var countDiff = _.max(countOfEachQuote) - _.min(countOfEachQuote);
    //expect all quotes to have been retrieved at least once
    expect(tinyrick.getSchwiftyInHere().length).to.equal(countOfEachQuote.length);
    //expect the tolerance to randomness to be within 1000 calls
    expect(countDiff).to.be.at.most(5000);
  });

});