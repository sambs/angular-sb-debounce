
describe('debounce service', function () {
  var debounce, $timeout, obj;

  beforeEach(module('sbDebounce'));

  beforeEach(inject(function($injector) {
    debounce = $injector.get('sbDebounce');
    $timeout = $injector.get('$timeout');
  }));

  it('should be a function', function() {
    expect(typeof debounce).toBe('function');
  });

  describe('trailing invocation (default)', function () {

    beforeEach(inject(function($injector) {
      obj = { func: function () {}};
      spyOn(obj, 'func');
      obj.wrapped = debounce(obj.func, 10);
    }));

    it('should work', function() {
      obj.wrapped(1);
      $timeout.flush(6);
      obj.wrapped(2);
      $timeout.flush(7);
      obj.wrapped(3);
      $timeout.flush(15);

      expect(obj.func).toHaveBeenCalledWith(3);
      expect(obj.func.calls.length).toEqual(1);
    });
  });

  describe('leading invocation', function () {

    beforeEach(inject(function($injector) {
      obj = { func: function () {}};
      spyOn(obj, 'func');
      obj.wrapped = debounce(obj.func, 10, true);
    }));

    it('should work', function() {
      obj.wrapped(1);
      $timeout.flush(6);
      obj.wrapped(2);
      $timeout.flush(7);
      obj.wrapped(3);
      $timeout.flush(15);

      expect(obj.func).toHaveBeenCalledWith(1);
      expect(obj.func.calls.length).toEqual(1);
    });
  });
});
