global.self = global;
const tabris = require('../../build/tabris/');
const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const sandbox = sinon.sandbox.create();
const restore = sandbox.restore.bind(sandbox);
const stub = sandbox.stub.bind(sandbox);
const sinonChai = require('sinon-chai');

chai.use(sinonChai);

describe('CanvasContext', function() {

  let context;

  beforeEach(function() {
    let client = stub({
      call: () => {},
      create: () => {},
      get: () => {},
    });
    tabris._init(client);
    context = new tabris.Canvas().getContext('2d', 200, 200);
  });

  afterEach(restore);

  describe('fillStyle', function() {

    it('has a default value', function() {
      expect(context.fillStyle).to.eql('rgba(0, 0, 0, 1)');
    });

  });

});
