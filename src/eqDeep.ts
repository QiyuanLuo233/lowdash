import baseIsEqual from './.internal/baseIsEqual.js';

/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent.
 *
 * **Note:** 这个方法支持比较 arrays, array buffers, booleans, date objects, 
 * error objects, maps, numbers, Object objects, regexes, sets, strings, symbols, 
 * 以及 typed arrays. Object 对象值比较自身的属性，不包括继承的和可枚举的属性。
 *  不支持函数和DOM节点比较。
 *
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * const object = { 'a': 1 }
 * const other = { 'a': 1 }
 *
 * isEqual(object, other)
 * // => true
 *
 * object === other
 * // => false
 */
function isEqual(value:any, other:any) {
    return baseIsEqual(value, other);
}

export default isEqual;
