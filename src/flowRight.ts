import flow from './flow.js';

/**
 * 这个方法类似_.flow，除了它调用函数的顺序是从右往左的。
 *
 * @since 1.0.0
 * @category Util
 * @param {Function[]} [funcs] The functions to invoke.
 * @returns {Function} Returns the new composite function.
 * @see flow
 * @example
 *
 * import add from 'lodash/add'
 *
 * function square(n) {
 *   return n * n
 * }
 *
 * const addSquare = flowRight(square, add)
 * addSquare(1, 2)
 * // => 9
 */
function flowRight(...funcs) {
    return flow(...funcs.reverse());
}

export default flowRight;
