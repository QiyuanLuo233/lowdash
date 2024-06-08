import baseFlatten from './.internal/baseFlatten.js';
import baseUniq from './.internal/baseUniq.js';
import isArrayLikeObject from './isArrayLikeObject.js';
import last from './last.js';

/**
 * 这个方法类似_.union， 除了它接受一个 comparator 调用比较arrays数组的每一个元素。
 *  comparator 调用时会传入2个参数： (arrVal, othVal)。
 *
 * @since 1.0.0
 * @category Array
 * @param {...Array} [arrays] The arrays to inspect.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new array of combined values.
 * @see difference, union, unionBy, without, xor, xorBy
 * @example
 *
 * const objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]
 * const others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }]
 *
 * unionWith(objects, others, isEqual)
 * // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
 */
function unionWith(...arrays):any [] {
    let comparator = last(arrays);
    comparator = typeof comparator === 'function' ? comparator : undefined;
    return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), undefined, comparator);
}

export default unionWith;
