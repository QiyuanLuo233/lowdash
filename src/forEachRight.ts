import arrayEachRight from './.internal/arrayEachRight.js';
import baseEachRight from './.internal/baseEachRight.js';

/**
 * 这个方法类似_.forEach，不同之处在于，_.forEachRight 
 * 是从右到左遍历集合中每一个元素的。
 *
 * @since 1.0.0
 * @alias eachRight
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 * @see forEach, forIn, forInRight, forOwn, forOwnRight
 * @example
 *
 * forEachRight([1, 2], value => console.log(value))
 * // => Logs `2` then `1`.
 */
function forEachRight(collection, iteratee) {
    const func = Array.isArray(collection) ? arrayEachRight : baseEachRight;
    return func(collection, iteratee);
}

export default forEachRight;
