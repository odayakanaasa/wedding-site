// A custom Nightwatch assertion.
// the name of the method is the filename.
// can be used in tests like this:
//
//   browser.assert.elementCount(selector, count)
//
// for how to write custom assertions see
// http://nightwatchjs.org/guide#writing-custom-assertions
exports.assertion = function (selector, count) {
	this.message = `Testing if element <${selector}> has count: ${count}`
	this.expected = count
	this.pass = (val) => (val === this.expected)
	this.value = (res) => res.value
	this.command = (cb) => this.api.execute(
		(selector) => document.querySelectorAll(selector).length,
		[selector],
		(res) => cb.call(this, res)
	)
}
