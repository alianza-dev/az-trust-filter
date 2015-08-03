import ngModuleName from './index.js';

ngDescribe({
  name: ngModuleName,
  module: ngModuleName,
  inject: ['$filter', '$sce'],
  tests: function(deps) {
    let trust;
    beforeEach(() => {
      trust = deps.$filter('trust');
    });

    it(`should not blow up when passed nothing`, function() {
      expect(() => trust()).to.not.throw();
    });

    it(`should take the given input and trust it as html by default`, () => {
      sinon.spy(deps.$sce, 'trustAs');
      const value = `<script>alert('hacked!')</script>`;
      const result = trust(value);
      expect(result.$$unwrapTrustedValue()).to.equal(value);
      expect(deps.$sce.trustAs).to.have.been.calledWith('html', value);
    });

    it(`should allow you to specify a different trust type`, () => {
      sinon.spy(deps.$sce, 'trustAs');
      const value = `https://www.example.com`;
      const result = trust(value, 'url');
      expect(result.$$unwrapTrustedValue()).to.equal(value);
      expect(deps.$sce.trustAs).to.have.been.calledWith('url', value);
    });
  }
});
