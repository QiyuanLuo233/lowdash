import arrayEach from './.internal/arrayEach.js';
import baseEach from './.internal/baseEach.js';

/**
 * 调用 iteratee 遍历 collection(集合) 中的每个元素， iteratee 
 * 调用3个参数： (value, index|key, collection)。 
 * 如果迭代函数（iteratee）显式的返回 false ，迭代会提前退出。
 *
 * **Note:** 与其他"集合"方法一样，类似于数组，
 * 对象的 "length" 属性也会被遍历。想避免这种情况，可以用_.forIn 或者_.forOwn 代替。
 *
 * @since 1.0.0
 * @alias each
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 * @see forEachRight, forIn, forInRight, forOwn, forOwnRight
 * @example
 *
 * forEach([1, 2], value => console.log(value))
 * // => Logs `1` then `2`.
 *
 * forEach({ 'a': 1, 'b': 2 }, (value, key) => console.log(key))
 * // => Logs 'a' then 'b' (iteration order is not guaranteed).
 */
function forEach(collection:any, iteratee:any):any {
    const func = Array.isArray(collection) ? arrayEach : baseEach;
    return func(collection, iteratee);
}

export default forEach;
