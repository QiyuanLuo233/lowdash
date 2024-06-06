import map from './map.js';
import baseAt from './.internal/baseAt.js';
import basePullAt from './.internal/basePullAt.js';
import compareAscending from './.internal/compareAscending.js';
import isIndex from './.internal/isIndex.js';

/**
 * 根据索引 indexes，移除array中对应的元素，并返回被移除元素的数组。
 *
 * **Note:** 和_.at不同, 这个方法会改变数组 array。
 *
 * @since 1.0.0
 * @category Array
 * @param {Array} array The array to modify.
 * @param {...(number|number[])} [indexes] The indexes of elements to remove.
 * @returns {Array} Returns the new array of removed elements.
 * @see pull, pullAll, pullAllBy, pullAllWith, remove, reject
 * @example
 *
 * const array = ['a', 'b', 'c', 'd']
 * const pulled = pullAt(array, [1, 3])
 *
 * console.log(array)
 * // => ['a', 'c']
 *
 * console.log(pulled)
 * // => ['b', 'd']
 */
function pullAt(array:any [], ...indexes):any [] {
    const length = array == null ? 0 : array.length;
    const result = baseAt(array, indexes);

    basePullAt(
        array,
        map(indexes, (index) => (isIndex(index, length) ? +index : index)).sort(compareAscending),
    );
    return result;
}

export default pullAt;
