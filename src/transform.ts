import arrayEach from './.internal/arrayEach.js';
import baseForOwn from './.internal/baseForOwn.js';
import isBuffer from './isBuffer.js';
import isObject from './isObject.js';
import isTypedArray from './isTypedArray.js';

/**
 * _.reduce的替代方法;此方法将转换object对象为一个新的accumulator对象，
 * 结果来自iteratee处理自身可枚举的属性。 每次调用可能会改变 accumulator 对象。
 * 如果不提供accumulator，将使用与[[Prototype]]相同的新对象。
 * iteratee调用4个参数：(accumulator, value, key, object)。如果返回 false，iteratee 会提前退出。
 *
 * @since 1.0.0
 * @category Object
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The custom accumulator value.
 * @returns {*} Returns the accumulated value.
 * @see reduce, reduceRight
 * @example
 *
 * transform([2, 3, 4], (result, n) => {
 *   result.push(n *= n)
 *   return n % 2 === 0
 * }, [])
 * // => [4, 9]
 *
 * transform({ 'a': 1, 'b': 2, 'c': 1 }, (result, value, key) => {
 *   (result[value] || (result[value] = [])).push(key)
 * }, {})
 * // => { '1': ['a', 'c'], '2': ['b'] }
 */
function transform(object, iteratee, accumulator) {
    const isArr = Array.isArray(object);
    const isArrLike = isArr || isBuffer(object) || isTypedArray(object);

    if (accumulator == null) {
        const Ctor = object && object.constructor;
        if (isArrLike) {
            accumulator = isArr ? new Ctor() : [];
        } else if (isObject(object)) {
            accumulator =
                typeof Ctor === 'function' ? Object.create(Object.getPrototypeOf(object)) : {};
        } else {
            accumulator = {};
        }
    }
    (isArrLike ? arrayEach : baseForOwn)(object, (value, index, _object) =>
        iteratee(accumulator, value, index, _object),
    );
    return accumulator;
}

export default transform;
