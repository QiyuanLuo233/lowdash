import baseXor from './.internal/baseXor.js';
import isArrayLikeObject from './isArrayLikeObject.js';
import last from './last.js';

/**
 * 该方法是像_.xor，除了它接受一个 comparator ，
 * 以调用比较数组的元素。 comparator 调用2个参数：(arrVal, othVal).
 *
 * @since 1.0.0
 * @category Array
 * @param {...Array} [arrays] The arrays to inspect.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new array of filtered values.
 * @see difference, union, unionBy, unionWith, without, xor, xorBy
 * @example
 *
 * const objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]
 * const others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }]
 *
 * xorWith(objects, others, isEqual)
 * // => [{ 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
 */
function xorWith(...arrays):any [] {
    let comparator = last(arrays);
    comparator = typeof comparator === 'function' ? comparator : undefined;
    return baseXor(arrays.filter(isArrayLikeObject), undefined, comparator);
}

export default xorWith;
