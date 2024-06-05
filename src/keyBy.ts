import baseAssignValue from './.internal/baseAssignValue.js';
import reduce from './reduce.js';

/**
 * 创建一个对象组成， key（键） 是 collection（集合）中的每个元素经过
 *  iteratee（迭代函数） 处理后返回的结果。 
 * 每个 key（键）对应的值是生成key（键）的最后一个元素。
 * iteratee（迭代函数）调用1个参数：(value)。
 *
 * @since 1.0.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The iteratee to transform keys.
 * @returns {Object} Returns the composed aggregate object.
 * @see groupBy, partition
 * @example
 *
 * const array = [
 *   { 'dir': 'left', 'code': 97 },
 *   { 'dir': 'right', 'code': 100 }
 * ]
 *
 * keyBy(array, ({ code }) => String.fromCharCode(code))
 * // => { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }
 */
function keyBy(collection: any, iteratee: any) {
    return reduce(
        collection,
        (result: object, value: any) => {
            baseAssignValue(result, iteratee(value), value);
            return result;
        },
        {},
    );
}

export default keyBy;
