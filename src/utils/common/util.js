export const is = {
  undef: v => v === null || v === undefined,
  notUndef: v => v !== null && v !== undefined,
  noString: f => typeof f !== 'string',
  noFunc: f => typeof f !== 'function',
  noNumber: n => typeof n !== 'number',
  noArray: !Array.isArray
}

export function log(level, message, error) {
  console[level].call(console, message, error) // eslint-disable-line
}

export function tap(value, predicate, error) {
  if (predicate(value)) {
    log('log', 'uncaught at check', error)
    // throw new Error(error)
  }
}
