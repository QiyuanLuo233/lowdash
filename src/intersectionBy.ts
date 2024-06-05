import map from './map.js';
import baseIntersection from './.internal/baseIntersection.js';
import castArrayLikeObject from './.internal/castArrayLikeObject.js';
import last from './last.js';

/**
 * 这个方法类似_.intersection，区别是它接受一个 iteratee
 *  调用每一个arrays的每个值以产生一个值，通过产生的值进行了比较。
 * 结果值是从第一数组中选择。iteratee 会传入一个参数：(value)。
 *
 * @since 1.0.0
 * @category Array
 * @param {...Array} [arrays] The arrays to inspect.
 * @param {Function} iteratee The iteratee invoked per element.
 * @returns {Array} Returns the new array of intersecting values.
 * @example
 *
 * intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor)
 * // => [2.1]
 * _.intersectionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
 * // => [{ 'x': 1 }]
 */
function intersectionBy(...arrays):any [] {
    let iteratee = last(arrays);
    const mapped = map(arrays, castArrayLikeObject);

    if (iteratee === last(mapped)) {
        iteratee = undefined;
    } else {
        mapped.pop();
    }
    return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped, iteratee) : [];
}

export default intersectionBy;
