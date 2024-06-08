import unzip from './unzip.js';

/**
 * 创建一个分组元素的数组，数组的第一个元素包含所有给定数组的第一个元素，
 * 数组的第二个元素包含所有给定数组的第二个元素，以此类推。
 *
 * @since 1.0.0
 * @category Array
 * @param {...Array} [arrays] The arrays to process.
 * @returns {Array} Returns the new array of grouped elements.
 * @see unzip, unzipWith, zipObject, zipObjectDeep, zipWith
 * @example
 *
 * zip(['a', 'b'], [1, 2], [true, false])
 * // => [['a', 1, true], ['b', 2, false]]
 */
function zip(...arrays:any []):any [] {
    return unzip(arrays);
}

export default zip;
