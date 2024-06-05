/** Used to check objects for own properties. */
const hasOwnProperty = Object.prototype.hasOwnProperty;

/**
 * 这个方法类似_.invert，除了倒置对象
 *  是 collection（集合）中的每个元素经过 iteratee（迭代函数） 处理后返回的结果。
 * 每个反转键相应反转的值是一个负责生成反转值key的数组。
 * iteratee 会传入3个参数：(value) 。
 *
 * @since 1.0.0
 * @category Object
 * @param {Object} object The object to invert.
 * @param {Function} iteratee The iteratee invoked per element.
 * @returns {Object} Returns the new inverted object.
 * @example
 *
 * const object = { 'a': 1, 'b': 2, 'c': 1 }
 *
 * invertBy(object, value => `group${value}`)
 * // => { 'group1': ['a', 'c'], 'group2': ['b'] }
 */
function invertBy(object, iteratee):any {
    const result = {};
    Object.keys(object).forEach((key) => {
        const value = iteratee(object[key]);
        if (hasOwnProperty.call(result, value)) {
            result[value].push(key);
        } else {
            result[value] = [key];
        }
    });
    return result;
}

export default invertBy;
