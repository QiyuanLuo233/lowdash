import baseFlatten from './.internal/baseFlatten.js';
import baseUniq from './.internal/baseUniq.js';
import isArrayLikeObject from './isArrayLikeObject.js';
import last from './last.js';

/**
 * 这个方法类似_.union ，除了它接受一个 iteratee （迭代函数），
 * 调用每一个数组（array）的每个元素以产生唯一性计算的标准。iteratee 会传入一个参数：(value)。
 *
 * @since 1.0.0
 * @category Array
 * @param {...Array} [arrays] The arrays to inspect.
 * @param {Function} iteratee The iteratee invoked per element.
 * @returns {Array} Returns the new array of combined values.
 * @see difference, union, unionWith, without, xor, xorBy
 * @example
 *
 * unionBy([2.1], [1.2, 2.3], Math.floor)
 * // => [2.1, 1.2]
 */
function unionBy(...arrays:any []):any [] {
    let iteratee = last(arrays);
    if (isArrayLikeObject(iteratee)) {
        iteratee = undefined;
    }
    return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), iteratee);
}

export default unionBy;
