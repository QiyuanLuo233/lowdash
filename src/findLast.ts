import findLastIndex from './findLastIndex.js';
import isArrayLike from './isArrayLike.js';

/**
 * 这个方法类似_.find ，不同之处在于，_.findLast是从右至左遍历collection （集合）元素的。
 *
 * @since 1.0.0
 * @category Collection
 * @param {Array|Object} collection The collection to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} [fromIndex=collection.length-1] The index to search from.
 * @returns {*} Returns the matched element, else `undefined`.
 * @see find, findIndex, findKey, findLastIndex, findLastKey
 * @example
 *
 * findLast([1, 2, 3, 4], n => n % 2 === 1)
 * // => 3
 */
function findLast(collection:any, predicate:any, fromIndex:number) {
    let iteratee;
    const iterable = Object(collection);
    if (!isArrayLike(collection)) {
        collection = Object.keys(collection);
        iteratee = predicate;
        predicate = (key) => iteratee(iterable[key], key, iterable);
    }
    const index = findLastIndex(collection, predicate, fromIndex);
    return index > -1 ? iterable[iteratee ? collection[index] : index] : undefined;
}

export default findLast;
