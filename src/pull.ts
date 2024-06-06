import pullAll from './pullAll.js';

/**
 * 移除数组array中所有和给定值相等的元素，使用SameValueZero 进行全等比较。
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * 
 *
 * **Note:** 和_.without 方法不同，这个方法会改变数组。使用_.remove 从一个数组中移除元素
 *
 * @since 1.0.0
 * @category Array
 * @param {Array} array The array to modify.
 * @param {...*} [values] The values to remove.
 * @returns {Array} Returns `array`.
 * @see pullAll, pullAllBy, pullAllWith, pullAt, remove, reject
 * @example
 *
 * const array = ['a', 'b', 'c', 'a', 'b', 'c']
 *
 * pull(array, 'a', 'c')
 * console.log(array)
 * // => ['b', 'b']
 */
function pull(array:any [], ...values):any [] {
    return pullAll(array, values);
}

export default pull;
