import getTag from './.internal/getTag.js';
import isArrayLike from './isArrayLike.js';
import isString from './isString.js';
import stringSize from './.internal/stringSize.js';

/** `Object#toString` result references. */
const mapTag = '[object Map]';
const setTag = '[object Set]';

/**
 * 返回collection（集合）的长度，如果集合是类数组或字符串，
 * 返回其 length ；如果集合是对象，返回其可枚举属性的个数。
 *
 * @since 1.0.0
 * @category Collection
 * @param {Array|Object|string} collection The collection to inspect.
 * @returns {number} Returns the collection size.
 * @example
 *
 * size([1, 2, 3])
 * // => 3
 *
 * size({ 'a': 1, 'b': 2 })
 * // => 2
 *
 * size('pebbles')
 * // => 7
 */
function size(collection):number {
    if (collection == null) {
        return 0;
    }
    if (isArrayLike(collection)) {
        return isString(collection) ? stringSize(collection) : collection.length;
    }
    const tag = getTag(collection);
    if (tag === mapTag || tag === setTag) {
        return collection.size;
    }
    return Object.keys(collection).length;
}

export default size;
