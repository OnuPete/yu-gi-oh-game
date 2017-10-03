// @flow

const createReducer = (getInitialState: any, responses: any) =>
  (state: any = getInitialState, action: any) => {
    let fn
    const reduced = Object.keys(responses).reduce((acc, type) => {
      if (type === action.type) {
        fn = responses[type]
        // eslint-disable-next-line
        acc = fn(state, action)
      }
      return acc
    }, null)
    return reduced !== null ? reduced : state
  }


export default createReducer
