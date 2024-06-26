import baseFindIndex from './.internal/baseFindIndex.js';
import toInteger from './toInteger.js';

/**
 * 这个方式类似_.findIndex， 区别是它是从右到左的迭代集合array中的元素。
 *
 * @since 1.0.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} [fromIndex=array.length-1] The index to search from.
 * @returns {number} Returns the index of the found element, else `-1`.
 * @see find, findIndex, findKey, findLast, findLastKey
 * @example
 *
 * const users = [
 *   { 'user': 'barney',  'active': true },
 *   { 'user': 'fred',    'active': false },
 *   { 'user': 'pebbles', 'active': false }
 * ]
 *
 * findLastIndex(users, ({ user }) => user === 'pebbles')
 * // => 2
 */
function findLastIndex(array:any [], predicate:any, fromIndex:number) {
    const length = array == null ? 0 : array.length;
    if (!length) {
        return -1;
    }
    let index = length - 1;
    if (fromIndex !== undefined) {
        index = toInteger(fromIndex);
        index = fromIndex < 0 ? Math.max(length + index, 0) : Math.min(index, length - 1);
    }
    return baseFindIndex(array, predicate, index, true);
}

export default findLastIndex;
