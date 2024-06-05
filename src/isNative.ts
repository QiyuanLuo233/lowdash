import isObject from './isObject.js';

/**
 * **Note:** 这种方法不能可靠地检测在core-js包中存在的本地函数，因为 core-js 规避这种检测。尽管有多个请求，core-js 维护者已经明确表态：任何试图修复检测将受阻。这样一来，我们别无选择，只能抛出一个错误。不幸的是，这也影响其他的包，比如依赖于 core-js的babel-polyfill。
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
const reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect if a method is native. */
const reIsNative = RegExp(
    `^${Function.prototype.toString
        .call(Object.prototype.hasOwnProperty)
        .replace(reRegExpChar, '\\$&')
        .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?')}$`,
);

/**
 * 检查 value 是否是一个原生函数。
 *
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 * @example
 *
 * isNative(Array.prototype.push)
 * // => true
 *
 * isNative(isDate)
 * // => false
 */
function isNative(value):boolean {
    return isObject(value) && reIsNative.test(value);
}

export default isNative;
