import assignValue from './.internal/assignValue.js';
import baseZipObject from './.internal/baseZipObject.js';

/**
 * 这个方法类似_.fromPairs，除了它接受2个数组，
 * 第一个数组中的值作为属性标识符（属性名），第二个数组中的值作为相应的属性值。
 *
 * @since 1.0.0
 * @category Array
 * @param {Array} [props=[]] The property identifiers.
 * @param {Array} [values=[]] The property values.
 * @returns {Object} Returns the new object.
 * @see unzip, unzipWith, zip, zipObjectDeep, zipWith
 * @example
 *
 * zipObject(['a', 'b'], [1, 2])
 * // => { 'a': 1, 'b': 2 }
 */
function zipObject(props, values) {
    return baseZipObject(props || [], values || [], assignValue);
}

export default zipObject;
