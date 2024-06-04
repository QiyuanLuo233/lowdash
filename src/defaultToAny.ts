import arrayReduce from './.internal/arrayReduce.js';
import defaultTo from './defaultTo.js';

/**
 * 检查value，以确定一个默认值是否应被返回。如果value为NaN, null, 或者 undefined，那么返回后续第一个不为NaN，null，undefined的值
 *
 * @since 1.0.0
 * @category Util
 * @param {*} value The value to check.
 * @param {...*} defaultValues The default values.
 * @returns {*} Returns the resolved value.
 * @see _.defaultTo
 * @example
 *
 * defaultToAny(1, 10, 20)
 * // => 1
 *
 * defaultToAny(undefined, 10, 20)
 * // => 10
 *
 * defaultToAny(undefined, null, 20)
 * // => 20
 *
 * defaultToAny(undefined, null, NaN)
 * // => NaN
 */
function defaultToAny(value, ...defaultValues) {
    return arrayReduce(defaultValues, defaultTo, value);
}

export default defaultToAny;
