describe('leadingZeros filter', function(){
	var leadingZeros;

	beforeEach(module('pkApp'));

	beforeEach(inject(function(_$filter_){
		leadingZeros = _$filter_('leadingZeros');
	}));

	it('should exist', function(){
		expect(leadingZeros).toBeDefined();
	});

	it('should add leading zeros to a number to make it lenght n', function(){
		expect(leadingZeros(10, 4)).toEqual('0010');
	});

	it('should add no zeros if the number is already lenght n or greater', function(){
		expect(leadingZeros(101010, 6)).toEqual('101010');
		expect(leadingZeros('101010', 2)).toEqual('101010');
	});

	it('should not add zeros to NaN values', function(){
		expect(leadingZeros('test', 10)).toEqual('test');
	});

	it('should only accept int as parameter', function(){
		expect(leadingZeros(10, 'test')).toEqual(10);
	})
});