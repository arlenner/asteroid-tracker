import { curry } from './curry'

/**
 * prop :: String -> Object -> a
 */
export const prop = curry((k, obj) => Option.of(obj[k]))

export const split = curry((delim, str) => str.split(delim))

export const join = curry((delim, arr) => arr.join(delim))

export const toString = item => item.toString()

export const slice = curry((start, end, arrlike) => arrlike.slice(start, end))

export const tap = curry((f, x) => {
    f(x)
    return x
})