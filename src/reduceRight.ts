import arrayReduceRight from './.internal/arrayReduceRight.js';
import baseEachRight from './.internal/baseEachRight.js';
import baseReduce from './.internal/baseReduce.js';

/**
 * 这个方法类似_.reduce ，除了它是从右到左遍历collection（集合）中的元素的。
 *
 * @since 1.0.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @returns {*} Returns the accumulated value.
 * @see reduce
 * @example
 *
 * const array = [[0, 1], [2, 3], [4, 5]]
 *
 * reduceRight(array, (flattened, other) => flattened.concat(other), [])
 * // => [4, 5, 2, 3, 0, 1]
 */
function reduceRight(collection, iteratee, accumulator) {
    const func = Array.isArray(collection) ? arrayReduceRight : baseReduce;
    const initAccum = arguments.length < 3;
    return func(collection, iteratee, accumulator, initAccum, baseEachRight);
}

export default reduceRight;
