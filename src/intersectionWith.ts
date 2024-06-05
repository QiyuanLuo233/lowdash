import map from './map.js';
import baseIntersection from './.internal/baseIntersection.js';
import castArrayLikeObject from './.internal/castArrayLikeObject.js';
import last from './last.js';

/**
 * 这个方法类似_.intersection，区别是它接受一个 comparator 
 * 调用比较arrays中的元素。结果值是从第一数组中选择。
 * comparator 会传入两个参数：(arrVal, othVal)。
 *
 * @since 1.0.0
 * @category Array
 * @param {...Array} [arrays] The arrays to inspect.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new array of intersecting values.
 * @example
 *
 * const objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]
 * const others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }]
 *
 * intersectionWith(objects, others, isEqual)
 * // => [{ 'x': 1, 'y': 2 }]
 */
function intersectionWith(...arrays):any [] {
    let comparator = last(arrays);
    const mapped = map(arrays, castArrayLikeObject);

    comparator = typeof comparator === 'function' ? comparator : undefined;
    if (comparator) {
        mapped.pop();
    }
    return mapped.length && mapped[0] === arrays[0]
        ? baseIntersection(mapped, undefined, comparator)
        : [];
}

export default intersectionWith;
