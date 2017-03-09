describe('Pokemon factory', function() {
  var Pokemon;

  beforeEach(module('pkApp'));

  beforeEach(inject(function(_Pokemon_) {
    Pokemon = _Pokemon_;
  }));

  it('should exist', function() {
    expect(Pokemon).toBeDefined();
  });

  it('should have an all method', function() {
  	expect(Pokemon.all).toBeDefined();
  })

  it('should have a byName method', function() {
  	expect(Pokemon.byName).toBeDefined();
  })

});