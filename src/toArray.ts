import copyArray from './.internal/copyArray.js';
import getTag from './.internal/getTag.js';
import isArrayLike from './isArrayLike.js';
import isString from './isString.js';
import iteratorToArray from './.internal/iteratorToArray.js';
import mapToArray from './.internal/mapToArray.js';
import setToArray from './.internal/setToArray.js';
import stringToArray from './.internal/stringToArray.js';
import values from './values.js';

/** `Object#toString` result references. */
const mapTag = '[object Map]';
const setTag = '[object Set]';

/** Built-in value references. */
const symIterator = Symbol.iterator;

/**
 * 转换 value 为一个数组。
 *
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {Array} Returns the converted array.
 * @example
 *
 * toArray({ 'a': 1, 'b': 2 })
 * // => [1, 2]
 *
 * toArray('abc')
 * // => ['a', 'b', 'c']
 *
 * toArray(1)
 * // => []
 *
 * toArray(null)
 * // => []
 */
function toArray(value):any [] {
    if (!value) {
        return [];
    }
    if (isArrayLike(value)) {
        return isString(value) ? stringToArray(value) : copyArray(value);
    }
    if (symIterator && value[symIterator]) {
        return iteratorToArray(value[symIterator]());
    }
    const tag = getTag(value);
    const func = tag === mapTag ? mapToArray : tag === setTag ? setToArray : values;

    return func(value);
}

export default toArray;
