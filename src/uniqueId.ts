/** Used to generate unique IDs. */
const idCounter = {};

/**
 * 生成唯一ID。 如果提供了 prefix ，会被添加到ID前缀上。
 *
 * @since 1.0.0
 * @category Util
 * @param {string} [prefix=''] The value to prefix the ID with.
 * @returns {string} Returns the unique ID.
 * @see random
 * @example
 *
 * uniqueId('contact_')
 * // => 'contact_104'
 *
 * uniqueId()
 * // => '105'
 */
function uniqueId(prefix= '$lowdash$'):string {
    if (!idCounter[prefix]) {
        idCounter[prefix] = 0;
    }

    const id = ++idCounter[prefix];
    if (prefix === '$lowdash$') {
        return `${id}`;
    }

    return `${prefix}${id}`;
}

export default uniqueId;
