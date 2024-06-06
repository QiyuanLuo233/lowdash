/**
 * 重复 N 次给定字符串
 *
 * @since 1.0.0
 * @category String
 * @param {string} [string=''] The string to repeat.
 * @param {number} [n=1] The number of times to repeat the string.
 * @returns {string} Returns the repeated string.
 * @example
 *
 * repeat('*', 3)
 * // => '***'
 *
 * repeat('abc', 2)
 * // => 'abcabc'
 *
 * repeat('abc', 0)
 * // => ''
 */
function repeat(string:string, n:number):string {
    let result = '';
    if (!string || n < 1 || n > Number.MAX_SAFE_INTEGER) {
        return result;
    }
    // Leverage the exponentiation by squaring algorithm for a faster repeat.
    // See https://en.wikipedia.org/wiki/Exponentiation_by_squaring for more details.
    do {
        if (n % 2) {
            result += string;
        }
        n = Math.floor(n / 2);
        if (n) {
            string += string;
        }
    } while (n);

    return result;
}

export default repeat;
