import baseXor from './.internal/baseXor.js';
import isArrayLikeObject from './isArrayLikeObject.js';
import last from './last.js';

/**
 * 这个方法类似_.xor ，除了它接受 iteratee（迭代器），这个迭代器 
 * 调用每一个 arrays（数组）的每一个值，以生成比较的新值。
 * iteratee 调用一个参数：(value).
 *
 * @since 1.0.0
 * @category Array
 * @param {...Array} [arrays] The arrays to inspect.
 * @param {Function} iteratee The iteratee invoked per element.
 * @returns {Array} Returns the new array of filtered values.
 * @see difference, union, unionBy, unionWith, without, xor, xorWith
 * @example
 *
 * xorBy([2.1, 1.2], [2.3, 3.4], Math.floor)
 * // => [1.2, 3.4]
 */
function xorBy(...arrays):any [] {
    let iteratee = last(arrays);
    if (isArrayLikeObject(iteratee)) {
        iteratee = undefined;
    }
    return baseXor(arrays.filter(isArrayLikeObject), iteratee);
}

export default xorBy;
