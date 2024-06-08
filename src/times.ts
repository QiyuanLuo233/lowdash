/** Used as references for various `Number` constants. */
const MAX_SAFE_INTEGER = 9007199254740991;

/** Used as references for the maximum length and index of an array. */
const MAX_ARRAY_LENGTH = 4294967295;

/**
 * 调用 iteratee n 次，每次调用返回的结果存入到数组中。
 *  iteratee 调用入1个参数： (index)。
 *
 * @since 1.0.0
 * @category Util
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 * @example
 *
 * times(3, String)
 * // => ['0', '1', '2']
 *
 *  times(4, () => 0)
 * // => [0, 0, 0, 0]
 */
function times(n:number, iteratee):any [] {
    if (n < 1 || n > MAX_SAFE_INTEGER) {
        return [];
    }
    let index = -1;
    const length = Math.min(n, MAX_ARRAY_LENGTH);
    const result = new Array(length);
    while (++index < length) {
        result[index] = iteratee(index);
    }
    index = MAX_ARRAY_LENGTH;
    n -= MAX_ARRAY_LENGTH;
    while (++index < n) {
        iteratee(index);
    }
    return result;
}

export default times;
