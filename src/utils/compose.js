export const compose = (...fns) => (...args) =>
    fns.reduceRight((acc, next) => next(acc), fns.pop()(...args))