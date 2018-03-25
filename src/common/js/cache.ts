const LC_KEY: string = '__yinodePic__'

const cache = {
  set<t>(val: t, key: string): t {
    let strinifyObject = JSON.stringify(val)
    localStorage.setItem(key + LC_KEY, strinifyObject)
    return val
  },
  get<t>(def: t, key: string): any {
    let r = localStorage.getItem(key + LC_KEY)
    if (r) return JSON.parse(r)
    return def
  }
}

export default cache
