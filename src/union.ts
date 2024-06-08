import baseFlatten from './.internal/baseFlatten.js';
import baseUniq from './.internal/baseUniq.js';
import isArrayLikeObject from './isArrayLikeObject.js';

/**
 * 创建一个按顺序排列的唯一值的数组。所有给定数组的元素值使用SameValueZero做等值比较。
 * （注： arrays（数组）的并集，按顺序返回，返回数组的元素是唯一的）
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 *
 *
 * @since 1.0.0
 * @category Array
 * @param {...Array} [arrays] The arrays to inspect.
 * @returns {Array} Returns the new array of combined values.
 * @see difference, unionBy, unionWith, without, xor, xorBy
 * @example
 *
 * union([2, 3], [1, 2])
 * // => [2, 3, 1]
 */
function union(...arrays: any[]):any [] {
    return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true));
}

export default union;
