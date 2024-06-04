import baseDifference from './.internal/baseDifference.js';
import baseFlatten from './.internal/baseFlatten.js';
import isArrayLikeObject from './isArrayLikeObject.js';
import last from './last.js';

/**
 * 这个方法类似_.difference ，除了它接受一个 comparator （注：比较器），
 * 它调用比较array，values中的元素。 结果值是从第一数组中选择。
 * comparator 调用参数有两个：(arrVal, othVal)。
 *
 * **Note:** 不像_.pullAllWith，这个方法会返回一个新数组。
 *
 * @since 1.0.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {...Array} [values] The values to exclude.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new array of filtered values.
 * @example
 *
 * const objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]
 *
 * differenceWith(objects, [{ 'x': 1, 'y': 2 }], isEqual)
 * // => [{ 'x': 2, 'y': 1 }]
 */
function differenceWith(array:any [], ...values) {
    let comparator = last(values);
    if (isArrayLikeObject(comparator)) {
        comparator = undefined;
    }
    return isArrayLikeObject(array)
        ? baseDifference(
              array,
              baseFlatten(values, 1, isArrayLikeObject, true),
              undefined,
              comparator,
          )
        : [];
}

export default differenceWith;
