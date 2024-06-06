/**
 * 创建一个会缓存 func 结果的函数。 如果提供了 resolver ，
 * 就用 resolver 的返回值作为 key 缓存函数的结果。
 *  默认情况下用第一个参数作为缓存的 key。 func 在调用时 this 会绑定在缓存函数上。
 *
 * **Note:** 缓存会暴露在缓存函数的 cache 上。 它是可以定制的，
 * 只要替换了 _.memoize.Cache 构造函数，
 * 或实现了Map 的 delete, get, has, 和 set方法。
 *
 * @since 1.0.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * const object = { 'a': 1, 'b': 2 }
 * const other = { 'c': 3, 'd': 4 }
 *
 * const values = memoize(values)
 * values(object)
 * // => [1, 2]
 *
 * values(other)
 * // => [3, 4]
 *
 * object.a = 2
 * values(object)
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b'])
 * values(object)
 * // => ['a', 'b']
 *
 * // Replace `memoize.Cache`.
 * memoize.Cache = WeakMap
 */
function memoize(func, resolver) {
    if (typeof func !== 'function' || (resolver != null && typeof resolver !== 'function')) {
        throw new TypeError('Expected a function');
    }
    const memoized = function (...args) {
        const key = resolver ? resolver.apply(this, args) : args[0];
        const cache = memoized.cache;

        if (cache.has(key)) {
            return cache.get(key);
        }
        const result = func.apply(this, args);
        memoized.cache = cache.set(key, result) || cache;
        return result;
    };
    memoized.cache = new (memoize.Cache || Map)();
    return memoized;
}

memoize.Cache = Map;

export default memoize;
