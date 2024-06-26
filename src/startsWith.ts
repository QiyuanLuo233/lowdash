/**
 * 检查字符串string是否以 target 开头。
 *
 * @since 1.0.0
 * @category String
 * @param {string} [string=''] The string to inspect.
 * @param {string} [target] The string to search for.
 * @param {number} [position=0] The position to search from.
 * @returns {boolean} Returns `true` if `string` starts with `target`,
 *  else `false`.
 * @see endsWith, includes
 * @example
 *
 * startsWith('abc', 'a')
 * // => true
 *
 * startsWith('abc', 'b')
 * // => false
 *
 * startsWith('abc', 'b', 1)
 * // => true
 */
function startsWith(string:string, target:string, position:number = 0):boolean {
    const { length } = string;
    position = position == null ? 0 : position;
    if (position < 0) {
        position = 0;
    } else if (position > length) {
        position = length;
    }
    target = `${target}`;
    return string.slice(position, position + target.length) === target;
}

export default startsWith;
