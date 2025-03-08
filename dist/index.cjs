'use strict';

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var add_1;
var hasRequiredAdd;

function requireAdd () {
	if (hasRequiredAdd) return add_1;
	hasRequiredAdd = 1;
	function add(n1, n2) {
	  let result = n1 + n2;
	  return result;
	}
	add_1 = add;
	return add_1;
}

var sub_1;
var hasRequiredSub;

function requireSub () {
	if (hasRequiredSub) return sub_1;
	hasRequiredSub = 1;
	function sub(n1, n2) {
	  let result = n1 - n2;
	  return result;
	}
	sub_1 = sub;
	return sub_1;
}

var mul;
var hasRequiredMul;

function requireMul () {
	if (hasRequiredMul) return mul;
	hasRequiredMul = 1;
	function multiply(n1, n2) {
	  let result = n1 * n2;
	  return result;
	}
	mul = multiply;
	return mul;
}

var div;
var hasRequiredDiv;

function requireDiv () {
	if (hasRequiredDiv) return div;
	hasRequiredDiv = 1;
	function divide(n1, n2) {
	  let result = n1 / n2;
	  return result;
	}
	div = divide;
	return div;
}

var src;
var hasRequiredSrc;

function requireSrc () {
	if (hasRequiredSrc) return src;
	hasRequiredSrc = 1;
	const add = requireAdd();
	const sub = requireSub();
	const mul = requireMul();
	const div = requireDiv();
	src = { add, sub, mul, div };
	return src;
}

var srcExports = requireSrc();
const index = /*@__PURE__*/getDefaultExportFromCjs(srcExports);

module.exports = index;
