import baseXor from './.internal/baseXor.js';
import isArrayLikeObject from './isArrayLikeObject.js';

/**
 * 创建一个给定数组唯一值的数组，使用symmetric difference做等值比较。
 * 返回值的顺序取决于他们数组的出现顺序。
 * [symmetric difference](https://en.wikipedia.org/wiki/Symmetric_difference)
 * 
 *
 * @since 1.0.0
 * @category Array
 * @param {...Array} [arrays] The arrays to inspect.
 * @returns {Array} Returns the new array of filtered values.
 * @see difference, union, unionBy, unionWith, without, xorBy, xorWith
 * @example
 *
 * xor([2, 1], [2, 3])
 * // => [1, 3]
 */
function xor(...arrays):any [] {
    return baseXor(arrays.filter(isArrayLikeObject));
}

export default xor;
