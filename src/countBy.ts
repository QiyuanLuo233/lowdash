import baseAssignValue from './.internal/baseAssignValue.js';
import reduce from './reduce.js';

/** Used to check objects for own properties. */
const hasOwnProperty = Object.prototype.hasOwnProperty;

/**
 * 创建一个组成对象，key（键）是经过 iteratee（迭代函数） 执行处理collection中每个元素后返回的结果，
 * 每个key（键）对应的值是 iteratee（迭代函数）返回该key（键）的次数（注：迭代次数）。 
 * iteratee 调用一个参数：(value)。.
 *
 * @since 1.0.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The iteratee to transform keys.
 * @returns {Object} Returns the composed aggregate object.
 * @example
 *
 * const users = [
 *   { 'user': 'barney', 'active': true },
 *   { 'user': 'betty', 'active': true },
 *   { 'user': 'fred', 'active': false }
 * ]
 *
 * countBy(users, value => value.active);
 * // => { 'true': 2, 'false': 1 }
 */
function countBy(collection:any, iteratee:any) {
    return reduce(
        collection,
        (result, value, key) => {
            key = iteratee(value);
            if (hasOwnProperty.call(result, key)) {
                ++result[key];
            } else {
                baseAssignValue(result, key, 1);
            }
            return result;
        },
        {},
    );
}

export default countBy;
