describe('Capitalize filter', function(){
	var capitalizer;

	beforeEach(module('pkApp'));

	beforeEach(inject(function(_$filter_){
		capitalizer = _$filter_('capitalize');
	}));

	it('should exist', function(){
		expect(capitalizer).toBeDefined();
	});

	it('should make the first letter of a string uppercase', function(){
		expect(capitalizer('test')).toEqual('Test');
	});

	it('should not affect already uppercase letters', function(){
		expect(capitalizer('T')).toEqual('T');
	});

	it('should only affect first letter of a sentence', function(){
		expect(capitalizer('test test')).toEqual('Test test');
	});

	it('should not affect numbers or symbols', function(){
		expect(capitalizer('100')).toEqual('100');
		expect(capitalizer('#')).toEqual('#');
		expect(capitalizer(' ')).toEqual(' ');
	});
});