/**
 * 检查value，以确定一个默认值是否应被返回。如果value为NaN, null, 
 * 或者 undefined，那么返回defaultValue默认值
 *
 * @since 1.0.0
 * @category Util
 * @param {*} value The value to check.
 * @param {*} defaultValue The default value.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * defaultTo(1, 10)
 * // => 1
 *
 * defaultTo(undefined, 10)
 * // => 10
 */
function defaultTo(value:any, defaultValue:any) {
    return value == null || value !== value ? defaultValue : value;
}

export default defaultTo;
