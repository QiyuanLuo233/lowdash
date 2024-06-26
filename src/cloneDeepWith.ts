import baseClone from './.internal/baseClone.js';

/** Used to compose bitmasks for cloning. */
const CLONE_DEEP_FLAG = 1;
const CLONE_SYMBOLS_FLAG = 4;

/**
 * 这个方法类似_.cloneWith，除了它会递归克隆 value。
 *
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to recursively clone.
 * @param {Function} [customizer] The function to customize cloning.
 * @returns {*} Returns the deep cloned value.
 * @see cloneWith
 * @example
 *
 * function customizer(value) {
 *   if (isElement(value)) {
 *     return value.cloneNode(true)
 *   }
 * }
 *
 * const el = cloneDeepWith(document.body, customizer)
 *
 * console.log(el === document.body)
 * // => false
 * console.log(el.nodeName)
 * // => 'BODY'
 * console.log(el.childNodes.length)
 * // => 20
 */
function cloneDeepWith(value:any, customizer:any) {
    customizer = typeof customizer === 'function' ? customizer : undefined;
    return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG, customizer);
}

export default cloneDeepWith;
