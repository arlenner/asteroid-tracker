export const curry = fn => (...args) => 
    args.length < fn.length ? curry(fn).bind(null, ...args)
  : /*else*/                  fn.call(null, ...args)