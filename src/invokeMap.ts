import baseEach from './.internal/baseEach.js';
import invoke from './invoke.js';
import isArrayLike from './isArrayLike.js';

/**
 * 调用path（路径）上的方法处理 collection(集合)中的每个元素，
 * 返回一个数组，包含每次调用方法得到的结果。
 * 任何附加的参数提供给每个被调用的方法。
 * 如果methodName（方法名）是一个函数，每次调用函数时，
 * 内部的 this 指向集合中的每个元素。
 *
 * @since 1.0.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Array|Function|string} path The path of the method to invoke or
 *  the function invoked per iteration.
 * @param {Array} [args] The arguments to invoke each method with.
 * @returns {Array} Returns the array of results.
 * @example
 *
 * invokeMap([[5, 1, 7], [3, 2, 1]], 'sort')
 * // => [[1, 5, 7], [1, 2, 3]]
 *
 * invokeMap([123, 456], String.prototype.split, [''])
 * // => [['1', '2', '3'], ['4', '5', '6']]
 */
function invokeMap(collection, path, args):any [] {
    let index = -1;
    const isFunc = typeof path === 'function';
    const result = isArrayLike(collection) ? new Array(collection.length) : [];

    baseEach(collection, (value) => {
        result[++index] = isFunc ? path.apply(value, args) : invoke(value, path, args);
    });
    return result;
}

export default invokeMap;
