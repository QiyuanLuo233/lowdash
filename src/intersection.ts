import map from './map.js';
import baseIntersection from './.internal/baseIntersection.js';
import castArrayLikeObject from './.internal/castArrayLikeObject.js';

/**
 * 创建唯一值的数组，这个数组包含所有给定数组都包含的元素，
 * 使用SameValueZero进行相等性比较。（注：可以理解为给定数组的交集）
 *
 * @since 1.0.0
 * @category Array
 * @param {...Array} [arrays] The arrays to inspect.
 * @returns {Array} Returns the new array of intersecting values.
 * @example
 *
 * intersection([2, 1], [2, 3])
 * // => [2]
 */
function intersection(...arrays:any):any [] {
    const mapped = map(arrays, castArrayLikeObject);
    return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped) : [];
}

export default intersection;
