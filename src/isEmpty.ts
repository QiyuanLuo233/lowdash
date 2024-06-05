import getTag from './.internal/getTag.js';
import isArguments from './isArguments.js';
import isArrayLike from './isArrayLike.js';
import isBuffer from './isBuffer.js';
import isPrototype from './.internal/isPrototype.js';
import isTypedArray from './isTypedArray.js';

/** Used to check objects for own properties. */
const hasOwnProperty = Object.prototype.hasOwnProperty;

/**
 * 检查 value 是否为一个空对象，集合，映射或者set。 
 * 判断的依据是除非是有枚举属性的对象，
 * length 大于 0 的 arguments object, array, string 或类jquery选择器。

对象如果被认为为空，那么他们没有自己的可枚举属性的对象。

类数组值，比如arguments对象，array，buffer，string或者类jQuery集合的length 为 0，
被认为是空。类似的，map（映射）和set 的size 为 0，被认为是空。
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is empty, else `false`.
 * @example
 *
 * isEmpty(null)
 * // => true
 *
 * isEmpty(true)
 * // => true
 *
 * isEmpty(1)
 * // => true
 *
 * isEmpty([1, 2, 3])
 * // => false
 *
 * isEmpty('abc')
 * // => false
 *
 * isEmpty({ 'a': 1 })
 * // => false
 */
function isEmpty(value):boolean {
    if (value == null) {
        return true;
    }
    if (
        isArrayLike(value) &&
        (Array.isArray(value) ||
            typeof value === 'string' ||
            typeof value.splice === 'function' ||
            isBuffer(value) ||
            isTypedArray(value) ||
            isArguments(value))
    ) {
        return !value.length;
    }
    const tag = getTag(value);
    if (tag === '[object Map]' || tag === '[object Set]') {
        return !value.size;
    }
    if (isPrototype(value)) {
        return !Object.keys(value).length;
    }
    for (const key in value) {
        if (hasOwnProperty.call(value, key)) {
            return false;
        }
    }
    return true;
}

export default isEmpty;
