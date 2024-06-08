import baseUniq from './.internal/baseUniq.js';

/**
 * 这个方法类似_.uniq， 除了它接受一个 comparator
 *  调用比较arrays数组的每一个元素。 comparator 调用时会传入2个参数： (arrVal, othVal)。
 *
 * @since 1.0.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new duplicate free array.
 * @see uniq, uniqBy
 * @example
 *
 * const objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 2 }]
 *
 * uniqWith(objects, isEqual)
 * // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]
 */
function uniqWith(array:any [], comparator):any [] {
    comparator = typeof comparator === 'function' ? comparator : undefined;
    return array != null && array.length ? baseUniq(array, undefined, comparator) : [];
}

export default uniqWith;
