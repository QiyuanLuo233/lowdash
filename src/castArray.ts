/**
 * 如果 value 不是数组, 那么强制转为数组。
 *
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to inspect.
 * @returns {Array} Returns the cast array.
 * @example
 *
 * castArray(1)
 * // => [1]
 *
 * castArray({ 'a': 1 })
 * // => [{ 'a': 1 }]
 *
 * castArray('abc')
 * // => ['abc']
 *
 * castArray(null)
 * // => [null]
 *
 * castArray(undefined)
 * // => [undefined]
 *
 * castArray()
 * // => []
 *
 * const array = [1, 2, 3]
 * console.log(castArray(array) === array)
 * // => true
 */
function castArray(...args:any) {
    if (!args.length) {
        return [];
    }
    const value:any = args[0];
    return Array.isArray(value) ? value : [value];
}

export default castArray;
