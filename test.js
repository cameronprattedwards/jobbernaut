"use strict";
var requirejs = require("requirejs");
requirejs.config({
    baseUrl: '.',
    nodeRequire: require
});

suite("Jobbernaut", function () {
	setup(function (done) {
		requirejs(["chai"], function (chai) {
			var expect = chai.expect;
			expect(true).to.equal(true);
			done();
		});
	});

	suite("kicker", function () {
		test("kicker", function () {});
	});
});