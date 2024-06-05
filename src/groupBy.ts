import baseAssignValue from './.internal/baseAssignValue.js';
import reduce from './reduce.js';

/** Used to check objects for own properties. */
const hasOwnProperty = Object.prototype.hasOwnProperty;

/**
 * 创建一个对象，key 是 iteratee 遍历 collection(集合) 中的每个元素返回的结果。
 *  分组值的顺序是由他们出现在 collection(集合) 中的顺序确定的
 * 。每个键对应的值负责生成 key 的元素组成的数组。
 * iteratee 调用 1 个参数： (value)
 *
 * @since 1.0.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The iteratee to transform keys.
 * @returns {Object} Returns the composed aggregate object.
 * @example
 *
 * groupBy([6.1, 4.2, 6.3], Math.floor)
 * // => { '4': [4.2], '6': [6.1, 6.3] }
 * // The `_.property` iteratee shorthand.
 *_.groupBy(['one', 'two', 'three'], 'length');
 * // => { '3': ['one', 'two'], '5': ['three'] }
 */
function groupBy(collection:any, iteratee:any) {
    return reduce(
        collection,
        (result, value, key) => {
            key = iteratee(value);
            if (hasOwnProperty.call(result, key)) {
                result[key].push(value);
            } else {
                baseAssignValue(result, key, [value]);
            }
            return result;
        },
        {},
    );
}

export default groupBy;
