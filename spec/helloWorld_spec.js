describe("helloWorld", function() {
	it("should return hello world", function() {
		expect(helloWorld()).toEqual('Hello World');
	});


});

describe("helloAnyone", function() {
	it("should return hello and any value", function() {
	  expect(helloAnyone('Jeffrey')).toEqual('Hello Jeffrey');
	  expect(helloAnyone('John')).toEqual('Hello John');
	});
});