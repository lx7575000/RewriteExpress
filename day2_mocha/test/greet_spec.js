// var expect = require('chai').expect;
var greet = require('greet');

describe('greet', function(){
	it('should greet a person by name', function(){
		expect(greet('liu')).to.be.equal('Hello, liu');
	});
	it('should greet a person flirtatiously if drunk', function(){
		expect(greet('liu', true)).to.equal('Hello liu, you look so sexy today');
	});
});