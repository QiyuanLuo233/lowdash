import map from './map.js';

/**
 * 创建了一个函数，这个函数会迭代pairs，并调用最先返回真值对应的函数。该断言函数对绑定 this 及传入创建函数的参数。
 *
 * @since 1.0.0
 * @category Util
 * @param {Array} pairs The predicate-function pairs.
 * @returns {Function} Returns the new composite function.
 * @example
 *
 * const func = cond([
 *   [matches({ 'a': 1 }),         () => 'matches A'],
 *   [conforms({ 'b': isNumber }), () => 'matches B'],
 *   [() => true,                  () => 'no match']
 * ])
 *
 * func({ 'a': 1, 'b': 2 })
 * // => 'matches A'
 *
 * func({ 'a': 0, 'b': 1 })
 * // => 'matches B'
 *
 * func({ 'a': '1', 'b': '2' })
 * // => 'no match'
 */
function cond(pairs: any[]) {
    const length:number = pairs == null ? 0 : pairs.length;

    pairs = !length
        ? []
        : map(pairs, (pair: any[]) => {
              if (typeof pair[1] !== 'function') {
                  throw new TypeError('Expected a function');
              }
              return [pair[0], pair[1]];
          });
    // eslint-disable-next-line consistent-return
    return function (this: any, ...args: any[]) {
        for (const pair of pairs) {
            if (pair[0].apply(this, args)) {
                return pair[1].apply(this, args);
            }
        }
    };
}

export default cond;
