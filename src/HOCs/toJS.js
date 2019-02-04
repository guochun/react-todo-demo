import React from 'react'
import { Iterable } from 'immutable'

export const toJS = WrappedComponent =>
  wrappedComponentProps => {
    const KEY = 0
    const VALUE = 1
    const propJS = Object.entries(wrappedComponentProps).reduce((newProps, wrappedComponentProp) => {
      const propsKey = wrappedComponentProp[KEY]
      const propsValue = wrappedComponentProp[VALUE]
      newProps[propsKey] = Iterable.isIterable(propsValue) ?
        propsValue.toJS() : propsValue
      return newProps
    }, {})

    return <WrappedComponent {...propJS} />
  }

export default toJS