import { compose } from './compose'
import { identity } from './identity'

export const Async = fork => ({
  fork,
  map(f) {
    return Async((err, ok) => 
      this.fork(err, compose(ok, f)))
  },
  chain(f) {
    return Async((err, ok) => 
      this.fork(err, x => f(x).fork(err, ok)))
  },
  unwrap() { this.chain(identity) },
})

Async.http = (method, url, body) => {
  return Async((err, ok) => {
    const r = new XMLHttpRequest()
    r.open(method, url)
    
    r.addEventListener('readystatechange', _ => 
                       
      r.readyState == 0   ? console.log('Awaiting Send...')
    : r.readyState == 1   ? console.log('Opened request.')
    : r.readyState == 2   ? console.log('Headers recieved.')
    : r.readyState == 3   ? console.log('Acquiring data...')
    : r.readyState == 4 
      && r.status === 200 ? ok(JSON.parse(r.responseText))
    : /*else*/              err(r.responseText))
    
    r.send(body)
  })
}
