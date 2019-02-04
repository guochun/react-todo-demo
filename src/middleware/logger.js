/**
 * 
 * 打印actions 和 state
 * 
 */

const logger = ({ getState, dispatch }) => next => action => {

    console.group(action.type)
    console.log('dispathcing', action)
    const result = next(action)
    console.log('next State', getState())
    console.groupEnd()
    return result

};


export default logger