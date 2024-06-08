import baseSet from './.internal/baseSet.js';
import baseZipObject from './.internal/baseZipObject.js';

/**
 * 这个方法类似_.zipObject，除了它支持属性路径。
 *
 * @since 1.0.0
 * @category Array
 * @param {Array} [props=[]] The property identifiers.
 * @param {Array} [values=[]] The property values.
 * @returns {Object} Returns the new object.
 * @see unzip, unzipWith, zip, zipObject, zipWith
 * @example
 *
 * zipObjectDeep(['a.b[0].c', 'a.b[1].d'], [1, 2])
 * // => { 'a': { 'b': [{ 'c': 1 }, { 'd': 2 }] } }
 */
function zipObjectDeep(props, values) {
    return baseZipObject(props || [], values || [], baseSet);
}

export default zipObjectDeep;
