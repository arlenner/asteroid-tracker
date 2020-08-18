import { VALUE, TAG, TYPE } from './symbols'
import { err } from './err'

const Some = x => ({
    [TYPE]: 'Option',
    [VALUE]: x,
    [TAG]:   'Some',
    map(f)   { return Option.of(f(this[VALUE])) },
    chain(f) { return f(this[VALUE]) },
    unwrap() { return this[VALUE]},
    ap(ft)   { return ft.map(this[VALUE]) }
})

const None = _ => ({
    [TYPE]: 'Option',
    [VALUE]: null,
    [TAG]:   'None',
    map(_)   { return this },
    chain(_) { return this },
    unwrap() { return this },
    ap(ft)   { return ft }
})

export const Option = {
    Some, None,
    isOption: x => x[TYPE] && x[TYPE] === 'Option',
    isSome: x => x[TAG] && x[TAG] === 'Some',
    isNone: x => x === undefined || x === null || (x[TAG] && x[TAG] === 'None'),
    of: x => 
        Option.isNone(x) ? None()
      : /*else*/           Some(x),
    expect: (eMsg, x) =>
        Option.isNone(x) ? err(eMsg) 
      : Option.isOption(x)      ? x.unwrap() 
      : /*else*/           err(`Supplied parameter to fn:expect must be of type <Option>`)   
}

